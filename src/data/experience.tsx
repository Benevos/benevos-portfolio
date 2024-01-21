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
        title: 'Xelhua',
        titleTag: 'Current',
        dateLabel: 'January 2024 - Present',
        descriptionList: ['Python data manipulation', 'Docker Compose container elasticity', 'Distributed computing solutions', 'Linux SSH enviroment administration'],
        Icon: MdWork
    },
    {
        title: 'Calcula UAT (Web & Mobile)',
        dateLabel: 'January 2023 - October 2023',
        descriptionList: ['Development, design and deploy of cross plataform applications', 'Mobile apps with Flutter', 'Web implementations with NextJS',
                           'In-Cloud solutions with Google services'],
        Icon: MdBiotech
    },
]

export default experienceInfo;