import React from 'react'
import Image from 'next/image';

const MemorialView = () => {
    const [selectedButton, setSelectedButton] = React.useState<string>("apartamento");
    const [selectedImage, setSelectedImage] = React.useState<string>("/memorial/apartamento.png");
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
    const areaComumImages = [
        "/memorial/1.png",
        "/memorial/2.png",
        "/memorial/3.png",
        "/memorial/4.png",
        "/memorial/5.png",
    ]
    return (
        <>
            <div className="col-span-15 col-start-2 row-start-2 relative row-span-17 flex justify-center items-center animate-fade">
                <Image
                    src={selectedImage}
                    alt="Apartamentos"
                    fill
                    className='object-contain'
                />
            </div>
            <div className='col-span-6 row-span-1 row-start-20 col-start-2 flex justify-between items-center'>
                <button
                    onClick={() => {
                        setSelectedButton("apartamento");
                        setSelectedImage("/memorial/apartamento.png");
                    }}
                    style={{
                        backgroundColor: selectedButton === "apartamento" ? '#00978C' : 'white',
                        color: selectedButton === "apartamento" ? 'white' : '#00978C',
                    }}
                    className={`bg-white uppercase text-[#00978C] border-2 font-bold border-[#00978C] px-8 py-2 rounded-lg hover:bg-[#00978C] hover:text-white transition-all duration-300`}
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
                        backgroundColor: selectedButton === "area-comum" ? '#00978C' : 'white',
                        color: selectedButton === "area-comum" ? 'white' : '#00978C',
                    }}
                    className={`bg-white uppercase text-[#00978C] border-2 font-bold border-[#00978C] px-8 py-2 rounded-lg hover:bg-[#00978C] hover:text-white transition-all duration-300`}
                >
                    Área Comum
                </button>
            </div>
            {selectedButton === "area-comum" && (
                <div className="col-span-7 col-start-11 px-10  row-start-20 relative row-span-1 flex justify-around items-center animate-fade">
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
            )}
        </>
    )
}

export default MemorialView