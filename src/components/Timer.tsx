'use client'

import {useTimer} from "@/utils/hooks/useTimer";

interface Props {

}

export function Timer({}: Props) {
    const {timer} = useTimer()
    return (
        <div className="flex flex-col text-5xl text-gray-100 lg:flex-row lg:text-7xl">
            {timer.hours}
            {timer.minutes}
        </div>
    )
}