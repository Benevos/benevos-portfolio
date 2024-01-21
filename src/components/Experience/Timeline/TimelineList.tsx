import React from 'react'
import { useAppSelector } from '@/lib/hooks'
import { v4 as uuid } from 'uuid';

function TimelineList({ list } : { list: (string)[] }) 
{
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <ul style={{ color: isOnDarkMode ? 'rgb(156,163,175,1)' : 'rgb(107,114,128,1)'}}
            className='text-xl'>
            { list.map(item => <li key={uuid()}>• {item}</li>) }
        </ul>
    )
}

export default TimelineList