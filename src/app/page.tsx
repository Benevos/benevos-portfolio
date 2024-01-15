/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { toggleTheme } from "@/lib/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

import Header from "@/components/Header/Header";
import Presentation from "@/components/Presentation/Presentation";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

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
    else
    {
      dispatch(toggleTheme(true))
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

      <Presentation/>

      <Projects/>

      <Skills/>

      

    </main>
  )
}

//<Image alt="owner-image" src={'/benevos.jpg'} height={250} width={250}/>

//const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))], randomString = (length: number) => Array.from(Array(length)).map(randomChar).join("");