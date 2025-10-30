import React, { useEffect, useState, MouseEvent, TouchEvent } from "react";
import Image from "next/image";

const QuadroView = () => {
    const [selectedImage, setSelectedImage] = useState<string>("/memorial/1.png");
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [startX, setStartX] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const areaComumImages = [
        "/memorial/quadra/1.png",
        "/memorial/quadra/2.png",
        "/memorial/quadra/3.png",
        "/memorial/quadra/4.png",
        "/memorial/quadra/5.png",
        "/memorial/quadra/6.png",
        "/memorial/quadra/7.png",
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
    const handleDragStart = (e: MouseEvent | TouchEvent) => {
        setIsDragging(true);
        if ('touches' in e) {
            setStartX(e.touches[0].clientX);
        } else {
            setStartX(e.clientX);
        }
    };
    const handleDragEnd = (e: MouseEvent | TouchEvent) => {
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

    const handleDragMove = (e: MouseEvent | TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
    };
    useEffect(() => {
        setSelectedImage(areaComumImages[selectedIndex]);
    }, [selectedIndex]);

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
                className="col-span-17 col-start-1 row-start-2 relative row-span-17 flex justify-center items-center animate-fade">
                <Image
                    src={selectedImage}
                    alt="Apartamentos"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="col-span-8 col-start-10 px-10  row-start-20 relative row-span-1 flex justify-around items-center animate-fade">
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
                        className="w-10 h-10 fourk:w-20 fourk:h-20 cursor-pointer relative rounded-full border-2 border-[#00978C] overflow-hidden transition-colors duration-1000" />
                ))}
            </div>
        </>
    )
}

export default QuadroView