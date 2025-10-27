"use client";

import React, { useState } from "react";
import Menu from "../components/Menu";
import Image from "next/image";
import { useContextDefault } from "@/context/Context";

const ImagensPage: React.FC = () => {
  const context = useContextDefault();
  const setAbrirImagensTelaCheia = context?.setAbrirImagensTelaCheia;
  const [imageIndexToShow, setImageIndexToShow] = useState<number | null>(null);
  const imagens = [
    {
      mini: { src: "/imagens/1.jpg", alt: "Imagem 1 Miniatura" },
      full: { src: "/imagens/expanded/1.png", alt: "Imagem 1 Fullscreen" },
    },
    {
      mini: { src: "/imagens/2.jpg", alt: "Imagem 2 Miniatura" },
      full: { src: "/imagens/expanded/2.png", alt: "Imagem 2 Fullscreen" },
    },
    {
      mini: { src: "/imagens/3.jpg", alt: "Imagem 3 Miniatura" },
      full: { src: "/imagens/expanded/3.png", alt: "Imagem 3 Fullscreen" },
    },
    {
      mini: { src: "/imagens/4.jpg", alt: "Imagem 4 Miniatura" },
      full: { src: "/imagens/expanded/4.png", alt: "Imagem 4 Fullscreen" },
    },
    {
      mini: { src: "/imagens/5.jpg", alt: "Imagem 5 Miniatura" },
      full: { src: "/imagens/expanded/5.png", alt: "Imagem 5 Fullscreen" },
    },
    {
      mini: { src: "/imagens/6.jpg", alt: "Imagem 6 Miniatura" },
      full: { src: "/imagens/expanded/6.png", alt: "Imagem 6 Fullscreen" },
    },
    {
      mini: { src: "/imagens/7.jpg", alt: "Imagem 7 Miniatura" },
      full: { src: "/imagens/expanded/7.png", alt: "Imagem 7 Fullscreen" },
    },
    {
      mini: { src: "/imagens/8.jpg", alt: "Imagem 8 Miniatura" },
      full: { src: "/imagens/expanded/8.png", alt: "Imagem 8 Fullscreen" },
    },
    {
      mini: { src: "/imagens/9.jpg", alt: "Imagem 9 Miniatura" },
      full: { src: "/imagens/expanded/9.png", alt: "Imagem 9 Fullscreen" },
    },
    {
      mini: { src: "/imagens/10.jpg", alt: "Imagem 10 Miniatura" },
      full: { src: "/imagens/expanded/10.png", alt: "Imagem 10 Fullscreen" },
    },
    {
      mini: { src: "/imagens/11.jpg", alt: "Imagem 11 Miniatura" },
      full: { src: "/imagens/expanded/11.png", alt: "Imagem 11 Fullscreen" },
    },
    {
      mini: { src: "/imagens/12.jpg", alt: "Imagem 12 Miniatura" },
      full: { src: "/imagens/expanded/12.png", alt: "Imagem 12 Fullscreen" },
    },
    {
      mini: { src: "/imagens/13.jpg", alt: "Imagem 13 Miniatura" },
      full: { src: "/imagens/expanded/13.png", alt: "Imagem 13 Fullscreen" },
    },
    {
      mini: { src: "/imagens/14.jpg", alt: "Imagem 14 Miniatura" },
      full: { src: "/imagens/expanded/14.png", alt: "Imagem 14 Fullscreen" },
    },
    {
      mini: { src: "/imagens/15.jpg", alt: "Imagem 15 Miniatura" },
      full: { src: "/imagens/expanded/15.png", alt: "Imagem 15 Fullscreen" },
    }
  ]

  return (
    <div className="w-full h-full grid grid-cols-24 grid-rows-24">
      <Menu />
      <div className="col-span-17 row-span-20 grid grid-cols-17 grid-rows-20 bg-exp bg-cover row-start-1 overflow-hidden animate-fade animate-duration-[2000ms] relative">
        <div className="col-span-15 col-start-2 row-start-3 row-span-16 relative">
          <Image
            src={imagens[imageIndexToShow ?? 0].full.src}
            alt="Destaque Imagem"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="col-span-17 row-span-4 row-start-21 bg-[#00978C] overflow-x-scroll no-scrollbar animate-fade animate-duration-[2000ms] relative">
        <div className="w-max h-full flex items-center gap-4 px-4 py-2">
          {imagens.map((imagem, index) => (
            <div
              key={index}
              className="w-full h-full relative flex-shrink-0 cursor-pointer transition-all"
              onClick={() => {
                setImageIndexToShow(index);
              }}
            >
              <Image
                src={imagem.mini.src}
                alt={imagem.mini.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagensPage;
