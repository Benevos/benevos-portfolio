import React from 'react'
import ReSectionTitle from '../ReSectionTitle'


function ReEducation() {
    return (
        <section className='flex flex-col gap-2 w-[49%] mt-4'>
            <ReSectionTitle title='EDUCATION'/>

            <div className='w-full leading-4 text-[14px]'>
                <h3 className='font-bold'>Computer Science Engineer</h3>
                <label className=''>Universidad Autónoma de Tamaulipas (UAT)</label>
            </div>

            <div className='w-full leading-4 text-[14px]'>
                <h3 className='font-bold'>Computer Science Technician</h3>
                <label className=''>Colegio Nacional de Eduación Profesional Técnica (CONALEP)</label>
            </div>
            
        </section>
    )
}

export default ReEducation