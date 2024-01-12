import { FaGithub } from "react-icons/fa6"
import { LuExternalLink } from "react-icons/lu"

const projectCardInfo = [
{
    title: 'Deslizador de jugos',
    description: 'Deslizador de jugos animado insipirado en un diseño de MarcoDesignerX en TikTok',
    buttons: [
    {
        icon: FaGithub,
        color: '#010409',
        url: '/#'
    },
    {
        icon: LuExternalLink,
        color: '#1d4ed8',
        url: '/#'
    }
    ],
    tags: [
    {name: 'NextJS'},
    {name: 'React'},
    {name: 'TailwindCss'}
    ]
},
{
    title: 'Deslizador de jugos',
    description: 'Deslizador de jugos animado insipirado en un diseño de MarcoDesignerX en TikTok',
    buttons: [
    {
        icon: FaGithub,
        color: '#010409',
        url: '/#'
    },
    {
        icon: LuExternalLink,
        color: '#1d4ed8',
        url: '/#'
    }
    ],
    tags: [
    {name: 'NextJS'},
    {name: 'React'},
    {name: 'TailwindCss'}
    ]
},
]

export const defaultButtonConfig = [
{
    icon: FaGithub,
    color: '#010409',
    url: '/#'
},
{
    icon: LuExternalLink,
    color: '#1d4ed8',
    url: '/#'
    }
]

export const defaultTagsConfig = [
    {name: 'NextJS'},
    {name: 'TailwindCSS'},
    {name: 'Redux'},
    {name: 'Typescript'}
]

export default projectCardInfo;