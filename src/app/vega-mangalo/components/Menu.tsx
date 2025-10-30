"use client";
import posthog from "posthog-js";
import React, { memo } from "react";
import menuStructure from "../../utils/menuStructure";
import { usePathname, useRouter } from "next/navigation";
import { useContextDefault } from "@/context/Context";
import { useContextSound } from "@/context/ContextSound";
import Image from "next/image";

const delay = [
  "animate-delay-100",
  "animate-delay-200",
  "animate-delay-300",
  "animate-delay-400",
  "animate-delay-500",
  "animate-delay-600",
  "animate-delay-700",
];

const Menu: React.FC = memo(function Menu() {
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;
  const pathname = usePathname();
  const router = useRouter();
  const contextSound = useContextSound();
  const playSound = contextSound?.playSound;
  const handleClick = (item: {
    caminho: string;
    submenuElements: string[];
    title: string;
  }) => {
    if (setSubmenuAndSelected && playSound) {
      setSubmenuAndSelected(item.caminho, item.submenuElements[0]);
      router.push(item.caminho);
    }
    posthog.capture("click_touch_button_menu", { menu: item.title });
  };

  const indexSelected = menuStructure.findIndex((item: { caminho: string }) =>
    item.caminho.includes(pathname),
  );
  return (
    <div className="col-span-7 row-span-24 w-full bg-side bg-cover grid grid-rows-24 grid-cols-7 col-start-1 row-start-1">
      <div className="row-span-4 col-span-3 col-start-3 row-start-3 relative animate-fade animate-duration-[2500ms ] text-first bg-background/70 cursor-pointer flex justify-center items-center">
        <Image
          src="/descanso/logo.png"
          alt="Logo Menu"
          fill
          className="object-contain"
        />
      </div>
      <div className="row-span-12 row-start-8 col-span-5 col-start-2 grid-flow-col grid grid-rows-12 grid-cols-5">
        {menuStructure.map((item, index) => (
          <div
            key={index}
            className="col-span-5 row-span-2 py-3.5"
          >
            <button
              onClick={() => {
                handleClick(item);
              }}
              className={`text-white bg-transparent border-4 border-white w-full h-full text-[12px] flex items-center justify-center cursor-pointer rounded-2xl animate-fade-right ${delay[index]
                } animate-duration-[2000ms] ${indexSelected === index
                  && "bg-white"
                }`}
            >
              <p className={`uppercase text-2xl fourk:text-4xl font-bold ${indexSelected === index
                && "text-[#00978C]"
                }`}>{item.title}</p>
            </button>
          </div>
        ))}
      </div>
      <div
        className="row-span-2 col-span-1 col-start-4 row-start-22 relative flex items-center justify-center animate-fade animate-duration-[2500ms] text-black bg-background/70 cursor-pointer"
        onClick={() => {
          posthog.capture("click_home_button_menu");
          setSubmenuAndSelected?.("/vega-mangalo", ""); // Set state before navigation
          router.push("/vega-mangalo"); // Redireciona para a página inicial
        }}
      >
        <Image
          src="/menu/home.png"
          alt="home button"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
});

export default Menu;
