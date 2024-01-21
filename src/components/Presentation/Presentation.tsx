'use client';

import React, { useState } from 'react'

import PresentationButtons from './PresentationButtons';
import PresentationTypeItLabels from './PresentationTypeItLabels';
import SidePanel from './SidePanel/SidePanel';


import { Dancing_Script } from 'next/font/google';
import Link from 'next/link';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

function PresentationTyping() 
{
    return (
        <section id='home-section' 
                 className="h-[calc(100dvh-65px)] min-h-[300px] max-h-[800px] relative flex flex-col 
                            items-center justify-center overflow-hidden">
            <div  className="flex flex-col items-center justify-center  h-full relative z-[5]">

                <PresentationTypeItLabels/>

                <PresentationButtons/>
                
            </div>


            <Link className={`${dancingScript.className} flex justify-center items-center text-5xl max-[670px]:text-3xl absolute 
                  bottom-[15%] max-h-xs z-[6] cursor-pointer transition-all hover:scale-110 hover:rotate-3`} 
                  href={'https://www.google.com/search?sca_esv=600158367&sxsrf=ACQVn088MVZ3syXpSd7fQb7Qd79puxeseA:1705808498650&q=benevos&tbm=isch&source=lnms&sa=X&ved=2ahUKEwi_qffsx-2DAxW9JEQIHVdRCccQ0pQJegQIDRAB&biw=1536&bih=695&dpr=1.25'}>

                    <label className='absolute -left-10 max-[670px]:-left-5 pointer-events-none'>-</label>
                    <label className='pointer-events-none'>{'"Not a pet food trademark"'}</label>
        
            </Link>

         <SidePanel/>
            
        </section>
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


    
    /* <div className="absolute h-full w-full opacity-20 overflow-hidden cover-gradient transition-all"/>

    <Letters/> */
    
    

    
        //#f0f7ff
        
  