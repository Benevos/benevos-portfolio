import React from 'react'
import { IconType } from 'react-icons'

interface skillCardType {
    title: string,
    Icon: IconType,
}

function ReSkillCard(props: skillCardType) 
{
    const { title, Icon } = props;

    return (
        <div className='flex gap-1 items-center'>
            <Icon className='text-base mb-[2px]'/>
            <label>{title}</label>
        </div>
    )
}

export default ReSkillCard