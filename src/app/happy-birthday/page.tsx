'use client'

import React, {useEffect, useState} from 'react'
import {Happy} from "@/components/happy-birthday/Happy";
import {Birthday} from "@/components/happy-birthday/Birthday";
import confetti from "canvas-confetti"
import Image from "next/image";
import {HappyBackground} from "@/components/happy-birthday/Background/HappyBackground";

interface Props {

}

export default function HappyBirthdayPage({}: Props) {
    const [startAnimation, setStartAnimation] = useState(false)
    useEffect(() => {
        confetti({
            particleCount: 300,
            origin: {y: 0.8, x: 0},
            angle: 65,
            ticks: 500
        })
        confetti({
            particleCount: 300,
            origin: {y: 0.8, x: 1},
            angle: 115,
            ticks: 500
        })
        setStartAnimation(true)
    }, [startAnimation])

    const animation = startAnimation ? '' : ''
    return (
        <>
            <main className="bg-slate-950 h-screen">
                <HappyBackground />
                <div className="absolute top-0 left-0 h-screen w-screen flex flex-col md:flex-row md:gap-4 gap-8 text-white text-7xl items-center justify-center z-10">
                    <Happy/>
                    <Birthday/>
                </div>
            </main>
        </>
    )
}