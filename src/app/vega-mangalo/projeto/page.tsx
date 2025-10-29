"use client";

import React, { useRef, useState } from "react";
import Menu from "../components/Menu";
import Image from "next/image";
import { useContextDefault } from "@/context/Context";
import Submenu from "../components/Submenu";
import BolotarioSvg from "./components/BolotarioSvg";
import Compare from "./components/Compare";
import Apartamentos from "./components/Apartamentos";

const ProjetoPage: React.FC = () => {
    const context = useContextDefault();
    const submenu = context?.submenu;
    const [curIndex, setCurIndex] = useState<number | null>(null);

    const parentRef = useRef<HTMLDivElement>(null);

    const images = [
        { src: "/bolotario/minis/1.png", index: 1 },
        { src: "/bolotario/minis/2.png", index: 2 },
        { src: "/bolotario/minis/3.png", index: 3 },
        { src: "/bolotario/minis/4.png", index: 4 },
        { src: "/bolotario/minis/6.png", index: 6 },
        { src: "/bolotario/minis/9.png", index: 9 },
        { src: "/bolotario/minis/10.png", index: 10 },
        { src: "/bolotario/minis/11.png", index: 11 },
        { src: "/bolotario/minis/12.png", index: 12 },
    ]

    const RESPONSIVE_POSITIONS: { [key: number]: { top: string, left: string } } = {
        1: { top: '20%', left: '48%' },
        2: { top: '27%', left: '44.9%' },
        3: { top: '30%', left: '50.1%' },
        4: { top: '32%', left: '45.8%' },
        6: { top: '39%', left: '47.4%' },
        9: { top: '45%', left: '47.8%' },
        10: { top: '57%', left: '47.6%' },
        11: { top: '46%', left: '48%' },
        12: { top: '50%', left: '46%' },
    };

    const handleClick = (index: number) => {
        if (index === 5 || index === 7 || index === 8) {
            setCurIndex(null);
            return;
        }
        setCurIndex(index);
        console.log("Clicked on group with index:", index);
    }

    const targetPosition = curIndex !== null ? RESPONSIVE_POSITIONS[curIndex] : null;
    return (
        <div className="w-full h-full grid grid-cols-24 grid-rows-24">
            <Menu />
            <div className="col-span-17 row-span-21 grid grid-cols-17 grid-rows-20 bg-exp bg-cover row-start-1 overflow-hidden animate-fade animate-duration-[2000ms] relative">
                {submenu === "implantacao" && (
                    <div ref={parentRef} className="col-span-15 animate-fade col-start-2 row-start-2 row-span-18 relative justify-items-center items-center">
                        <BolotarioSvg
                            onGClick={handleClick}
                        />
                        {curIndex !== null && (
                            <div className="w-full h-full relative">
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: targetPosition?.top,
                                        left: targetPosition?.left,
                                        zIndex: 30,
                                    }}
                                    className="w-[30%] h-[30%] relative">
                                    <Image
                                        src={images.find(img => img.index === curIndex)?.src || "/path/to/default/image.png"}
                                        alt="Pointer Image"
                                        fill
                                        className="object-contain pointer-events-none z-20"
                                    />
                                </div>
                            </div>
                        )}
                        <Image
                            src="/bolotario/content.png"
                            alt="Destaque Imagem"
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
                {submenu === "compare" && (
                    <Compare/>
                )}
                {submenu === "apartamentos" && (
                    <Apartamentos/>
                )}
            </div>
            <Submenu />
        </div >
    );
};

export default ProjetoPage;
