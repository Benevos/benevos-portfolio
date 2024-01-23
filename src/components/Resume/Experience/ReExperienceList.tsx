import React from 'react'
import ReExperienceItem from './ReExperienceItem'

function ReExperienceList() {
    return (
        <div className='w-full leading-5'>
            <ReExperienceItem 
                title='Computer Science Engineer'
                date='January 2024 - Present'
                organization='Xelhua'
                activities={['Resolved backend problems related to elasitcity in distributed systems to recover down containers in Docker',
                             'Succesfully contributed in project development brigning up automatization into failure detection with Python',
                             'Efficency in use of remote connections to administrate and manipulate high perfomance Linux based servers in order to process big volumes of data']}/>
            <ReExperienceItem 
                title='Fullstack Developer'
                date='January 2023 - October 2023'
                organization='Calcula UAT'
                activities={['Developed, designed and applied solutions on different operative systems to create an interactive platform between the dedicated users',
                             'Implemented a mobile application with Flutter as main tool to reach Andorid and iOS to interact with the system',
                             'Deployed a website using Next.js and Google Cloud Services with Firebase to create real time In-Cloud solutions',
                             'Applied data persistency techniques to keep the platform operative even with no internet services available']}/>
        </div>
    )
}

export default ReExperienceList