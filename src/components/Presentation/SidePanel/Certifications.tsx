import React from 'react'
import Link from 'next/link';

import { useAppSelector } from '@/lib/hooks';

import { LuExternalLink } from 'react-icons/lu';

function Certifications() 
{
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <>
            <h2 className='text-4xl max-[670px]:text-3xl text-[#2994ff] mt-3 mb-2 font-bold pulse-bright'>Certifications</h2>

            <Link href={'https://www.efset.org/cert/H11z1M'} style={{borderColor: isOnDarkMode ? 'white' : 'black'}}
                className='flex justify-center items-center w-ful gap-2 border-[1px] rounded-full p-2'>

                <LuExternalLink className='font-bold text-2xl w-[40px]'/>
                
                <label className='text-md pointer-events-none'>EFSET English Certificate 80/100 (C2 Proficient)</label>
                
            </Link>
        </>
    )
}

export default Certifications