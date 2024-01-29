import { FaGithub } from "react-icons/fa6"
import { LuExternalLink } from "react-icons/lu"
import { FaYoutube } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

const projectCardInfo = [
    {
        title: 'Juice Slider',
        description: 'Animated juice slider inspired by a design by MarcoDesignerX on TikTok',
        imageSrc: '/juice-slider.png',
        buttons: [
        {
            icon: FaGithub,
            color: '#010409',
            url: 'https://github.com/Benevos/react-nextjs-tailwind-juice-slider'
        },
        {
            icon: LuExternalLink,
            color: '#1d4ed8',
            url: 'https://juice-slider-lvh6osyb6-benevos.vercel.app/'
        }
        ],
            tags: [
            {name: 'NextJS'},
            {name: 'React'},
            {name: 'TailwindCSS'}
        ]
    },
    {
        title: 'FMVZ Store',
        description: 'E-commerce inspired by the growth of SMEs within the Mexican market',
        imageSrc: '/fmvz-store.png',
        buttons: [
        {
            icon: FaGithub,
            color: '#010409',
            url: 'https://github.com/Benevos/fmvz-store'
        },
        {
            icon: LuExternalLink,
            color: '#1d4ed8',
            url: 'https://fmvz-store.vercel.app/'
        }
        ],
            tags: [
            {name: 'NextJS'},
            {name: 'React'},
            {name: 'SASS'},
            {name: 'PayPal'}
        ]
    },
    {
        title: 'Calcula UAT (Web)',
        description: '(New version in development, click on history button to access to the legacy complete version) Education platform designed for teachers in order to integrate technology in their classrooms',
        imageSrc: '/academic-web-app.png',
        buttons: [
        {
            icon: FaYoutube,
            color: '#f00000',
            url: 'https://youtu.be/XDvh5033-4I'
        },
        {
            icon: FaHistory,
            color: '#737373',
            url: 'https://academic-web-app.vercel.app/'
        },
        {
            icon: LuExternalLink,
            color: '#1d4ed8',
            url: 'https://academic-web-app-v2.vercel.app/'
        }
        ],
            tags: [
            {name: 'NextJS'},
            {name: 'React'},
            {name: 'Firebase'},
            {name: 'TailwindCSS'},
            {name: 'SASS'}
        ]
    },
    {
        title: 'Calcula UAT (Mobile)',
        description: 'Mobile app in Flutter in conjunction of a web platform (Calculo Mental) focused on students to improve their logical-mathematical skills',
        imageSrc: '/academic-mobile-app.jpg',
        buttons: [
            {
                icon: FaYoutube,
                color: '#f00000',
                url: 'https://youtu.be/XDvh5033-4I'
            },
        ],
            tags: [
            {name: 'Flutter'},
            {name: 'Dart'},
            {name: 'Firebase'},
        ]
    },
    {
        title: 'Instagram Clone',
        description: "This is an Instagram Clone from its home screen, this was made in order to learn more about how to make a React Native app",
        imageSrc: '/instagram-clone.jpg',
        buttons: [
        {
            icon: FaGithub,
            color: '#010409',
            url: 'https://github.com/Benevos/react-native-instagram-clone'
        },
        ],
            tags: [
            {name: 'React Native'},
            {name: 'Redux'},
            {name: 'Android'},
            {name: 'Typescript'},
        ]
    },
    {
        title: 'Xelhua',
        description: "Platform that enables end-users and organizations the use graphical schemes to build cloud agnostic big data analytics services without code. I participated in system's elasticity phase.",
        imageSrc: '/xel.png',
        buttons: [
        {
            icon: FaGithub,
            color: '#010409',
            url: 'https://github.com/ArmandoBarron/xel'
        },
        ],
            tags: [
            {name: 'Python'},
            {name: 'Docker'},
            {name: 'Linux'},
            {name: 'Cloud'},
            {name: 'Distributed services'},
        ]
    },
    {
        title: 'Benevos Compiler',
        description: "A compiler that recognizes and processes a formal language made by me in order to compile it to executable Python code. It was created for me to learn about low level systems",
        imageSrc: '/compiler.png',
        buttons: [
        {
            icon: FaGithub,
            color: '#010409',
            url: 'https://github.com/Benevos/scanner-parser-compiler-nextjs'
        },
        {
            icon: LuExternalLink,
            color: '#1d4ed8',
            url: 'https://benevos-compiler.vercel.app/'
        },
        ],
            tags: [
            {name: 'NextJS'},
            {name: 'React'},
            {name: 'TailwindCSS'},
            {name: 'NodeJS'},
            {name: 'Python'},
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