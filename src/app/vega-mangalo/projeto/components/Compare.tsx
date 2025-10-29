import React, { useState } from "react";
import Image from "next/image";

interface ImageSet {
    src: string; 
    buttonPressed: string; 
    buttonUnpressed: string; 
}

const PLACEHOLDER_SRC = "/bolotario/compare.png"; 

const Compare: React.FC = () => {
    const ap1: ImageSet = {
        src: "/bolotario/compare/ap1expanded.png",
        buttonPressed: "/bolotario/compare/ap1pressed.png",
        buttonUnpressed: "/bolotario/compare/ap1.png"
    };

    const ap2: ImageSet = {
        src: "/bolotario/compare/ap2expanded.png",
        buttonPressed: "/bolotario/compare/ap2pressed.png",
        buttonUnpressed: "/bolotario/compare/ap2.png"
    };

    const [leftImageSrc, setLeftImageSrc] = useState<string>(PLACEHOLDER_SRC); 
    const [rightImageSrc, setRightImageSrc] = useState<string>(PLACEHOLDER_SRC); 
    
    const [activeButton, setActiveButton] = useState<"left" | "right">("left"); 


    const handleButtonClick = (imageSet: ImageSet) => {
        const targetSrc = imageSet.src;
        
        if (targetSrc === leftImageSrc) {
            setLeftImageSrc(PLACEHOLDER_SRC);
            setActiveButton("left"); 
            return;
        }

        if (targetSrc === rightImageSrc) {
            setRightImageSrc(PLACEHOLDER_SRC);
            setActiveButton("right"); 
            return;
        }

        if (activeButton === "left") {
            setLeftImageSrc(targetSrc);
            if (rightImageSrc === PLACEHOLDER_SRC) {
                 setActiveButton("right");
            }
        } else { 
            setRightImageSrc(targetSrc);
            if (leftImageSrc === PLACEHOLDER_SRC) {
                setActiveButton("left");
            }
        }
    };

    const getButtonImageSrc = (imageSet: ImageSet): string => {
        const isSelected = imageSet.src === leftImageSrc || imageSet.src === rightImageSrc;
        
        return isSelected ? imageSet.buttonPressed : imageSet.buttonUnpressed;
    };



    return (
        <div className="col-span-17 row-span-20 grid grid-cols-17 grid-rows-20">
            <div className="col-span-15 row-span-12 row-start-2 col-start-2 bg-[#00978C] rounded-3xl flex justify-between items-center gap-8 p-6">
                
                <div className="w-1/2 h-full flex relative flex-col justify-center items-center rounded-3xl bg-[#B3B3B3]">
                    <Image
                        src={leftImageSrc} 
                        fill
                        alt="Comparison Image Left"
                        className={`object-contain pointer-events-none z-20 transition-opacity duration-300 ${leftImageSrc === PLACEHOLDER_SRC ? "opacity-50" : "opacity-100"}`}
                    />
                </div>
                
                <div className="w-1/2 h-full flex relative flex-col justify-center items-center rounded-3xl bg-[#B3B3B3]">
                    <Image
                        src={rightImageSrc} 
                        fill
                        alt="Comparison Image Right"
                        className={`object-contain pointer-events-none z-20 transition-opacity duration-300 ${rightImageSrc === PLACEHOLDER_SRC ? "opacity-50" : "opacity-100"}`}
                    />
                </div>
            </div>

            <button 
                className="col-span-3 row-span-5 col-start-2 row-start-15 relative"
                onClick={() => handleButtonClick(ap1)} 
            >
                <Image 
                    src={getButtonImageSrc(ap1)} 
                    fill
                    alt="AP1 Button"
                    className="object-contain"
                />
            </button>
            
            <button 
                className="col-span-3 row-span-5 col-start-6 row-start-15 relative"
                onClick={() => handleButtonClick(ap2)} 
            >
                <Image
                    src={getButtonImageSrc(ap2)} 
                    fill
                    alt="AP2 Button"
                    className="object-contain"
                />
            </button> 

            <div className="col-span-4 row-span-2 col-end-17 relative row-start-15">
                <Image
                    src="/bolotario/compare/instrucao.svg"
                    alt="Legenda Compare"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}

export default Compare;