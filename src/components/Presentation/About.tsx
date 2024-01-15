import { useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';

import { FaCaretLeft } from "react-icons/fa6";
import Education from './Education';

function About() 
{
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <section className='absolute h-full right-0 flex z-[6]'>

            <div style={ isAboutOpen ? { animation: 'none' } : {}} 
                    className='absolute flex flex-col items-center rounded-l-2xl bg-[#0072e5] w-[40px] h-[95px] mt-7 overflow-hidden animate-ping'>
            </div>

            <button onClick={() => {setIsAboutOpen(!isAboutOpen)}} style={{writingMode: 'vertical-lr'}} 
                    className='flex flex-col items-center rounded-l-2xl bg-[#0072e5] w-[40px] h-[95px] mt-7 
                                text-white overflow-hidden relative'>
                
                <FaCaretLeft className={`absolute text-2xl transition-all duration-500 ${isAboutOpen ? 'rotate-180' : 'rotate-0'}`}/>

                <label className='absolute right-0 text-md pointer-events-none rotate-180 font-bold'>Sobre mi</label>
            </button>

            

            <div style={{width: isAboutOpen ? '600px' : '0px', background: isOnDarkMode ? 'rgba(0,0,0,0.14)' : 'rgba(255,255,255,0.14)'}}
                    className="h-full bg-glass transition-all duration-700 max-w-[600px] max-[670px]:max-w-[300px] overflow-x-auto"> 

                <div style={{opacity: isAboutOpen ? '1' : '0'}}
                     className='h-fit w-full flex flex-col items-center px-20 max-[670px]:px-6 py-6 overflow-x-hidden overflow-y-auto duration-1000'>
                    <Image src={'/benevos.jpg'} className='rounded-full' alt='benevos.jpg' width={200} height={200}/>

                    <h2 className='text-4xl max-[670px]:text-3xl text-[#2994ff] mt-3 mb-2 font-bold pulse-bright'>Sobre mi</h2>

                    <p className='whitespace-pre-wrap text-justify max-[670px]:text-sm'>
                      {
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laboriosam similique animi, odio et repellendus quibusdam quae ducimus id, distinctio voluptates expedita eveniet illum commodi quaerat neque exercitationem nesciunt placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, nesciunt molestiae commodi numquam quidem delectus. Odio, quia vitae saepe illo accusantium facere quaerat quidem? Earum aliquam mollitia architecto alias tenetur"}
                    </p>

                    <h2 className='text-4xl max-[670px]:text-3xl text-[#2994ff] mt-3 mb-2 font-bold pulse-bright'>Educación</h2>
                    
                    <Education/>

                    <h2 className='text-4xl max-[670px]:text-3xl text-[#2994ff] mt-3 mb-2 font-bold pulse-bright'>Reconocimientos</h2>
                </div>
            </div>
        </section>
    )
}

export default About