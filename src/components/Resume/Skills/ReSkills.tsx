import React from 'react'
import ReSectionTitle from '../ReSectionTitle'
import ReSkillCard from './ReSkillCard';

import { SiDart, SiNextdotjs, SiRedux } from 'react-icons/si';
import { FaDocker, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa6';
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt, FaSass } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from 'react-icons/gr';
import { IoLogoTux } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";

import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoElectron } from "react-icons/io5";



function ReSkills() {
    return (
        <section className='w-[49%] mt-4'>
            <ReSectionTitle title='SKILLS'/>

            <div className='w-full text-[14px] grid grid-cols-3 grid-flow-row'>
                <ReSkillCard Icon={SiNextdotjs} title='NEXT'/>
                <ReSkillCard Icon={FaReact} title='REACT'/>
                <ReSkillCard Icon={SiRedux} title='REDUX'/>
                <ReSkillCard Icon={SiTailwindcss} title='TAILWIND'/>
                <ReSkillCard Icon={FaSass} title='SASS'/>
                <ReSkillCard Icon={SiTypescript} title='TYPESCRIPT'/>
                <ReSkillCard Icon={IoLogoFirebase} title='FIREBASE'/>
                <ReSkillCard Icon={SiMongodb} title='MONGODB'/>
                <ReSkillCard Icon={SiFlutter} title='FLUTTER'/>
                <ReSkillCard Icon={TbBrandReactNative} title='R. NATIVE'/>
                <ReSkillCard Icon={FaPython} title='PYTHON'/>
                <ReSkillCard Icon={GrMysql} title='MYSQL'/>
                <ReSkillCard Icon={FaDocker} title='DOCKER'/>
                <ReSkillCard Icon={IoLogoTux} title='LINUX'/>
                <ReSkillCard Icon={FaGitAlt} title='GIT'/>
                <ReSkillCard Icon={FaGithub} title='GITHUB'/>
                <ReSkillCard Icon={FaHtml5} title='HTML'/>
                <ReSkillCard Icon={FaCss3Alt} title='CSS'/>
                <ReSkillCard Icon={DiJavascript} title='JAVASCRIPT'/>
            </div>
        </section>
    )
}

export default ReSkills