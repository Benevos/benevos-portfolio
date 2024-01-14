import React from 'react';
import Link from 'next/link';

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function PresentationButtons() 
{
    const mailSubject = '¡Vi tu portafolio, hablemos más!'
    const mailBody = 'Hola, me gustaría preguntarte...'
    return (
        <div className='flex gap-3 mt-2 social-media-animation'>
    
            <Link href={'www.linkedin.com/in/kevdan092'} 
                    className='flex items-center justify-center text-white text-3xl bg-[#0a66c2] p-4 rounded cursor-pointer transition-all
                               hover:scale-[1.1] hover:brightness-125 max-sm:p-3 max-sm:text-2xl'>
                <FaLinkedinIn/>
            </Link>

            <Link href={'https://github.com/Benevos'} 
                    className='flex items-center justify-center text-white text-3xl bg-[#010409] p-4 rounded cursor-pointer transition-all
                               hover:scale-[1.1] hover:brightness-150 max-sm:p-3 max-sm:text-2xl'>
                <FaGithub/>
            </Link>

            <Link href={`mailto:kevin_mendoza092@hotmail.com?subject=${mailSubject}&body=${mailBody}`} 
                    className='flex items-center justify-center text-white text-3xl bg-[#0072e5] p-4 rounded cursor-pointer transition-all
                               hover:scale-[1.1] hover:brightness-150 max-sm:p-3 max-sm:text-2xl'>
                <IoMail/>
            </Link>

            <Link href={'/#'} 
                    className='flex items-center gap-2 justify-center text-white text-3xl bg-[#0d1c2a] p-4 rounded cursor-pointer transition-all
                               hover:scale-[1.1] hover:brightness-150 max-sm:p-2 max-sm:text-2xl bounce'>
                <FaFileDownload/>
                <label className='text-lg pointer-events-none'>
                    Descargar CV
                </label>
            </Link>

        </div>
    )
}

export default PresentationButtons