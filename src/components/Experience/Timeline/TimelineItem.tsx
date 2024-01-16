import React from 'react'
import TimelineIcon from './TimelineIcon';

import { IconType } from 'react-icons';

import { v4 as uuid } from 'uuid';

import TimelineTitleTag from './TimelineTitleTag';

interface TimelineItemType  {
    title: string,
    titleTag?: string,
    dateLabel: string,
    description?: string,
    descriptionList?: (string)[],
    Icon: IconType,
}


function TimelineItem(props: TimelineItemType) 
{
    const { title, titleTag, dateLabel, description, descriptionList, Icon } = props;

    return (
        <li className="mb-10 ms-9">        

            <TimelineIcon Icon={ Icon }/>

            <h3 className="flex items-center mb-1 text-3xl max-[670px]:text-2xl font-semibold">

                { title }
                
                { titleTag ? <TimelineTitleTag text={titleTag}/> : <></>}
                
            </h3>

            <time className="block mb-2 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">

                { dateLabel }

            </time>


            { description && descriptionList ?
                <>
                    <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">
                        { description }
                    </p> 

                    <ul className='text-xl text-gray-500 dark:text-gray-400'>
                        { descriptionList.map(item => <li key={uuid()}>• {item}</li>) }
                    </ul>
                </> 
                :
                description && ! descriptionList ? 
                    <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">
                        { description }
                    </p> 
                :
                descriptionList ?
                <ul className='text-xl text-gray-500 dark:text-gray-400'>
                    { descriptionList.map(item => <li key={uuid()}>• {item}</li>) }
                </ul> : <></>
            }
            
        </li>
    )
}

export default TimelineItem