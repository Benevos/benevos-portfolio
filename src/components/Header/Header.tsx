import React from 'react'
import SwitchThemeButton from '../Customs/SwitchThemeButton'
import Navbar from './Navbar'
import { useAppSelector } from '@/lib/hooks'

function Header() 
{
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <div style={{borderColor: isOnDarkMode ?  'rgba(194,224,255,0.08)' : '#E5EAF2'}}
             className='flex justify-center w-full border-b-[1px]'>
          <header className="flex justify-around h-[65px] max-w-[1480px] w-full items-center">
            <label className="text-2xl max-md:hidden">
              <label className="font-bold text-[#0072e5]">Benevos</label> portfolio
            </label>

            <div className="flex gap-6 items-center justify-center">

              <Navbar/>
              
              <SwitchThemeButton sliderSize="27px" width="40px" trackHeigth="20px" />
              
            </div>
        </header>
      </div>
    )
}

export default Header