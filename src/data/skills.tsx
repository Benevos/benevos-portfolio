import { SiNextdotjs } from 'react-icons/si';
import { FaDocker, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa6';
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt, FaSass } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from 'react-icons/gr';
import { IoLogoTux } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";

const skillsInfo = [
    { Icon: <SiNextdotjs/>, color: undefined, name: 'Next'},
    { Icon: <FaReact/>, color: '#149eca', name:'React' },
    { Icon: <SiTailwindcss/>, color: '#38bdf8', name: 'Tailwind' },
    { Icon: <FaSass/>, color:'#ea388f', name:'SASS' },
    { Icon: <SiTypescript/>, color:'#377cc8', name:'Typescript' },
    { Icon: <IoLogoFirebase/>, color:'#ffcd33', name:'Firebase' },
    { Icon: <SiMongodb/>, color:'#55ad47', name:'MongoDB' },
    { Icon: <SiFlutter/>, color:'#30b8f6', name:'Flutter' },
    { Icon: <FaPython/>, color:'#14ca18', name:'Python' },
    { Icon: <FaNodeJs/>, color:'#82cc2b', name:'Node' },
    { Icon: <GrMysql/>, color:'#0074a8', name:'MySQL' },
    { Icon: <FaDocker/>, color:'#2b9aee', name:'Docker' },
    { Icon: <IoLogoTux/>, color:'#f7bf18', name:'Linux' },
    { Icon: <FaGitAlt/>, color:'#f05030', name:'Git' },
    { Icon: <FaGithub/>, color: undefined, name:'GitHub' },
    { Icon: <FaHtml5/>, color:'#f16a30', name:'HTML' },
    { Icon: <FaCss3Alt/>, color:'#1a73e8', name:'CSS' },
    { Icon: <DiJavascript/>, color:'#f7bf18', name:'Javascript' },
];

export default skillsInfo;