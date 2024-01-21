import React, { MouseEventHandler } from 'react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleIsAboutOpen } from '@/lib/features/theme/uiStateSlice';

function Navbar() 
{
    const isAboutOpen = useAppSelector(state => state.uiState.isAboutOpen);
    const dispatch = useAppDispatch();

    const handleCilck = (event: React.MouseEvent<HTMLButtonElement>) =>
    {
        const button = event.target as HTMLButtonElement;

        if(button.name === 'about-section')
        {
            dispatch(toggleIsAboutOpen(false));
            return;
        }

        const projectsSection = document.querySelector(`#${button.name}`);

        projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <nav className="flex justify-center items-center max-md:hidden h-full text-[#0072e5]">
            <ul className="flex items-center h-full">
                <li className='h-full'>
                    <button className='hover:bg-[rgba(106,106,106,0.1)] h-full px-4 max-md:px-2 transition-all' 
                            name='home-section' onClick={handleCilck}>
                        Home
                    </button>
                </li>
                <li className='h-full'>
                    <button className='hover:bg-[rgba(106,106,106,0.1)] h-full px-4 max-md:px-2 transition-all' 
                            name='about-section' onClick={handleCilck}>
                        About me
                    </button>
                </li>
                <li className='h-full'>
                    <button className='hover:bg-[rgba(106,106,106,0.1)] h-full px-4 max-md:px-2 transition-all'  
                            name='projects-section' onClick={handleCilck}>
                        Projects
                    </button>
                </li>
                <li className='h-full'>
                    <button className='hover:bg-[rgba(106,106,106,0.1)] h-full px-4 max-md:px-2 transition-all' 
                            name='skills-section' onClick={handleCilck}>
                        Skills
                    </button>
                </li>
                <li className='h-full'>
                    <button className='hover:bg-[rgba(106,106,106,0.1)] h-full px-4 max-md:px-2 transition-all' 
                            name='experience-section' onClick={handleCilck}>
                        Experience
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar