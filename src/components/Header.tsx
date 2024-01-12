import React from 'react'
import Switch from './Switch'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='flex justify-center w-full border-b-[1px] border-b-[#3c3c3c]'>
          <header className="flex justify-around h-[65px] max-w-[1480px] w-full items-center">
            <label className="text-2xl max-md:hidden">
              <a className="font-bold">Benevos</a> portafolio
            </label>

            <div className="flex gap-6 items-center justify-center">

              <Navbar/>
              
              <Switch sliderSize="27px" width="40px" trackHeigth="20px" />
              
            </div>
        </header>
      </div>
    )
}

export default Header