"use client";

import React, { memo, useEffect, useState } from "react";
import { useContextDefault } from "@/context/Context";
import menuStructure from "../../utils/menuStructure";
import { usePathname } from "next/navigation";

const Submenu: React.FC = memo(function Submenu() {
  const [indexSelected, setIndex] = useState(0);
  const context = useContextDefault();
  const pathname = usePathname();
  const setSubmenu = context?.setSubmenuAndSelected;
  const submenu = context?.submenu;

  useEffect(() => {
    const indexMenu = menuStructure.findIndex((item: { caminho: string }) =>
      item.caminho.includes(pathname),
    );
    setIndex(indexMenu);
  }, [pathname]);
  
  return (
    <div className={`col-start-8 row-span-3 col-span-19 flex justify-center bg-[#00978C] items-center gap-20 animate-fade-right animate-duration-[2500ms] ${menuStructure[indexSelected].submenuElements.length === 1 && "hidden"}`}>
      {menuStructure[indexSelected].submenu.map((item, index) => {
        return (
          <button
            onClick={() => {
              setSubmenu?.(
                menuStructure[indexSelected].caminho,
                menuStructure[indexSelected].submenuElements[index],
              );
            }}
            key={item}
            className={`w-[20%] py-2 rounded-xl border-3 border-white  cursor-pointer ${
              submenu === menuStructure[indexSelected].submenuElements[index]
                ? "bg-white"
                : "hover:bg-second/20"
            }`}
          >
            <p
              className={`text-center uppercase font-bold desktop:text-[1em] text-[1em] ${
                submenu === menuStructure[indexSelected].submenuElements[index]
                  ? "text-[#00978C]"
                  : "text-white"
              }`}
            >
              {item}
            </p>
          </button>
        );
      })}
    </div>
  );
});

export default Submenu;
