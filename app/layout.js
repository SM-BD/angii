import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Hawaii: Part II",
  description: "Hbd bobita",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Providers>
          <main className="dark text-foreground bg-background">
            <div>{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
