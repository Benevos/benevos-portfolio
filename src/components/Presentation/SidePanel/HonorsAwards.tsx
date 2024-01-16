import React from 'react'

import HonorCard from './HonorCard';
import honorsAwards from '@/data/honors-awards';

import { v4 as uuid } from 'uuid';

function HonorsAwards() {
    return (
        <>
            <h2 className='text-4xl text-center max-[670px]:text-3xl text-[#2994ff] mt-3 mb-2 font-bold pulse-bright'>
                Honors and Awards
            </h2>

            <div className='w-full flex flex-wrap items-center justify-center gap-2'>
                {honorsAwards.map(honorAward => <HonorCard key={uuid()} title={honorAward.title} Icon={honorAward.Icon}/>)}
            </div>
        </>
    )
}

export default HonorsAwards