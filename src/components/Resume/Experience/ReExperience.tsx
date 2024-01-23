import React from 'react'
import ReExperienceList from './ReExperienceList'
import ReSectionTitle from '../ReSectionTitle'

function ReExperience() {
    return (
        <section className='w-full mt-4 text-[14px]'>
            <ReSectionTitle title='EXPERIENCE'/>
            
            <ReExperienceList/>                    
        </section>
    )
}

export default ReExperience