'use client';

import React, { useState } from 'react'
import Link from 'next/link';

import TypeIt from "typeit-react";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleNameAnimationState } from '@/lib/features/theme/animationsSlice';

function PresentationTyping() 
{
    const nameAnimationEnded  = useAppSelector((state) => state.animations.nameAnimationEnded);

    const dispatch = useAppDispatch();

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))], randomString = (length: number) => Array.from(Array(length)).map(randomChar).join("");

   /*  const handleMouseMove = () =>
    {
        const letters = document.querySelector('.letters-gradient') as any;
        
        const windowHeight = window.innerHeight / 10;
        const windowWidth = window.innerWidth / 10;
        
        console.log(Math.ceil(windowHeight * windowWidth))
        letters.innerHTML = randomString(Math.ceil(windowHeight * windowWidth));
    } */

    return (
        <div  className="flex flex-col items-center justify-center  h-full relative z-[5]">

            <TypeIt className="text-4xl font-bold relative text-center max-md:text-4xl"

            options={{ speed: 20, afterComplete: (instance: any) => { instance.destroy() } }}

            getBeforeInit={(instance) => {

            instance.type('Hola, mi nombre es ',)
                    .type('<label class="text-orange-500">Kevin<label>')
                    .exec(() => {dispatch(toggleNameAnimationState(nameAnimationEnded))}, {delay: 4300 })
                    .type('.', {delay: 500})
                    .type('.', {delay: 500})
                    .type('.', {delay: 500})
                    .delete(9)
                    .type('<label class="text-orange-500">Benevos<label>')
                    

            return instance;
            }}>
            </TypeIt>

            {
            !nameAnimationEnded ? <></> :
            
            <TypeIt className="text-2xl text-orange-600 font-bold relative text-center max-md:text-xl"
                options={{ speed: 20, afterComplete: (instance: any) => { instance.destroy() } }}
                getBeforeInit={(instance) => {
                
                instance.type('Desarrollador FrontEnd', { delay: 500 })
                        .delete(8)
                        .type('BackEnd', { delay: 500 })
                        .delete(7).type('Fullstack')

                return instance
                }}>
            </TypeIt>
            }

            <div className='flex gap-3 mt-2 social-media-animation'>
        
                <Link href={'www.linkedin.com/in/kevdan092'} 
                      className='flex items-center justify-center text-white text-2xl bg-[#0a66c2] p-2 rounded cursor-pointer'>
                    <FaLinkedinIn/>
                </Link>

                <Link href={'https://github.com/Benevos'} 
                      className='flex items-center justify-center text-white text-2xl bg-[#010409] p-2 rounded cursor-pointer'>
                    <FaGithub/>
                </Link>

                <Link href={'#'} 
                      className='flex items-center gap-1 justify-center text-white text-2xl bg-[#ff6118] p-2 rounded cursor-pointer'>
                    <FaFileDownload/>
                    <label className='text-base pointer-events-none'>
                        Descargar CV
                    </label>
                </Link>

            </div>
        </div>
    )
}

export default PresentationTyping