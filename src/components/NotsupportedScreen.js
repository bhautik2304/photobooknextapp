"use client"
import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import notsupported from "@/assets/img/Animation - 1706537078532.json"

function NotsupportedScreen() {

    return (
        <>
            <Player
                autoplay
                loop
                src={notsupported}
                style={{ height: '150px', width: '150px' }}
            >
            </Player>
            <h6 className="text-center" >Mobile screens not supported</h6>
        </>
    )
}

export default NotsupportedScreen