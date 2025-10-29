import Image from 'next/image';
import React from 'react'

const QuadroView = () => {
    const [selectedImage, setSelectedImage] = React.useState<string>("/memorial/1.png");
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
    const areaComumImages = [
        "/memorial/quadra/1.png",
        "/memorial/quadra/2.png",
        "/memorial/quadra/3.png",
        "/memorial/quadra/4.png",
        "/memorial/quadra/5.png",
        "/memorial/quadra/6.png",
        "/memorial/quadra/7.png",
    ]


    return (
        <>
            <div className="col-span-17 col-start-1 row-start-2 relative row-span-17 flex justify-center items-center animate-fade">
                <Image
                    src={selectedImage}
                    alt="Apartamentos"
                    fill
                    className='object-contain'
                />
            </div>
            <div className="col-span-8 col-start-10 px-10  row-start-20 relative row-span-1 flex justify-around items-center animate-fade">
                <span className='text-[#00978C] font-bold uppercase'>
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
                            backgroundColor: selectedIndex === areaComumImages.indexOf(index) ? '#00978C' : 'white',
                        }}
                        className="w-10 h-10 cursor-pointer relative rounded-full border-2 border-[#00978C] overflow-hidden" />
                ))}
            </div>
        </>
    )
}

export default QuadroView