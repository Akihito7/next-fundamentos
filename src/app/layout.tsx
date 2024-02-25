import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//ao adicionar o variable ao inter , estamos criando uma variavel global na nossa aplicação, com a font inter. isso vai nos permitir definir a font inter sendo a font padrão.
const inter = Inter({ subsets: ["latin"], variable : "--font-inter"});

export const metadata: Metadata = {
  title: "devstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
