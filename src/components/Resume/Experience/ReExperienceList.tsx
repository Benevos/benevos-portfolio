import React from 'react'
import ReExperienceItem from './ReExperienceItem'

function ReExperienceList() {
    return (
        <div className='w-full leading-5'>
            <ReExperienceItem 
                title='Computer Science Engineer'
                date='January 2024 - Present'
                organization='Xelhua'
                activities={['Resolved backend problems realted to elasitcity in distributed systems to recover down containers in Docker',
                             'Succesfully contributed in project development brigning automatization into failure detection with Python',
                             'Efficency in use of remote connections to administrate and manipulate high perfomance servers in order to process big volumes of data']}/>
            <ReExperienceItem 
                title='Fullstack Developer'
                date='January 2023 - October 2023'
                organization='Calcula UAT'
                activities={['Resolved backend problems realted to elasitcity in distributed systems to recover down containers in Docker',
                             'Succesfully contributed in project development brigning automatization into failure detection with Python',
                             'Efficency in use of remote connections to administrate and manipulate high perfomance servers in order to process big volumes of data']}/>
        </div>
    )
}

export default ReExperienceList