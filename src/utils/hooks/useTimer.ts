import {useState} from 'react'
import {Time} from "@/utils/interfaces/Time";


export function useTimer() {

    const now = new Date()
    const [timer, setTimer] = useState({hours: now.getHours(), minutes: now.getMinutes()} as Time)
    setInterval(() => {
        const now = new Date()
        setTimer({hours: now.getHours(), minutes: now.getMinutes()} as Time)
    }, 1000)

    return {timer}
}