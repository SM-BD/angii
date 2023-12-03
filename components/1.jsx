"use client";
import SM from "@/components/SM(Engine)";
import RE from "@/components/reproductor";
import audio1 from "@/public/music/1.mp3";
import audio2 from "@/public/music/2.mp3";
import audio3 from "@/public/music/3.mp3";
import beepSound from "@/public/sounds/Beepbeep.mp3";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import React, { useState } from "react";

function Page() {
  const [showButton, setShowButton] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [Iran, setIran] = useState(false);
  const [next, setNext] = useState(0);
  const [pag1, setPag1] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const bdSongs = [
    { name: "Death Music - MOABOMOABOM", audioFile: audio2 },
    { name: "Saferoom - RE7", audioFile: audio1 },
    { name: "Meow - Ivusm", audioFile: audio3 },
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center h-screen text-4xl">
      <div>
        {pag1 ? (
          <>
            <SM
              scenes={[
                {
                  text: "Esta página puede que no se vea bien en dispositivos móviles.",
                },
                {
                  text: "También contiene música, así que asegúrate de tener el volumen adecuado.",
                },
                {
                  text: "Feliz cumpleaños, Angi",
                },
              ]}
              delete={1}
              sfx={{ file: beepSound, volume: 0.5, pitch: 1.5 }}
              className={"text-center"}
              delayBetweenScenes={1500}
              speed={50}
              onEnd={() => setShowButton(true)}
            />
            {showButton && (
              <div className="text-center max-w-md mx-auto">
                <button
                  onClick={() => setPag1(false)}
                  className="m-5 bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
                >
                  :3
                </button>
              </div>
            )}
          </>
        ) : (
          <div
            className={`opacity-0 ${
              mostrar ? "opacity-100" : ""
            } transition-opacity ${
              next === 0
                ? "bg-gradient-to-t from-SM to-puple"
                : "bg-gradient-to-t from-moradito to-puple"
            } h-screen w-screen flex items-center justify-center text-white`}
          >
            <div className="w-1/2 h-3/4 overflow-auto">
              <SM
                scenes={[
                  {
                    text: "Queria hacer algo mas elaborado, pero no me dio el tiempo, disculpa QAQ",
                  },
                ]}
                delete={0}
                className={"text-left"}
                padding={"pt-5"}
                delayBetweenScenes={2000}
                speed={50}
                onStart={() => setMostrar(true)}
                onEnd={() => setIran(true)}
              />
              {Iran && (
                <div>
                  <SM
                    scenes={[
                      {
                        text: "Realmente no se como empezar esto, con el tiempo me he hecho peor para escribir",
                      },
                      {
                        text: "Pero aun así quiero agradecerte por todo lo que has hecho por mi, y por todo lo que me has enseñado. ",
                      },
                      {
                        text: "Tener una memoria muy buena puede ser a veces una maldición, pero... ",
                      },
                      {
                        text: "Las bonitas experiencias como la vez que cuando fuimos al cine y me metiste en el universo de Marvel, o cuando te convenci de cambiarte a weex asfasf o cuando comprabamos gerber",
                      },
                      {
                        text: "Todo eso me hace pensar que tal vez no es tan malo tener una memoria tan buena, porque me permite recordar esos momentos tan bonitos que hemos pasado juntos",
                      },
                      {
                        text: "Parece que no, pero realmente siento que me cambiaste la vida, literalmente por ti me meti a desarrollo web fasjfasf",
                      },

                      {
                        text: "Gracias por inspirarme con tu manera de ser, eres una muy buena persona Angi, gracias por todo lo que has hecho por mi y por los demas",
                      },
                      {
                        text: "Y no te preocupes tanto por el futuro, eres muy inteligente y vas a lograr todo lo que te propongas, te lo aseguro <3",
                      },
                      {
                        text: "Disculpa que no trabaje en la pagina todo lo que queria, esperaba terminar antes de las 12 pero se me complico un poco :p,  espero que te la pases muy bien hoy, Angi :3",
                      },
                      {
                        text: "Regalitos: ",
                      },
                    ]}
                    delete={0}
                    className={"text-left"}
                    padding={"pt-5"}
                    delayBetweenScenes={2000}
                    speed={50}
                    onEnd={() => setNext(next + 1)}
                  />
                  {next === 1 && (
                    <div>
                      <Button color="danger" variant="solid" onPress={onOpen}>
                        Abrir regalos :0
                      </Button>
                      <Modal
                        backdrop="opaque"
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        classNames={{
                          backdrop:
                            "bg-[url('https://res.cloudinary.com/djtsesvfs/image/upload/v1701578791/SMB/imagen_2023-12-02_224624392_kr7nvs.png')]",
                        }}
                      >
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex flex-col gap-1">
                                :3
                              </ModalHeader>
                              <ModalBody>
                                <div class="p-4 flex flex-col">
                                  <a
                                    href="https://open.spotify.com/playlist/42f1zZOPIhzWpH5XVN35Mv"
                                    target="_blank"
                                    class="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded mb-2"
                                  >
                                    Mis canciones favoritas para ti
                                  </a>
                                  <a
                                    href="https://store.steampowered.com/account/ackgift/1858EC1CC254A407?redeemer=euph0rya.exe%2B6587127664226756049%40gmail.com"
                                    target="_blank"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                  >
                                    Un juego de Steam :3
                                  </a>
                                </div>
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="danger"
                                  variant="light"
                                  onPress={onClose}
                                >
                                  Cerrar
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                    </div>
                  )}
                </div>
              )}
            </div>
            <RE songs={bdSongs} loop={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
