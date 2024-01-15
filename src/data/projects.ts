import { FaGithub } from "react-icons/fa6"
import { LuExternalLink } from "react-icons/lu"
import { FaYoutube } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

const projectCardInfo = [
    {
        title: 'Deslizador de jugos',
        description: 'Deslizador de jugos animado insipirado en un diseño de MarcoDesignerX en TikTok',
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
        title: 'Tienda FMVZ',
        description: 'E-commerce inspirado en el crecimiento del las PYMES dentro del mercado mexicano',
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
        title: 'Calculo Mental',
        description: '(Inicio en desarollo) Versión 2 de la plataforma de educación pensada para el uso de docentes integrando la tecnologia en sus aulas',
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
        title: 'Calculo Mental (Móvil)',
        description: 'Aplicación móvil en Flutter en conjunto con una plataforma web (Calculo Mental) enfocada al uso de estudiantes para mejorar sus habilidades lógico matemáticas',
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
        title: 'Xelhua',
        description: 'Plataforma de big data para crear servicios de análisis independientes en la nube de alta disponibilidad sin programación. Participé en la etapa de elasticidad para el sistema',
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
            {name: 'Nube'},
            {name: 'Sistemas distribuidos'},
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