"use client"
import React from "react"
import Menu from "../components/Menu"
import Submenu from "../components/Submenu"
import { useContextDefault } from "@/context/Context"
import MemorialView from "./components/MemorialView"
import QuadroView from "./components/QuadroView"

const MemorialPage = () => {
    const context = useContextDefault();
    const submenu = context?.submenu;

    return (
        <div className="w-full h-full grid grid-cols-24 grid-rows-24">
            <Menu />
            <div className="col-span-17 row-span-21 grid grid-cols-17 grid-rows-21 bg-exp bg-cover row-start-1 animate-fade animate-duration-[2000ms]">
                {submenu === "memorial" && (
                    <MemorialView />
                )}
                {submenu === "vagas" && (
                    <QuadroView />
                )}
            </div>
            <Submenu />
        </div >
    )
}

export default MemorialPage