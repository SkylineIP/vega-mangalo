"use client"
import React from "react"
import Menu from "../components/Menu"
import Submenu from "../components/Submenu"
import { useContextDefault } from "@/context/Context"
import Image from "next/image"
import posthog from "posthog-js"

const DiferenciaisPage = () => {
    const context = useContextDefault();
    const submenu = context?.submenu;
    return (
        <div className="w-full h-full grid grid-cols-24 grid-rows-24">
            <Menu />
            <div className="col-span-17 row-span-21 grid grid-cols-17 grid-rows-21 bg-exp bg-cover row-start-1 animate-fade animate-duration-[2000ms]">
                {submenu === "apartamentos" && (
                    <div className="col-span-15 col-start-2 row-start-2 relative row-span-18 flex justify-center items-center animate-fade">
                        <Image
                            src="/diferenciais/apartamento.png"
                            alt="Apartamentos"
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
                {submenu === "area-comum" && (
                    <div className="col-span-15 col-start-2 row-start-2 relative row-span-18 flex justify-center items-center animate-fade">
                        <Image
                            src="/diferenciais/area-comum.png"
                            alt="Apartamentos"
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
            </div>
            <Submenu />
        </div >
    )
}

export default DiferenciaisPage