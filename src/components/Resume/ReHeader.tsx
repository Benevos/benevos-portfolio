import React from 'react'

import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { PiCursorFill } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";

import ReContactItem from '@/components/Resume/ReContactItem';

function ReHeader() {
    return (
        <div className='w-full flex'>
            <section className='w-full'>
                <h1 className='font-bold w-[400px] text-2xl'>
                    Kevin Daniel Mendoza Hernández
                </h1>
                <h2 className='text-base'>
                    Computer Science Engineer
                </h2>
                <ReContactItem Icon={LuLanguages} title='English (Proficient), Spanish (Native)'/>
            </section>

            <section className='flex flex-col gap-[2px] max-md:mt-3'>
                <ReContactItem Icon={IoMail} title='kevin_mendoza092@hotmail.com'/>
                <ReContactItem Icon={FaPhone} title='+52 831 102 4666'/>
                <ReContactItem Icon={PiCursorFill} title='https://benevos.vercel.app/'/>
                <ReContactItem Icon={MdLocationOn} title='Tamaulipas, México'/>
            </section>
        </div>
    )
}

export default ReHeader