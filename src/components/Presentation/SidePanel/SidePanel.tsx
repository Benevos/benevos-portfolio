import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import React, { useState } from 'react'


import { FaCaretLeft } from "react-icons/fa6";
import Education from './Education';
import About from './About';

import { FaAward } from "react-icons/fa";
import HonorsAwards from './HonorsAwards';
import Certifications from './Certifications';
import { toggleIsAboutOpen } from '@/lib/features/theme/uiStateSlice';

function SidePanel() 
{
    const isAboutOpen = useAppSelector(state => state.uiState.isAboutOpen);
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    const dispatch = useAppDispatch();

    const handleClick = () =>
    {
        dispatch(toggleIsAboutOpen(isAboutOpen));
    }

    return (
        <div className='absolute h-full right-0 flex z-[6]'>

            <div style={ isAboutOpen ? { animation: 'none' } : {}} 
                    className='absolute flex flex-col items-center rounded-l-2xl bg-[#0072e5] w-[40px] h-[95px] mt-7 overflow-hidden animate-ping'>
            </div>

            <button onClick={handleClick} style={{writingMode: 'vertical-lr'}} 
                    className='flex flex-col items-center rounded-l-2xl bg-[#0072e5] w-[40px] h-[95px] mt-7 
                                text-white overflow-hidden relative'>
                
                <FaCaretLeft className={`absolute text-2xl transition-all duration-500 ${isAboutOpen ? 'rotate-180' : 'rotate-0'}`}/>

                <label className='absolute right-0 text-md pointer-events-none rotate-180 font-bold'>About me</label>
            </button>

        
            <div style={{width: isAboutOpen ? '600px' : '0px', background: isOnDarkMode ? 'rgba(0,0,0,0.14)' : 'rgba(255,255,255,0.14)'}}
                    className="h-full bg-glass transition-all duration-500 max-w-[600px] max-[670px]:max-w-[330px] overflow-x-hidden overflow-y-auto"> 

                <div
                     className='h-fit w-[575px] max-[670px]:w-[330px] flex flex-col items-center px-20 
                                max-[670px]:px-6 py-6 overflow-y-auto'>

                    <Image src={'/benevos.jpg'} className='rounded-full' alt='benevos.jpg' width={200} height={200}/>

                    <About/>
                    
                    <Education/>

                    <Certifications/>

                    <HonorsAwards/>
          
                </div>
            </div>
        </div>
    )
}

export default SidePanel