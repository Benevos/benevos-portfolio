import { useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import React, { useState } from 'react'


import { FaCaretLeft } from "react-icons/fa6";
import Education from './Education';
import About from './About';

import { FaAward } from "react-icons/fa";
import HonorsAwards from './HonorsAwards';
import Certifications from './Certifications';

function SidePanel() 
{
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <div className='absolute h-full right-0 flex z-[6]'>

            <div style={ isAboutOpen ? { animation: 'none' } : {}} 
                    className='absolute flex flex-col items-center rounded-l-2xl bg-[#0072e5] w-[40px] h-[95px] mt-7 overflow-hidden animate-ping'>
            </div>

            <button onClick={() => {setIsAboutOpen(!isAboutOpen)}} style={{writingMode: 'vertical-lr'}} 
                    className='flex flex-col items-center rounded-l-2xl bg-[#0072e5] w-[40px] h-[95px] mt-7 
                                text-white overflow-hidden relative'>
                
                <FaCaretLeft className={`absolute text-2xl transition-all duration-500 ${isAboutOpen ? 'rotate-180' : 'rotate-0'}`}/>

                <label className='absolute right-0 text-md pointer-events-none rotate-180 font-bold'>About me</label>
            </button>

        
            <div style={{width: isAboutOpen ? '600px' : '0px', background: isOnDarkMode ? 'rgba(0,0,0,0.14)' : 'rgba(255,255,255,0.14)'}}
                    className="h-full bg-glass transition-all duration-700 max-w-[600px] max-[670px]:max-w-[330px] overflow-y-auto"> 

                <div style={{opacity: isAboutOpen ? '1' : '0'}}
                     className='h-fit w-full flex flex-col items-center px-20 max-[670px]:px-6 py-6 overflow-y-auto duration-1000'>

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