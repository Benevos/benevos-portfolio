import React from 'react'

import TypeIt from "typeit-react";

import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import { toggleNameAnimationState } from '@/lib/features/theme/animationsSlice';


function PresentationTypeItLabels() 
{
    const nameAnimationEnded  = useAppSelector((state) => state.animations.nameAnimationEnded);

    const dispatch = useAppDispatch();

    
    return (
        <>
            <TypeIt className="text-lg relative font-light text-center"
            
            options={{ speed: 20, afterComplete: (instance: any) => { instance.destroy() }}}
            
            getBeforeInit={(instance) => {
                
                instance.type('kevin_mendoza092@hotmail.com')

                return instance;
            }}
            />

            <TypeIt className="text-5xl font-bold relative text-center"

            options={{ speed: 20, afterComplete: (instance: any) => { instance.destroy() } }}

            getBeforeInit={(instance) => {

            instance.type('Hi, my name is ',)
                    .type('<label class="text-[#007fff] animate-pulse">Kevin<label>')
                    .exec(() => {dispatch(toggleNameAnimationState(nameAnimationEnded))}, {delay: 4300 })
                    .type('.', {delay: 500})
                    .type('.', {delay: 500})
                    .type('.', {delay: 500})
                    .delete(9)
                    .type('<label class="text-[#007fff] animate-pulse">Benevos<label>')
                    

            return instance;
            }}/>

            {
            !nameAnimationEnded ? <></> :

            <TypeIt className="text-3xl text-[#66b2ff] font-bold relative text-center"
                options={{ speed: 20, afterComplete: (instance: any) => { instance.destroy() } }}
                getBeforeInit={(instance) => {
                
                instance.type('Frontend Developer', { delay: 500 })
                        .move(-10)
                        .delete(8)
                        .type('Backend', { delay: 500 })
                        .delete(7).type('Fullstack')

                return instance
                }}/>
            }
        </>
    )
}

export default PresentationTypeItLabels