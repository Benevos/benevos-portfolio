import { useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import React, { useState } from 'react'

import { FaCaretLeft } from "react-icons/fa6";

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
                    className="h-full bg-glass transition-all duration-700 max-w-[600px] max-[670px]:max-w-[300px]"> 

                <div style={{opacity: isAboutOpen ? '1' : '0'}}
                     className='h-full w-full flex flex-col items-center px-20 max-[670px]:px-6 py-6 overflow-y-auto duration-1000'>
                    <Image src={'/benevos.jpg'} className='rounded-full' alt='benevos.jpg' width={200} height={200}/>

                    <h2 className='text-4xl text-[#2994ff] mt-3 mb-2 font-bold pulse-bright'>Acerca de mi</h2>

                    <p className='whitespace-pre-wrap text-justify'>
                      {
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laboriosam similique animi, odio et repellendus quibusdam quae ducimus id, distinctio voluptates expedita eveniet illum commodi quaerat neque exercitationem nesciunt placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, nesciunt molestiae commodi numquam quidem delectus. Odio, quia vitae saepe illo accusantium facere quaerat quidem? Earum aliquam mollitia architecto alias tenetur \n\n Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo autem modi quasi natus dicta. Molestiae quod vitae quaerat magnam numquam a voluptatibus. Nesciunt in pariatur ad deleniti eaque fugiat rem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ad eos facilis minima iure modi placeat neque, accusamus saepe non cupiditate labore ea repellat sapiente voluptatibus illo ipsum id exercitationem"}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About