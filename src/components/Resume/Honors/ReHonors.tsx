import React from 'react'
import ReSectionTitle from '../ReSectionTitle'
import honorsAwards from '@/data/honors-awards'

import { v4 as uuid } from 'uuid';
 
function ReHonors() {
    return (
        <section className='w-[49%] mt-4'>
            <ReSectionTitle title='HONORS AND AWARDS'/>


            <div className='w-full text-[14px] flex flex-col gap-1 leading-4'>
                {honorsAwards.map(honor => 
                    <div key={uuid()} className='w-full flex items-center gap-3'>
                        <honor.Icon className={'text-lg'}/>
                        <label>{honor.title}</label>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ReHonors