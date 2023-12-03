import React, { useState, useEffect, useRef } from "react";

const SMEngine = ({
  scenes, //Es un array con objetos que tienen un atributo text
  delete: deleteScene, //0: no borra la escena, 1: borra la escena
  delayBetweenScenes, //Tiempo entre escenas
  speed, //Velocidad de escritura
  onEnd, //Función que se ejecuta al terminar de escribir todas las escenas
  onStart, //Función que se ejecuta al empezar a escribir
  onTyping, //Función que se ejecuta al escribir cada letra
  sfx, //Sonido que se reproduce al escribir cada letra
  className, //Clases de tailwind
  padding, //Padding de tailwind (ej: "p-4")
}) => {
  const [displayedText, setDisplayedText] = useState([""]);
  const [sceneIndex, setSceneIndex] = useState(0);
  const onEndCalled = useRef(false);

  useEffect(() => {
    //Si ya se llamó a onEnd, no se ejecuta de nuevo
    if (onEndCalled.current) {
      return;
    }
    //i es el índice de la letra que se está escribiendo
    let i = 0;
    //Si hay un sonido, se crea un objeto Audio
    const sound = sfx && sfx.file ? new Audio(sfx.file) : null;
    if (sound) {
      sound.volume = sfx.volume;
      sound.playbackRate = sfx.pitch;
    }
    //este if es para que se ejecute la función onStart si es que existe
    if (onStart) {
      onStart();
    }
    const interval = setInterval(() => {
      if (i < scenes[sceneIndex].text.length) {
        const currentLetter = scenes[sceneIndex].text[i];
        setDisplayedText((prevText) => {
          const newText = [...prevText];
          newText[newText.length - 1] += currentLetter;
          return newText;
        });
        if (onTyping) {
          onTyping(currentLetter);
        }
        if (sound) {
          sound.play();
        }
        i++;
      } else {
        clearInterval(interval);
        if (sceneIndex < scenes.length - 1) {
          setTimeout(() => {
            setSceneIndex(sceneIndex + 1);
            if (deleteScene === 1) {
              setDisplayedText([""]);
            } else {
              setDisplayedText((prevText) => [...prevText, ""]);
            }
          }, delayBetweenScenes);
        } else {
          if (onEnd) {
            onEnd();
            onEndCalled.current = true;
          }
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [
    scenes,
    sceneIndex,
    onTyping,
    sfx,
    speed,
    delayBetweenScenes,
    onEnd,
    onStart,
    deleteScene,
  ]);

  return (
    <div className={className}>
      {deleteScene === 0 ? (
        displayedText.map((text, index) => (
          <div key={index} className={`${padding}`}>
            {text}
          </div>
        ))
      ) : (
        <div>{displayedText}</div>
      )}
    </div>
  );
};

export default SMEngine;
