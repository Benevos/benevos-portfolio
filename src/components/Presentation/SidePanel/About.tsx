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

            <p className='whitespace-pre-wrap text-center text-pretty text-[15px] leading-5'>
                {
                "Computer science engineer with experience in fullstack solutions, with projects that involve web, mobile, servers and process automation technologies. I am a self-confident and like to present ideas and learn from others without fear of speaking in public or defending my position, feeling competent in fields such as speech, leadership and interpersonal ties. Even with all this, I am aware of not having world's knowledge, but as an engineer, I believe not knowing something doesn't mean it can't be learned. My favorite hobbies are video games, gym, watching series and learning new technologies and programming methods"}
            </p>
        </section>
    )
}

export default About