import React from 'react'

function ProjectCardTag( {name }: { name: string }) {
  return (
    <div className="py-1 px-2 bg-[#0072e5] font-semibold text-sm rounded-2xl
                    max-[650px]:py-[2px] max-[650px]:px-[6px] max-[650px]:text-xs max-[650px]:font-normal">
        {name}
    </div>
  )
}

export default ProjectCardTag