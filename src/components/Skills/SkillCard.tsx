import { useAppSelector } from '@/lib/hooks';
import React, { ReactNode, useEffect, useRef } from 'react'


interface cardType {
    Icon: ReactNode,
    color?: string,
    name: string,
}

function SkillCard(props: cardType) 
{
    const { Icon, color, name } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const iconDivRef = useRef<HTMLDivElement>(null);
    const nameDivRef = useRef<HTMLDivElement>(null);

    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    const handleOnMouseEnter = () =>
    {
        const container = containerRef.current;
        const iconDiv = iconDivRef.current;
        const nameDiv = nameDivRef.current;

        
        container!.style.zIndex = '3';

        if(color)
        {
            iconDiv!.style.color = 'white';
            container!.style.backgroundColor = color;
            return;
        }

        iconDiv!.style.color = isOnDarkMode ? 'white' : 'black';
        container!.style.backgroundColor = isOnDarkMode ? 'black' : 'white';
        nameDiv!.style.borderColor = isOnDarkMode ? 'black' : 'white';
        nameDiv!.style.color = isOnDarkMode ? 'black' : 'white';
    }

    const handleOnMouseLeave = () =>
    {
        const container = containerRef.current;
        const iconDiv = iconDivRef.current;
        const nameDiv = nameDivRef.current;

        container!.style.backgroundColor = 'transparent';
        container!.style.zIndex = '2';

        if(color)
        {
            iconDiv!.style.color = color;
            return;
        }

        nameDiv!.style.borderColor = isOnDarkMode ? 'white' : 'black';
        nameDiv!.style.color = isOnDarkMode ? 'white' : 'black';
    }

    useEffect(() => 
    {
        const container = containerRef.current;

        if(isOnDarkMode)
        {
            container!.style.borderColor = color ? color : 'white';
        }
        else
        {
            container!.style.borderColor = 'transparent'
        }


        if(color) return;

        const iconDiv = iconDivRef.current;
        iconDiv!.style.color = isOnDarkMode ? 'white' : 'black';
    }, [isOnDarkMode, color])


    return (
        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} ref={containerRef}
                style={ 
                        color ? {color: color, borderColor: color} : {
                        color: isOnDarkMode ? 'white' : 'black', borderColor: isOnDarkMode ? 'white' : 'black'}
                      } 

                className='relative flex flex-col items-center w-[160px] h-[200px] rounded-lg overflow-hidden pulse-bright hover:animate-none
                        hover:translate-y-2 hover:-rotate-6 border-[1px] transition-all group hover:scale-110 z-[2] skill-shadow'>

            <div className={`flex justify-center items-center w-full h-[150px] rounded-t-lg text-8xl group-hover:bg-[${color}]`}>
                <div ref={iconDivRef} 
                     className='group-hover:scale-[2] group-hover:translate-y-1/4 group-hover:rotate-12 transition-all z-[4]'>
                 { Icon }
                </div>
            </div>

            <div ref={nameDivRef} style={ 
                color ? {color: color, borderColor: color} : {
                color: isOnDarkMode ? 'white' : 'black', borderColor: isOnDarkMode ? 'white' : 'black'}
            }
                    className='flex justify-center items-center absolute bottom-0 w-full h-[50px] border-t-[1px]'>
                <label className='text-2xl font-normal text-center'>{name}</label>
            </div>
        </div>
    )
}

export default SkillCard