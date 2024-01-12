import React from 'react'

function ProjectCardTag( {name }: { name: string }) {
  return (
    <div className="py-1 px-2 bg-blue-800 font-semibold text-sm rounded-2xl">
        {name}
    </div>
  )
}

export default ProjectCardTag