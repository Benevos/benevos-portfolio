'use client';

import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

import { GiSkills } from "react-icons/gi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import SkillCard from './SkillCard';
import skillsInfo from '@/data/skills';

function Skills() 
{
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="flex flex-col items-center">
            <div className="max-w-[1480px] w-full py-4">
                <div className="flex justify-center items-center w-full font-semibold gap-2">

                    <h2 className="text-[33px] max-sm:text-3xl text-[#0072e5]">Habilidades</h2>

                    <GiSkills className="text-2xl"/>
                </div>

                <div className='w-full flex flex-wrap gap-3 items-center justify-center mt-4'>

                    {
                        skillsInfo
                            .map(skill => <SkillCard key={uuid()} Icon={skill.Icon} name={skill.name} color={skill.color}/>)
                            .slice(0, showMore ? skillsInfo.length : 10)
                    }

                </div>

                <div className='w-full flex items-center justify-center mt-5'>
                    <button onClick={() => setShowMore(!showMore)} 
                        className='bg-[#0072e5] text-white text-4xl rounded-full animate-bounce skill-shadow hover:brightness-150'>
                        { showMore ? <MdExpandLess/>  : <MdExpandMore/> } 
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Skills