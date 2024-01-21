'use client';

import { toggleMobileNavPanelState } from '@/lib/features/theme/uiStateSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React from 'react'

import { AiOutlineMenu } from "react-icons/ai";

function ButtonOpenMobileNavPanel() 
{
    const isMobileNavPanelOpen = useAppSelector(state => state.uiState.isMobileNavPanelOpen);

    const dispatch = useAppDispatch();

    const handleClick = () =>
    {
        dispatch(toggleMobileNavPanelState(isMobileNavPanelOpen));
    }  

    return (
        <button onClick={handleClick}
                style={{transform: isMobileNavPanelOpen ? 'rotate(90deg)' : 'rotate(0deg)'}}
                className='text-[#0073e5] text-2xl transition-all min-[768px]:hidden'>
            <AiOutlineMenu/>
        </button>
    )
}

export default ButtonOpenMobileNavPanel