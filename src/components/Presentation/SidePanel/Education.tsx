import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Education() {
     return (
        <div className='w-full flex flex-wrap gap-2 py-2 justify-center overflow-y-auto overflow-x-hidden'>
            <Link title='Universidad Autónoma de Tamaulipas' href={'https://www.uat.edu.mx/'}
                className='flex w-fit bg-[#e96d18] rounded-full overflow-hidden education-shadow transition-all hover:brightness-110'>

                <div className='flex items-center justify-center rounded-full h-[45px] w-[45px] min-w-[45px]
                               bg-white'>
                    <Image className='w-auto h-full' 
                        src={'/uat.png'} width={50} height={50} alt='uat.png'/>
                </div>  

                <div className='flex justify-center items-center overflow-x-hidden px-2 pr-4'>
                    <label className='font-semibold whitespace-nowrap pointer-events-none move text-white
                                      min-[670px]:animate-none'>
                        UAT | Computer Science Engineer
                    </label>
                </div>
            </Link>

            <Link title='Colegio Nacional de Educación Profesional Técnica' href={'https://conalep.edu.mx/'}
                className='flex w-fit bg-[#047c64] rounded-full overflow-hidden education-shadow transition-all hover:brightness-110'>

                <div className='flex items-center justify-center rounded-full h-[45px] w-[45px] min-w-[45px] bg-white'>
                    <Image className='w-full h-auto' 
                        src={'/conalep.png'} width={50} height={50} alt='uat.png'/>
                </div>  

                <div className='flex justify-center items-center overflow-x-hidden px-2 pr-4'>
                    <label className='font-semibold whitespace-nowrap pointer-events-none move text-white
                                    min-[670px]:animate-none'>
                        Conalep | Computer Technician
                    </label>
                </div>
            </Link>
        </div>
    )
}

export default Education