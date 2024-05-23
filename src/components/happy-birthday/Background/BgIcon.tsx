import React from 'react'

interface Props {
    children: React.ReactNode
    className?: string
}

export function BgIcon({children, className}: Props) {

    return (
        <div className={className}>
            {children}
        </div>
    )
}