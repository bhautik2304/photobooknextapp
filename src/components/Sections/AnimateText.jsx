"use client"
import { TypeAnimation } from 'react-type-animation';

import React from 'react'

function AnimateText() {
    return (
        <>
            <h1 className="mb-4" style={{ fontWeight: 800, fontSize: '2.5rem' }} >
                <TypeAnimation
                    sequence={[
                        'Your album', // Types 'One'
                        1000, // Waits 1s
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                />
                <br />
                <TypeAnimation
                    sequence={[
                        `printing starts here.`, // Deletes 'One' and types 'Two'
                        1000, // Waits 1s
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                />
            </h1>
        </>
    )
}

export default AnimateText