import { IconType } from "react-icons"
import { MdBiotech } from "react-icons/md";
import { MdWork } from "react-icons/md";

interface TimelineItemType  {
    title: string,
    titleTag?: string,
    dateLabel: string,
    description?: string,
    descriptionList?: (string)[],
    Icon: IconType,
}

const experienceInfo: (TimelineItemType)[] = [
    {
        title: 'IT Auditor',
        titleTag: 'Latest',
        dateLabel: 'February 2024 - June 2024',
        description: 'INE (Mexican National Electoral Institute)',
        descriptionList: [
            "IT auditing service",
            "Server system monitoring",
            "Permissions analysis",
            "Infrastructure configuration verification",
            "Failure recovery testing",
            "Generation of technical and executive documentation"
        ],
        Icon: MdWork
    },
    {
        title: 'Computer Science Engineer',
        dateLabel: 'January 2024 - April 2024',
        description: 'Xelhua - CINVESTAV',
        descriptionList: ['Python data manipulation', 'Docker Compose container elasticity', 'Distributed computing solutions', 'Linux SSH enviroment administration'],
        Icon: MdWork
    },
    {
        title: 'Fullstack Developer',
        description: 'Calcula UAT (Web & Mobile) - UAT',
        dateLabel: 'January 2023 - October 2023',
        descriptionList: ['Development, design and deploy of cross plataform applications', 'Mobile apps with Flutter', 'Web implementations with NextJS',
                           'In-Cloud solutions with Google services'],
        Icon: MdBiotech
    },
]

export default experienceInfo;