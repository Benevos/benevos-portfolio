/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Header from "@/components/Header";
import Letters from "@/components/Letters";
import Presentation from "@/components/Presentation/Presentation";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { toggleTheme } from "@/lib/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";

import projectCardInfo from "@/data/projects";

export default function Home() 
{
  
  const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode)

  const dispatch = useAppDispatch();

  const watchForDarkMode = () =>
  {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
    {
      dispatch(toggleTheme(false))
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => 
    {
      const newColorScheme = event.matches ? true : false;

      dispatch(toggleTheme(newColorScheme))
    });
  }

  useEffect(() => 
  {
    watchForDarkMode();

  }, []);

  return (
    <main className={isOnDarkMode ? "bg-[#101418] text-white transition-all duration-700" : 'bg-white text-black transition-all duration-700'}>

      <Header/>

      <section className="h-[calc(100dvh-65px)] relative flex items-center justify-center" >

        <Presentation/>

        {/* <div className="absolute h-full w-full opacity-20 overflow-hidden cover-gradient transition-all"/>

        <Letters/> */}
        
      </section>

        {
          //#f0f7ff
        }

      <section style={ { backgroundColor: isOnDarkMode ? '#0f1924' : '#d9eafd' } }
               className="flex flex-col items-center transition-all duration-700">

        <div className="max-w-[1480px] w-full py-4">

          <h2 className="text-3xl text-[#0072e5] w-full flex justify-center items-center font-bold">Proyectos recientes:</h2>

          <div className="flex flex-wrap justify-center gap-4 mt-4">

      
            {projectCardInfo.map(project => <ProjectCard key={uuid()}
                                                          title={project.title}
                                                          description={project.description}
                                                          imageSrc={project.imageSrc}
                                                          buttons={project.buttons} 
                                                          tags={project.tags}/>)}
            
            <ProjectCard/>

          </div>
        </div>
      </section>

    </main>
  )
}

//<Image alt="owner-image" src={'/benevos.jpg'} height={250} width={250}/>

//const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))], randomString = (length: number) => Array.from(Array(length)).map(randomChar).join("");