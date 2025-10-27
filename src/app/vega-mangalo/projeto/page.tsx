"use client";

import React, { useRef, useState } from "react";
import Menu from "../components/Menu";
import Image from "next/image";
import { useContextDefault } from "@/context/Context";
import Submenu from "../components/Submenu";
import BolotarioSvg from "./components/BolotarioSvg";

const ProjetoPage: React.FC = () => {
    const context = useContextDefault();
    const [coords, setCoords] = useState({ x: 0, y: 0 });
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

    const handleGClick = (e: React.MouseEvent<SVGGElement>, index: number) => {
        const targetG = e.currentTarget; // The clicked <g> element

        if (parentRef.current) {
            // Get the screen position and size of the clicked <g> element
            const gRect = targetG.getBoundingClientRect();
            // Get the screen position of the parent container
            const parentRect = parentRef.current.getBoundingClientRect();

            // 1. Calculate the center point of the <g> element relative to the screen
            const gCenterX = gRect.left + gRect.width / 2;
            const gCenterY = gRect.top + gRect.height / 2;

            // 2. Convert the screen center point to a coordinate relative to the parent div
            const relativeX = gCenterX - parentRect.left;
            const relativeY = gCenterY - parentRect.top;

            setCoords({ x: relativeX, y: relativeY });

            console.log(`G Element Center (Relative): x=${relativeX}, y=${relativeY}`);
        }
        setCurIndex(index);
        console.log(`Clicked on G element with index: ${index}`);
    };

    const divSize = 20;
    return (
        <div className="w-full h-full grid grid-cols-24 grid-rows-24">
            <Menu />
            <div className="col-span-17 row-span-21 grid grid-cols-17 grid-rows-20 bg-exp bg-cover row-start-1 overflow-hidden animate-fade animate-duration-[2000ms] relative">
                <div ref={parentRef} className="col-span-15 col-start-2 row-start-2 row-span-18 relative justify-items-center items-center">
                    <BolotarioSvg
                        onGClick={handleGClick}
                    />
                    {curIndex !== null && (
                        <div
                            // Positioning class: absolute is essential
                            className="absolute w-[25%] h-[30%] z-50 flex items-center"
                            style={{
                                // 1. Position the container's top-left corner at the G element's center
                                top: `${coords.y}px`,
                                left: `${coords.x}px`,

                                // 2. Use transform to adjust the position:
                                //    a) TranslateX(-50%): Centers the image container horizontally on coords.x
                                //    b) TranslateY(Y_OFFSET): Pushes the image container down by a desired offset (e.g., 20px)
                                //       You need to find a suitable responsive offset (e.g., 20px)
                                transform: 'translate(-50%, 20px)', // <-- Responsive offset adjustment

                                // OPTIONAL: Add a transition for a smoother appearance
                                transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
                                opacity: curIndex !== null ? 1 : 0,
                            }}
                        >
                            <Image
                                src={images.find(img => img.index === curIndex)?.src || "/path/to/default/image.png"}
                                alt="Pointer Image"
                                fill
                                className="object-contain pointer-events-none"
                            />
                        </div>
                    )}
                    <Image
                        src="/bolotario/content.png"
                        alt="Destaque Imagem"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <Submenu />
        </div >
    );
};

export default ProjetoPage;
