import React from 'react'

import { v4 as uuid } from 'uuid';

import experienceInfo from '@/data/experience';

import TimelineItem from './TimelineItem';

function Timeline() {
    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            {experienceInfo.map(item => <TimelineItem key={uuid()} 
                                                      Icon={item.Icon}
                                                      title={item.title}
                                                      dateLabel={item.dateLabel}
                                                      description={item.description}
                                                      descriptionList={item.descriptionList}
                                                      titleTag={item.titleTag}/>)}
        </ol>
    )
}

export default Timeline