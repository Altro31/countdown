import {useEffect, useState} from 'react'
import {Time} from "@/utils/interfaces/Time";
import {useRest} from "@/utils/hooks/useRest";


export function useTimer() {

    const [time, setTime] = useState<Time | null>()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(useRest())
        }, 100)
        return () => clearInterval(intervalId)
    }, []);

    return {time}
}