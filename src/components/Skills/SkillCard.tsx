import { useAppSelector } from '@/lib/hooks';
import React, { ReactNode } from 'react'


interface cardType {
    Icon: ReactNode,
    color?: string,
    name: string,
}

function SkillCard(props: cardType) 
{
    const { Icon, color, name } = props;

    const isOnDarkMode = useAppSelector(state => state.theme.isOnDarkMode);

    return (
        <div style={ 
                color ? {color: color, borderColor: color} : {
                color: isOnDarkMode ? 'white' : 'black', borderColor: isOnDarkMode ? 'white' : 'black'}
            } 

                         className='relative flex flex-col items-center w-[160px] h-[200px] rounded-lg overflow-hidden
                                  hover:translate-y-2 border-[1px] transition-all group'>

            <div className='flex justify-center items-center w-full h-[150px] rounded-t-lg text-8xl'>
                <div className='group-hover:scale-150 group-hover:translate-y-1/4 group-hover:rotate-6 transition-all'>
                 { Icon }
                </div>
            </div>

            <div style={ 
                color ? {color: color, borderColor: color} : {
                color: isOnDarkMode ? 'white' : 'black', borderColor: isOnDarkMode ? 'white' : 'black'}
            }
                    className='flex justify-center items-center absolute bottom-0 w-full h-[50px] border-t-[1px]'>
                <label className='text-2xl font-light text-center'>{name}</label>
            </div>
        </div>
    )
}

export default SkillCard