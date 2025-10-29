import React from "react"
import Image from "next/image";

const Apartamentos = () => {
    const [currentImage, setCurrentImage] = React.useState<string>("/bolotario/apartamentos/centro.png");
    const buttons = [
        {
            name: "Tipo Centro - 41,65m²",
            src: "/bolotario/apartamentos/centro.png",
        },
        {
            name: "Tipo Canto - 40,85m²",
            src: "/bolotario/apartamentos/canto.png",
        },
        {
            name: "Pav. 8 Unidades",
            src: "/bolotario/apartamentos/pav8.png",
        },
        {
            name: "Pav. 4 Unidades",
            src: "/bolotario/apartamentos/pav4.png",
        }
    ]
  return (
    <div className="  col-span-17 row-span-20 grid grid-cols-17 grid-rows-20">
        <div className="col-span-15 row-span-16 col-start-2 row-start-2 relative">
            <Image
                src={currentImage}
                alt="Destaque Imagem"
                fill
                className="object-contain"
            />
        </div>
        <div className="col-span-15 col-start-2 row-end-20 gap-16 flex justify-between items-center">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentImage(button.src)}
                    style={{
                        backgroundColor: currentImage === button.src ? "#00978C" : "white",
                        color: currentImage === button.src ? "white" : "#00978C",
                    }}
                    className={`bg-white text-[#00978C] h-full w-1/4 fourk:text-3xl border-2 font-bold border-[#00978C] px-8 py-2 rounded-lg hover:bg-[#00978C] hover:text-white transition-all duration-300`}
                >
                    {button.name}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Apartamentos