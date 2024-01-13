'use client';

import React from 'react'

import PresentationButtons from './PresentationButtons';
import PresentationTypeItLabels from './PresentationTypeItLabels';

function PresentationTyping() 
{
    return (
        <div  className="flex flex-col items-center justify-center  h-full relative z-[5]">

            <PresentationTypeItLabels/>

            <PresentationButtons/>
        </div>
    )
}

export default PresentationTyping

    /* const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))], randomString = (length: number) => Array.from(Array(length)).map(randomChar).join("");

    const handleMouseMove = () =>
    {
        const letters = document.querySelector('.letters-gradient') as any;
        
        const windowHeight = window.innerHeight / 10;
        const windowWidth = window.innerWidth / 10;
        
        console.log(Math.ceil(windowHeight * windowWidth))
        letters.innerHTML = randomString(Math.ceil(windowHeight * windowWidth));
    } */
