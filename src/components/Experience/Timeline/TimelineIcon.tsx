import { useAppSelector } from '@/lib/hooks'
import React from 'react'
import { IconType } from 'react-icons'

function TimelineIcon({ Icon, className } : { Icon: IconType, className?: string}) 
{

    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <span className={`absolute flex items-center justify-center w-10 h-10  rounded-full -start-5 ring-8 
                         ${isOnDarkMode ? 'ring-[#0f1924] bg-blue-950' : 'bg-[#0072e5] ring-[#d9eafd]'} ${className}`}>
            
            <Icon className={`${isOnDarkMode ? 'text-[#0072e5]' : 'text-white'} w-7 h-7`}/>
        
        
        </span>
        
    )
}

export default TimelineIcon

//text-blue-800 dark:text-blue-300 w-2.5 h-2.