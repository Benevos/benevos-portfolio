import React from 'react'
import ReSectionTitle from '@/components/Resume/ReSectionTitle';

function ReSummary() 
{
    return (
        <section className='w-full mt-6'>
            <ReSectionTitle title='SUMMARY'/>
            
            <p className='text-[14px] text-justify leading-4'>{"Computer science engineer with experience in fullstack solutions, with projects that involve web, mobile, servers and process automation technologies. I am a self-confident and like to present ideas and learn from others without fear of speaking in public or defending my position, feeling competent in fields such as speech, leadership and interpersonal ties. Even with all this, I am aware of not having world's knowledge, but as an engineer, I believe not knowing something doesn't mean it can't be learned. My favorite hobbies are video games, gym, watching series and learning new technologies and programming methods."}</p>
        </section>
    )
}

export default ReSummary