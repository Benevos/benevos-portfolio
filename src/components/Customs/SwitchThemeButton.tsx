'use client';

import { toggleTheme } from '@/lib/features/theme/themeSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React from 'react'

import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

function SwitchThemeButton(
    { heigth='24px', width='40px', sliderSize=heigth, trackHeigth='100%',} : 
    { heigth?: string, width?: string, sliderSize?: string, trackHeigth?: string}) 
{
    const checked = useAppSelector(state => state.theme.isOnDarkMode);
        
    const dispatch = useAppDispatch();

    const handleToggle = () =>
    {
        dispatch(toggleTheme(checked));

        document.documentElement.style.setProperty('--ti-cursor-color', checked ? 'black' : 'white');
    }
    
    return (
        <label style={{ height: heigth, width: width}} 
            className="relative flex justify-center items-center transition-all cursor-pointer">

            <input type="checkbox" checked={checked} onChange={handleToggle}
                    className="opacity-0 w-0 h-0"/>

            <div style={{height: trackHeigth, backgroundColor: checked ? '#0030b0' : '#0088ff'}}
                className="w-full rounded-full transition-all duration-500"/>

            <div style={{transform: `translateX(${checked ? '50%' : '-50%'})`, height: sliderSize, width: sliderSize,
                        backgroundColor: checked ? '#0045ff' : '#52aeff', color: checked ? '#ffdd00' : '#ffb300'}}
                className="flex justify-center items-center absolute rounded-full transition-all">

                <div style={{opacity: checked ? '1' : '0'}} className='absolute transition-all duration-200'>
                    <BsFillMoonStarsFill/>
                </div>
                
                <div style={{opacity: checked ? '0' : '1'}}  className='absolute transition-all duration-200'>
                    <MdSunny/>
                </div>
            </div>
        </label>
  )
}

export default SwitchThemeButton