"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { useContextDefault } from "@/context/Context";
import Image from "next/image";

const Home: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;

  const handleClick = () => {
    setSubmenuAndSelected?.("/vega-mangalo", ""); // Set state before navigation
    router.push("/vega-mangalo"); // Redireciona para a página de localização
  };

  return (
    <div
      className="w-fulll h-screen bg-descanso bg-cover grid grid-cols-24 grid-rows-24 overflow-hidden min-h-[800px] min-w-[1200px]"
    >
      <div className=" col-span-8 row-span-12 col-start-9 row-start-6 relative">
        <Image
          src="/descanso/logo.png"
          alt="Logo Descanso"
          fill
          className="object-contain"
        />
      </div>
      <div onClick={() => {
        handleClick();
      }} className="col-span-4 row-span-3 row-start-20 animate-pulse col-start-11 relative cursor-pointer hover:scale-105 transition-all">
        <Image
          src="/descanso/touch.png"
          fill
          alt="TouchButton"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
