import React from 'react'
import { v4 as uuid } from 'uuid';

interface experienceItemType {
    title: string,
    date: string,
    organization?: string,
    activities: (string)[],
}

function ReExperienceItem(props: experienceItemType) 
{
    const {title, date, organization, activities} = props;

    return (
        <div className='w-full mt-3'>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold'>{title}</h3>
                <label className='text-[13px]'>{date}</label>
            </div>

            {organization ? <label className=''>{organization}</label> : <></>}
            
            <ul className='w-full mt-1 text-justify'>
                
                { activities.map(activity =>
                    <li key={uuid()} className='w-full'>
                        <div className='w-full flex'>
                            <p className='text-xl leading-5'>•</p>
                            <p className='ml-3'>
                                {activity}
                            </p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ReExperienceItem