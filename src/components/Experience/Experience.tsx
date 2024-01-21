
import React, { useEffect } from 'react'
import { MdWork } from "react-icons/md";

import Timeline from './Timeline/Timeline';
import { useAppSelector } from '@/lib/hooks';


function Experience() 
{
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode)

    return (
        <section id='experience-section' style={ { backgroundColor: isOnDarkMode ? '#0f1924' : '#d9eafd' } }
                 className="w-full flex flex-col items-center transition-all duration-300">
            <div className="max-w-[1480px] w-full py-4">

                <div className="flex justify-center items-center w-full font-semibold mb-6 gap-2">

                    <h2 className={`text-4xl text-[#0072e5]`}>Experience</h2>

                    <MdWork className="text-3xl"/>
                </div>

                <div className='w-full flex flex-col items-center pl-8 pr-4'>
                    <div className='max-w-[800px]'>
                        <Timeline/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience