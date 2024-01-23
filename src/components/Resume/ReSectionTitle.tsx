import React from 'react'

interface sectionTitleType {
    title: string,
}

function ReSectionTitle(props: sectionTitleType) 
{
    const { title } = props;

    return (
        <div className='w-full'>
            <h2 className='text-base tracking-widest'>{title}</h2>
            <hr className='border-[rgba(76,76,76,0.5)] mb-3'/>
        </div>
    )
}

export default ReSectionTitle