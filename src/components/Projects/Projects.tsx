'use client';

import React from 'react'

import { v4 as uuid } from "uuid";

import { HiCursorClick } from "react-icons/hi";
import { FaImage } from "react-icons/fa";

import projectCardInfo from "@/data/projects";
import { useAppSelector } from '@/lib/hooks';
import ProjectCard from './ProjectCard';

function Projects() 
{
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode)

    return (
        <section style={ { backgroundColor: isOnDarkMode ? '#0f1924' : '#d9eafd' } }
        className="flex flex-col items-center transition-all duration-700">

            <div className="max-w-[1480px] w-full py-4">
                
                <div className="flex justify-center items-center w-full font-semibold gap-3">
                    <h2 className="text-[33px] max-sm:text-3xl text-[#0072e5]">
                    Proyectos recientes
                    </h2>

                    <div className="relative flex justify-center items-center">
                        <FaImage className="absolute text-2xl text-[#0072e5] top-0 right-3"/>
                        <HiCursorClick className={'text-3xl animate-ping opacity-0'}/> 
                        <HiCursorClick className={'absolute text-2xl opacity-100 top-2'}/> 
                        <HiCursorClick className={'absolute text-3xl animate-ping top-1'}/> 
                    </div>

                </div>
            

                <div className="flex flex-wrap justify-center gap-4 mt-4">

                    {projectCardInfo.map(project => <ProjectCard key={uuid()}
                                                                title={project.title}
                                                                description={project.description}
                                                                imageSrc={project.imageSrc}
                                                                buttons={project.buttons} 
                                                                tags={project.tags}/>)}

                </div>
            </div>
        </section>
    )
}

export default Projects