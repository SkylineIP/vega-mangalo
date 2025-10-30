import React, { useEffect, useState } from "react"
import Image from "next/image";

const MemorialView = () => {
    const [selectedButton, setSelectedButton] = useState<string>("apartamento");
    const [selectedImage, setSelectedImage] = useState<string>("/memorial/apartamento.png");
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [startX, setStartX] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const areaComumImages = [
        "/memorial/1.png",
        "/memorial/2.png",
        "/memorial/3.png",
        "/memorial/4.png",
        "/memorial/5.png",
    ]
    const totalImages = areaComumImages.length;
    const goToNext = () => {
        const nextIndex = (selectedIndex + 1) % totalImages;
        setSelectedIndex(nextIndex);
    };
    const goToPrev = () => {
        const prevIndex = (selectedIndex - 1 + totalImages) % totalImages;
        setSelectedIndex(prevIndex);
    };
    useEffect(() => {
        if (selectedButton === "area-comum") {
            setSelectedImage(areaComumImages[selectedIndex]);
        }
    }, [selectedIndex, selectedButton]);
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        if (selectedButton !== "area-comum") return;

        setIsDragging(true);
        if ('touches' in e) {
            setStartX(e.touches[0].clientX);
        } else {
            setStartX(e.clientX);
        }
    };
    const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || selectedButton !== "area-comum") return;
        setIsDragging(false);
        setStartX(null);
        let endX: number;
        if ('changedTouches' in e) {
            endX = e.changedTouches[0].clientX;
        } else {
            endX = e.clientX;
        }
        if (startX !== null) {
            const diffX = startX - endX;
            const threshold = 50;

            if (diffX > threshold) {
                goToNext();
            } else if (diffX < -threshold) {
                goToPrev();
            }
        }
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
    };
    return (
        <>
            <div
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onMouseMove={handleDragMove}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
                onTouchMove={handleDragMove}
                className="col-span-15 col-start-2 row-start-2 relative row-span-17 flex justify-center items-center animate-fade">
                <Image
                    src={selectedImage}
                    alt="Apartamentos"
                    fill
                    className="object-contain"

                />
            </div>
            <div className="col-span-6 row-span-1 row-start-20 col-start-2 gap-16 flex justify-between items-center">
                <button
                    onClick={() => {
                        setSelectedButton("apartamento");
                        setSelectedImage("/memorial/apartamento.png");
                    }}
                    style={{
                        backgroundColor: selectedButton === "apartamento" ? "#00978C" : "white",
                        color: selectedButton === "apartamento" ? "white" : "#00978C",
                    }}
                    className={`bg-white uppercase text-[#00978C] border-2 h-full w-1/2 fourk:text-3xl font-bold border-[#00978C] px-8 py-2 rounded-lg hover:bg-[#00978C] hover:text-white transition-all duration-300`}
                >
                    apartamento
                </button>
                <button
                    onClick={() => {
                        setSelectedButton("area-comum");
                        setSelectedImage(areaComumImages[0]);
                        setSelectedIndex(0);
                    }}
                    style={{
                        backgroundColor: selectedButton === "area-comum" ? "#00978C" : "white",
                        color: selectedButton === "area-comum" ? "white" : "#00978C",
                    }}
                    className={`bg-white uppercase text-[#00978C] border-2 h-full w-1/2 fourk:text-3xl font-bold border-[#00978C] px-8 py-2 rounded-lg hover:bg-[#00978C] hover:text-white transition-all duration-300`}
                >
                    Área Comum
                </button>
            </div>
            {selectedButton === "area-comum" && (
                <div className="col-span-7 col-start-11 px-10  row-start-20 relative row-span-1 flex justify-around items-center animate-fade">
                    <span className="text-[#00978C] fourk:text-3xl font-bold uppercase">
                        Arraste para ver mais!
                    </span>
                    {areaComumImages.map((index) => (
                        <div
                            onClick={() => {
                                setSelectedImage(index);
                                setSelectedIndex(areaComumImages.indexOf(index));
                            }}
                            key={index}
                            style={{
                                backgroundColor: selectedIndex === areaComumImages.indexOf(index) ? "#00978C" : "white",
                            }}
                            className="w-10 h-10 fourk:w-20 fourk:h-20 transition-colors duration-1000s cursor-pointer relative rounded-full border-2 border-[#00978C] overflow-hidden" />
                    ))}
                </div>
            )}
        </>
    )
}

export default MemorialView