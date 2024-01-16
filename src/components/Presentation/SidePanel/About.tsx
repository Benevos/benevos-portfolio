import React from 'react'

import Image from 'next/image';

function About() 
{
    return (
        <section className='w-full flex flex-col items-center'>
            <h2 className='text-4xl max-[670px]:text-3xl text-[#2994ff] mt-3 mb-1 font-bold pulse-bright'>About me</h2>
                        
            <div className='flex items-center justify-center w-full gap-2 mb-1'>
                <Image alt='mexico.png' src={'/mexico.png'} height={25} width={30}/>
                <label className='font-bold text-lg'>Tamaulipas</label>
            </div>

            <p className='whitespace-pre-wrap text-justify indent-12 max-[670px]:text-sm'>
                {
                "I define myself as appasionate to use my knowledge to develop high quality and efficiency products. I enjoy facing new challenges during the crafting process, which allows me to learn constantly and improve my skills as professional in my specialty area. I stand out by my capacity to collaborate with a team and conduct projects to success through and effective leadership, with the objective of achieve results and grow a comfort environment."}
            </p>
        </section>
    )
}

export default About