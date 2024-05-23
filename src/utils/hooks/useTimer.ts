import {useEffect, useState} from 'react'
import {Time} from "@/utils/interfaces/Time";
import {useRest} from "@/utils/hooks/useRest";
import {useRouter} from "next/navigation";
import {PrefetchKind} from "next/dist/client/components/router-reducer/router-reducer-types";


export function useTimer() {
    const [time, setTime] = useState<Time | null>()
    const router = useRouter()

    useEffect(() => {
        const intervalId = setInterval(() => {
            const rest = useRest()
            if (rest.hours == 0 && rest.minutes == 0 && rest.seconds == 5) {
                console.log('prefetch')
                router.prefetch('/happy-birthday', {kind: PrefetchKind.FULL})
            }
            if (rest.hours == 0 && rest.minutes == 0 && rest.seconds == 2) {
                console.log('entré')
                router.push('/happy-birthday')
            }
            setTime(rest)
        }, 100)
        return () => clearInterval(intervalId)
    }, []);

    return {time}
}