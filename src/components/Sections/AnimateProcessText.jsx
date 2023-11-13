"use client"
import { TypeAnimation } from 'react-type-animation';

import React from 'react'

function AnimateProcessText() {
    return (
        <>
            <h2 className="mb-4" style={{ fontWeight: 800, fontSize: '2.5rem' }} >
                <TypeAnimation
                    sequence={[
                        '" Photokrafft has made  your memories printing journey easy as clicking the pictures "', // Types 'One'
                        1000, // Waits 1s
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                />
            </h2>
        </>
    )
}

export default AnimateProcessText