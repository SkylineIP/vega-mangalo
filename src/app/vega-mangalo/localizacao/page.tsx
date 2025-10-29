"use client";

import React from "react";
import Menu from "../components/Menu";
import Submenu from "../components/Submenu";
import { useContextDefault } from "@/context/Context";
import GoogleMap from "../../components/GoogleMaps";
import Image from "next/image";

const LocalizacaoPage: React.FC = () => {
  const context = useContextDefault();
  const submenu = context?.submenu;

  return (
    <div className="w-full h-screen bg-background grid grid-cols-24 min-h-[800px] min-w-[1200px] grid-rows-24">
      <Menu />
      <div className="col-span-17 row-span-21 grid grid-rows-24 grid-cols-19 overflow-hidden animate-fade animate-duration-[2000ms]">
        {submenu === "proximidades" && (
          <div
            className="row-span-22 col-span-17 row-start-2 col-start-2 relative w-full h-full
          animate-fade animate-duration-[1000ms]"
          >
            <Image
              src="/localizacao/proximidades.png"
              alt="Mapa 3D"
              fill
              className="object-contain"
            />
          </div>
        )}
        {(submenu === "mapa-2d" || submenu === "mapa-satelite") && (
          <div className="row-span-22 col-span-17 row-start-2 col-start-2 overflow-hidden rounded-2xl border-2 border-[#00978C]">
            <GoogleMap />
          </div>
        )}
      </div>
      <Submenu />
    </div>
  );
};

export default LocalizacaoPage;
