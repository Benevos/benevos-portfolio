import React, { useLayoutEffect, useState } from 'react';

export function useWindowWidthSize() 
{
    const [size, setSize] = useState(0);

    useLayoutEffect(() => 
    {
      function updateSize() 
      {
        setSize(window.innerWidth);
      }
      
      window.addEventListener('resize', updateSize);

      updateSize();

      return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}
  