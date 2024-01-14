import React, { useEffect } from 'react'

function Letters() 
{
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))], randomString = (length: number) => Array.from(Array(length)).map(randomChar).join("");

    const handleMouseMove = () =>
    {
        const letters = document.querySelector('.letters-gradient') as any;
        
        const windowHeight = window.innerHeight / 10;
        const windowWidth = window.innerWidth / 10;
        
        console.log(Math.ceil(windowHeight * windowWidth))
        letters.innerHTML = randomString(Math.ceil(windowHeight * windowWidth));
    }

    useEffect(() =>
    {
        handleMouseMove();
        window.onresize = handleMouseMove;
    }, [])

    return (
        <>
            <div className="absolute h-full w-full break-words overflow-hidden text-xs letters-gradient" />
            <div className='absolute h-full w-full overflow-hidden z-[4]' onMouseMove={handleMouseMove}/>
        </>
    )
}

export default Letters