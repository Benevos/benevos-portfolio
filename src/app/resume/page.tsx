'use client';

import React, { useEffect } from 'react'
import { Montserrat } from 'next/font/google'; 
import ReHeader from '@/components/Resume/ReHeader';
import ReExperience from '@/components/Resume/Experience/ReExperience';
import ReSummary from '@/components/Resume/Summary/ReSummary';;
import ReCertificates from '@/components/Resume/Certificates/ReCertificates';
import ReEducation from '@/components/Resume/Education/ReEducation';
import { useWindowWidthSize } from '@/components/Customs/useWindowSize';
import ReSkills from '@/components/Resume/Skills/ReSkills';
import ReHonors from '@/components/Resume/Honors/ReHonors';
import { FaReact } from 'react-icons/fa6';

function Resume() 
{
    const windowWidth = useWindowWidthSize();

    useEffect(() =>
    {
        const body = document.querySelector('body') as HTMLBodyElement;
        body.style.display = 'flex';
        body.style.flexDirection = 'column';
        body.style.alignItems = 'center';
        body.style.backgroundColor ='black'
    }, []);

    useEffect(() =>
    {
        const body = document.querySelector('body') as HTMLBodyElement;

        if(windowWidth <= 813)
        {
            body.style.display = 'block';
            return;
        }

        body.style.display = 'flex';
    }, [windowWidth])

    return (
        <div className='w-full flex flex-col items-center h-[1056px] min-h-[1056px] max-w-[813px] min-w-[813px]
                        px-[45px] py-[45px] bg-white relative'>
            <ReHeader/>

            <ReSummary/>

            <ReExperience/>

            <div className='w-full flex justify-between'>
                <ReEducation/>

                <ReCertificates/>
            </div>

            <div className='w-full flex justify-between'>
                
                <ReSkills/>

                <ReHonors/>
            </div>

            <label className='absolute flex gap-1 items-center top-2 left-12 text-xs text-[#767676]'><FaReact/> This document is a web page developed on React whitin a Next project saved as PDF! You visit it at benevos.vercel.app/resume</label>
        </div>      
    )
}

export default Resume