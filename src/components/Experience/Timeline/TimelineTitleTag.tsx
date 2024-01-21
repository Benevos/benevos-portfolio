import { useAppSelector } from '@/lib/hooks'
import React from 'react'

function TimelineTitleTag({ text, className } : { text: string, className?: string }) 
{
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);    

    return (

        <span style={isOnDarkMode ? {backgroundColor: 'rgb(30,58,138,1)', color: 'rgb(147,197,253,1)'} :
                                    {backgroundColor: '#0072e5', color: 'white'}}
              className={`text-sm font-medium me-2 px-2.5 
                          py-0.5 rounded ms-3 ${className}`}>
            { text }
        </span>
    )
}

export default TimelineTitleTag