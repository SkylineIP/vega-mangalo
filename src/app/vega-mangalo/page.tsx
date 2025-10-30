"use client";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useContextDefault } from "@/context/Context";
import menuStructure from "../utils/menuStructure";
import Image from "next/image";
import posthog from "posthog-js";

const MenuPage: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;

  const handleClick = (item: {
    caminho: string;
    submenuElements: string[];
    title: string;
  }) => {
    if (setSubmenuAndSelected) {
      setSubmenuAndSelected(item.caminho, item.submenuElements[0]);
      router.push(item.caminho);
    }
    posthog.capture("click_menu_button", { button: item.title});
  };

  useEffect(() => {
    if (setSubmenuAndSelected) setSubmenuAndSelected("/vega-mangalo", "");
  }, []);

  const left = menuStructure.slice(0, 3);
  const right = menuStructure.slice(3, 6);

  return (
    <div className="w-full h-full bg-menu bg-cover overflow-hidden relative min-h-[800px] min-w-[1200px] grid grid-cols-24 grid-rows-24">
      <div className="col-span-4 row-span-6 row-start-4 col-start-7 relative animate-fade">
        <Image
          src="/descanso/logo.png"
          alt="Logo Menu"
          fill
          className="object-contain"
        />
      </div>
      <div className="col-span-9 row-span-6 flex items-center justify-center col-start-4 row-start-12 gap-8">
        <div className="w-1/2 h-full flex flex-col justify-between gap-8">
          {left.map((item) => (
            <button
              key={item.title}
              style={{
                animationDelay: `${left.indexOf(item) * 0.4}s`,
              }}
              className=" text-[#00978C] uppercase fourk:text-5xl animate-fade-right font-bold transition-all h-full bg-white rounded-2xl text-2xl cursor-pointer hover:underline"
              onClick={() => handleClick(item)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between gap-8">
          {right.map((item) => (
            <button
              style={{
                animationDelay: `${right.indexOf(item) * 0.4}s`,
              }}
              key={item.title}
              className="text-[#00978C] uppercase fourk:text-5xl animate-fade-left font-bold h-full transition-all bg-white rounded-2xl text-2xl cursor-pointer hover:underline"
              onClick={() => handleClick(item)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div
        onClick={() => router.push("/")}
        className="col-span-1 row-span-2 col-start-8 row-start-20 cursor-pointer hover:scale-105 transition-all relative">
        <Image
          src="/menu/home.png"
          alt="home button"
          fill
          className="object-contain animate-fade"
        />
      </div>
    </div >
  );
};

export default MenuPage;
