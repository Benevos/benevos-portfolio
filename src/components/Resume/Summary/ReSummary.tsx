import React from 'react'
import ReSectionTitle from '@/components/Resume/ReSectionTitle';

function ReSummary() 
{
    return (
        <section className='w-full mt-5'>
            <ReSectionTitle title='SUMMARY'/>
            
            <p className='text-[14px] text-justify leading-4'>{"Computer science engineer with experience in fullstack solutions on projects that involve web, mobile, servers and process automation technologies. I am a self-confident and like to expose ideas while learning from others without fear of public speaking or defending postures, competent in fields such as speech, leadership and interpersonal ties. Despite all this, I am aware of not having world's knowledge, but as engineer, I believe not knowing something doesn't mean it can't be learned. My favorite hobbies are video games, gym, watching series and learning new technologies and programming methods."}</p>
        </section>
    )
}

export default ReSummary