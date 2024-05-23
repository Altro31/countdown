'use client'

import {useTimer} from "@/utils/hooks/useTimer";
import {DoubleDotsSeparator} from "@/components/DoubleDotsSeparator";
import type {Time as TimeType} from "@/utils/interfaces/Time";
import {Time} from "./Time";
import {Messages} from "@/components/Messages";
import {useRouter} from "next/navigation";

interface Props {
    initialTime: TimeType
}

export function Timer({initialTime}: Props) {
    const {time} = useTimer()
    const renderTime = time ?? initialTime
    const router = useRouter()
    if (renderTime.hours === 0 && renderTime.minutes === 0 && renderTime.seconds === 0) {
        router.push('/happy-birthday')
    }
    return (
        <div className="flex flex-col text-9xl text-slate-200 md:flex-row md:gap-2 md:text-9xl select-none">
            <Time value={renderTime.hours} type="hours"/>
            <DoubleDotsSeparator/>
            <Time value={renderTime.minutes} type="minutes"/>
            <DoubleDotsSeparator/>
            <Time value={renderTime.seconds} type="seconds"/>
            <Messages time={renderTime}/>
        </div>
    )
}