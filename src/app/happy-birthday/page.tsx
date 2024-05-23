'use client'

import React, {useEffect} from 'react'
import {Happy} from "@/components/happy-birthday/Happy";
import {Birthday} from "@/components/happy-birthday/Birthday";
import confetti from "canvas-confetti"

interface Props {

}

export default function HappyBirthdayPage({}: Props) {

    useEffect(() => {
        confetti({
            particleCount: 300,
            origin: {y: 0.8, x: 0},
            angle: 45,
            ticks: 500
        })
        confetti({
            particleCount: 300,
            origin: {y: 0.8, x: 1},
            angle: 135,
            ticks: 500
        })
    }, [])

    return (
        <main className="bg-slate-950 h-screen flex flex-col md:flex-row md:gap-4 gap-8 text-slate-200 text-7xl items-center justify-center">
            <Happy/>
            <Birthday/>
        </main>
    )
}