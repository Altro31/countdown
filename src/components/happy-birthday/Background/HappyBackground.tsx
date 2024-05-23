import React from 'react'
import {Cake} from "@/components/happy-birthday/Background/Cake";
import {Tenis} from "@/components/happy-birthday/Background/Tenis";
import {Star} from "@/components/happy-birthday/Background/Star";

interface Props {

}

export function HappyBackground({}: Props) {

    const comps = [Cake, Tenis, Star]
    const res = []

    for (let i = 0; i < 122; i++) {
        res.push(comps[i % 3])
    }
    // @ts-ignore
    return (
        <div className='h-screen grid z-5 grid-rows-[14] grid-cols-8 text-white gap-x-6 gap-y-4 opacity-70'>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
            <Cake/><Tenis/><Star/><Cake/><Tenis/><Star/><Cake/><Tenis/><Star/>
        </div>
    )
}