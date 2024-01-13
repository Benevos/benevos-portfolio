import React from 'react'

import Image from "next/image";

import ProjectCardTag from './ProjectCardTag';
import ProjectCardButton from './ProjectCardButton';
import { v4 as uuid } from 'uuid';

import { defaultButtonConfig, defaultTagsConfig } from '@/data/projects';
import { buttonType, tagType } from '@/types/projectTypes';

function ProjectCard(
{ 
    title="Lorem ipum ist el dolore issum", 
    description="Lorem ipsum is el dolore di riatto cuando le pressto ni siendo el toquedo", 
    imageSrc="/sample.jpeg", 
    buttons=defaultButtonConfig,
    noButtons=false,
    tags=defaultTagsConfig 
}
: 
{
    title?: string, 
    description?: string, 
    imageSrc?: string, 
    buttons?: (buttonType)[], 
    noButtons?: boolean, 
    tags?: (tagType)[]
}) 
{
    return (
        <div className="relative rounded-md overflow-hidden text-white
                                         w-[500px] h-[290px]
                                         max-[650px]:w-[350px] max-[650px]:h-[203px]">

            <div className="flex justify-center items-center h-full w-full pointer-events-none z-[1]">
    
                <Image className="h-full w-full" src={imageSrc} alt="project.pmg" height={800} width={800}/>
                
            </div>

            <div className="absolute top-0 h-full w-full flex flex-col p-4 justify-end opacity-0 transition-all duration-500
                            bg-gradient-to-t from-black to-transparent hover:opacity-100 z-[2]">
                
                { noButtons ? <></> :
                <div className="absolute flex gap-2 top-3 right-3">
                    {buttons.map((button) => <ProjectCardButton key={uuid()} Icon={button.icon} url={button.url} backgroundColor={button.color} />)}
                </div>
                }

                <h3 className="text-2xl font-bold pointer-events-none
                               max-[650px]:text-xl">
                    {title}
                </h3>
                
                <p className="pointer-events-none max-[650px]:text-sm">
                    {description}
                </p>
                
                {!tags ? <></> :

                    <div className="flex flex-wrap mt-1 gap-1">
                        {tags.map(tag => <ProjectCardTag key={uuid()} name={tag.name}/>)}
                    </div>
                }
            </div>

        </div>
        
    )
}

export default ProjectCard