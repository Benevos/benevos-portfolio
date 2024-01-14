import React, { ElementType, ReactNode } from 'react'
import { GiSkills } from "react-icons/gi";
import SkillCard from './SkillCard';

import { SiNextdotjs } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa6';
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";
import { FaPython } from "react-icons/fa";

function Skills() 
{
    return (
        <section className="flex flex-col items-center">
            <div className="max-w-[1480px] w-full py-4">
                <div className="flex justify-center items-center w-full font-semibold gap-2">

                    <h2 className="text-[33px] max-sm:text-3xl">Habilidades</h2>

                    <GiSkills className="text-2xl"/>
                </div>

                <div className='w-full flex flex-wrap gap-3 items-center justify-center'>

                    <SkillCard Icon={<SiNextdotjs/>} name='Next'/>
                    <SkillCard Icon={<FaReact/>} color='#149eca' name='React'/>
                    <SkillCard Icon={<SiTailwindcss/>} color='#38bdf8' name='Tailwind'/>
                    <SkillCard Icon={<FaSass/>} color='#ea388f' name='SASS'/>
                    <SkillCard Icon={<IoLogoFirebase/>} color='#ffcd33' name='Firebase'/>
                    <SkillCard Icon={<SiFlutter/>} color='#30b8f6' name='Flutter'/>
                    <SkillCard Icon={<FaPython/>} color='#14ca18' name='Python'/>
                    <SkillCard Icon={<FaNodeJs/>} color='#82cc2b' name='Node'/>

                </div>
            </div>
        </section>
    )
}

export default Skills