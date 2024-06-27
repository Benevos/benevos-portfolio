import React from 'react'
import ReExperienceItem from './ReExperienceItem'

function ReExperienceList() {
    return (
        <div className='w-full leading-5'>
            <ReExperienceItem 
                title='Auditor'
                date='Februrary 2024 - June 2024'
                organization='SIVEI 2024'
                activities={["Internet-based Electronic Voting System (Sistema de Voto Electrónico por Internet) for 2024 mexican elections",
                            "Monitored cloud-based systems with automated Python scripts",
                            "Generated technical and executive documents related to the audit process",
                            "Perfomed infrastructure configuration tests to ensure correctness for production use",
                            "Systems tested through failure recovery tests to verify data consistency, service consistency, and user experience",
                            "Verified system permissions and resources to avoid vulnerabilities"]}/>
            <ReExperienceItem 
                title='Computer Science Engineer'
                date='January 2024 - April 2024'
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