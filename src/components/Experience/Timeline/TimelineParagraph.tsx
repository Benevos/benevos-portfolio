import { useAppSelector } from '@/lib/hooks'
import React from 'react'

function TimelineParagraph({ text } : { text: string }) 
{
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <p style={{ color: isOnDarkMode ? 'rgb(156,163,175,1)' : 'rgb(107,114,128,1)'}}
           className="mb-4 text-xl font-normal">
            { text }
        </p>
    )
}

export default TimelineParagraph