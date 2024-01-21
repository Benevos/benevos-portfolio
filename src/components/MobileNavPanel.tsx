import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React from 'react'
import { useWindowWidthSize } from './Customs/useWindowSize';
import { toggleIsAboutOpen, toggleMobileNavPanelState } from '@/lib/features/theme/uiStateSlice';




function MobileNavPanel() 
{
    const windowWidth = useWindowWidthSize();

    const isMobileNavPanelOpen = useAppSelector(state => state.uiState.isMobileNavPanelOpen);
    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);
    
    const dispatch = useAppDispatch();

    const handleCilck = (event: React.MouseEvent<HTMLButtonElement>) =>
    {
        const button = event.target as HTMLButtonElement;

        let projectsSection: HTMLElement | null;

        if(button.name === 'about-section') 
        {
            dispatch(toggleIsAboutOpen(false));
            projectsSection = document.querySelector(`#home-section`);
        }
        else
        {
            projectsSection = document.querySelector(`#${button.name}`);
        }        

        dispatch(toggleMobileNavPanelState(isMobileNavPanelOpen));
        projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div style={{width: isMobileNavPanelOpen && (windowWidth <= 768)  ? '300px' : '0px',
                     backgroundColor: isOnDarkMode ? '#101418' : 'white',
                     borderColor: isOnDarkMode ? 'rgba(194,224,255,0.08)' : '#dadfe8',
                     borderWidth: isMobileNavPanelOpen && (windowWidth <= 768)  ? '' : '0px'}}

             className="fixed top-[65px] left-0 w-[300px] h-[calc(100dvh-65px)] transition-all duration-300 py-4 
                        border-t-[1px] border-r-[1px] z-10 overflow-x-hidden overflow-y-auto">

            <div style={{display: isMobileNavPanelOpen ? '' : 'none'}}
                 className="overflow-hidden overflow-y-auto min-w-[300px] min-[768px]:hidden">
                <h2 className="w-full flex items-center justify-center duration-150 text-[#0072e5] text-2xl">
                    Sections
                </h2>

                <button className='hover:bg-[rgba(106,106,106,0.1)] w-full py-2 px-4 max-md:px-2 transition-all' 
                        name='home-section' onClick={handleCilck}>
                    Home
                </button>
                <button className='hover:bg-[rgba(106,106,106,0.1)] w-full py-2 px-4 max-md:px-2 transition-all' 
                        name='about-section' onClick={handleCilck}>
                    About me
                </button>
                <button className='hover:bg-[rgba(106,106,106,0.1)] w-full py-2 px-4 max-md:px-2 transition-all' 
                        name='projects-section' onClick={handleCilck}>
                    Projects
                </button>
                <button className='hover:bg-[rgba(106,106,106,0.1)] w-full py-2 px-4 max-md:px-2 transition-all' 
                        name='skills-section' onClick={handleCilck}>
                    Skills
                </button>
                <button className='hover:bg-[rgba(106,106,106,0.1)] w-full py-2 px-4 max-md:px-2 transition-all' 
                        name='experience-section' onClick={handleCilck}>
                    Experience
                </button>
            </div>
      </div>
    )
}

export default MobileNavPanel