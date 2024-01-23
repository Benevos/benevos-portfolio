import React from 'react'
import { IconType } from 'react-icons'

interface contactItemType {
    title: string,
    Icon: IconType
}

function ReContactItem(props: contactItemType) 
{
    const {title, Icon} = props; 

    return (
        <div className='w-full flex items-center'>
            <Icon className='text-[13px] mr-2'/>
            <label className='text-[13px]'>{title}</label>
        </div>
    )
}

export default ReContactItem