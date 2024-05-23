import {Time} from "@/utils/interfaces/Time";

const target = {hours: 22, minutes: 59, seconds: 59}

export function useRest() {
    const now = new Date()
    return {
        hours: target.hours - now.getHours(),
        minutes: target.minutes - now.getMinutes(),
        seconds: target.seconds - now.getSeconds(),
    } as Time
}