'use client';

import React, { useEffect } from 'react'
import { Montserrat } from 'next/font/google'; 
import ReHeader from '@/components/Resume/ReHeader';
import ReExperience from '@/components/Resume/Experience/ReExperience';
import ReSummary from '@/components/Resume/Summary/ReSummary';
import ReSectionTitle from '@/components/Resume/ReSectionTitle';

const montserrat = Montserrat({subsets: ['latin']});

function Resume() 
{;

    return (
        <div className='w-full flex flex-col items-center h-[1050px] min-h-[1050px] max-w-[813px] px-[45px] py-[45px] bg-white'>
            <ReHeader/>

            <ReSummary/>

            <ReExperience/>

            <section className='w-full mt-4'>
                <ReSectionTitle title='EDUCATION'/>
            </section>
            <section className='w-full mt-4'>
                <ReSectionTitle title='CERTIFICATES'/>
            </section>
            <section className='w-full mt-4'>
                <ReSectionTitle title='SKILLS'/>
            </section>
            <section className='w-full mt-4'>
                <ReSectionTitle title='HONORS AND AWARDS'/>
            </section>
        </div>      
    )
}

export default Resume