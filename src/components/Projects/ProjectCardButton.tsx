import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

function ProjectCardButton({ url, backgroundColor, Icon }: { url: string, backgroundColor: string, Icon: IconType}) {
  return (
    <Link href={url} style={{backgroundColor: backgroundColor}} target='_blank'
          className="text-2xl p-2 rounded-full hover:scale-110 hover:brightness-150 transition-all project-card-button-shadows">
        <Icon/>
    </Link>
  )
}

export default ProjectCardButton