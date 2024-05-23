import React from 'react'
import {Time} from "@/utils/interfaces/Time";

interface Props {
    time: Time
}

export function Messages({time}: Props) {

    let message = "Wait for it!!!";

    if (time.hours == 0 && time.minutes < 60) {
        message = "Almost there!!!"
    }

    if (time.hours == 0 && time.minutes == 0 && time.seconds < 60) {
        message = "Are you ready?"
    }

    return (
        <h2 className="hidden md:block absolute text-slate-300 text-center text-3xl top-2/3 left-0 w-screen">
            {message}
        </h2>
    )
}