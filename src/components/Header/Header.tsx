'use client';

import React from 'react'

import SwitchThemeButton from '../Customs/SwitchThemeButton'
import Navbar from './Navbar'
import { useAppSelector } from '@/lib/hooks'
import ButtonOpenMobileNavPanel from './ButtonOpenMobileNavPanel';

function Header() 
{
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <div id='header' style={{borderColor: isOnDarkMode ?  'rgba(194,224,255,0.08)' : '#dadfe8'}}

             className={`flex justify-center w-full border-b-[1px] transition-all duration-300 max-md:top-0 max-md:fixed z-10 
                         ${isOnDarkMode ? "bg-[#101418] text-white" : 'bg-white text-black'}`}>

          <header className="flex justify-around h-[65px] max-w-[1480px] w-full items-center">

            <ButtonOpenMobileNavPanel/>

            <label className="text-2xl">
              <label className="font-bold text-[#0072e5]">Benevos</label> portfolio
            </label>

            <div className="flex items-center justify-center h-full gap-4">

              <Navbar/>
              
              <SwitchThemeButton sliderSize="27px" width="40px" trackHeigth="20px" />
              
            </div>
        </header>
      </div>
    )
}

export default Header