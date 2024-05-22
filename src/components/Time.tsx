import React from 'react'

interface Props {
    value: number
    type: 'hours' | 'minutes' | 'seconds'
}

export function Time({value, type}: Props) {

    return (
        <div className='flex items-end'>
            {value.toString().padStart(2, '0')}
            <div className='text-lg h-fit my-3 text-slate-400/80 md:hidden'>{type}</div>
        </div>
    )
}