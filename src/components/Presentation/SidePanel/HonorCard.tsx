import { useAppSelector } from '@/lib/hooks'
import React from 'react'
import { IconType } from 'react-icons';

interface honorCardType  {
    title: string,
    Icon?: IconType
}

function HonorCard(props: honorCardType) 
{
    const { title, Icon } = props;

    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <div style={{borderColor: isOnDarkMode ? 'white' : 'black'}}
                            className='flex justify-center items-center w-ful gap-2 border-[1px] rounded-full p-2'>

            {Icon ? <Icon className='font-bold text-2xl w-[40px]'/> : <></>}
            
            <label className='text-md pointer-events-none'>{title}</label>
            
        </div>
    )
}

export default HonorCard