import React from 'react'
import {BgIcon} from "@/components/happy-birthday/Background/BgIcon";

export function Star() {

    return (
        <BgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='text-yellow-300'>
                <path fill="#FFC90E" fill-rule="evenodd"
                      d="M12 1a1 1 0 0 1 .908.581l2.87 6.22l6.801.807a1 1 0 0 1 .562 1.727l-3.743 3.461a1 1 0 1 1-1.358-1.468l2.151-1.99l-5.205-.617a1 1 0 0 1-.79-.574L12 4.387l-.463 1.004a1 1 0 1 1-1.816-.838l1.371-2.972A1 1 0 0 1 12 1M9.11 7.696l.343.343l8.868 8.868l.215.215l2.171 2.17a1 1 0 1 1-1.414 1.415l-.056-.056l.21 1.053a1 1 0 0 1-1.47 1.068L12 19.426l-5.977 3.346a1 1 0 0 1-1.47-1.068l1.336-6.718l-5.03-4.651a1 1 0 0 1 .562-1.727l5.16-.612l-3.288-3.289a1 1 0 1 1 1.414-1.414z"
                      clip-rule="evenodd"/>
            </svg>
        </BgIcon>
    )
}