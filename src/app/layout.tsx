import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ContextDefault } from "../context/Context";
import ThemeRegistry from "./materialUITheme";
import { ContextSound } from "@/context/ContextSound";

export const metadata: Metadata = {
  title: "Liv Mangalô",
  description:
    "Descubra o Liv Mangalô: seu novo lar de conforto, estilo e conveniência em um dos bairros mais desejados da cidade. Explore apartamentos modernos, áreas comuns incríveis e uma localização privilegiada que coloca tudo ao seu alcance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground font-bricolage">
        <React.StrictMode>
          <ContextSound>
            <ContextDefault>
              <ThemeRegistry>{children}</ThemeRegistry>
              {/* pode-se colocar a barra lateral aqui, porque ela aparece em todas as telas, menos na rota '/' e na rota '/menu'*/}
            </ContextDefault>
          </ContextSound>
        </React.StrictMode>
      </body>
    </html>
  );
}
