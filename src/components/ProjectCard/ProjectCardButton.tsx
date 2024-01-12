import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

function ProjectCardButton({ url, backgroundColor, Icon }: { url: string, backgroundColor: string, Icon: IconType}) {
  return (
    <Link href={url} style={{backgroundColor: backgroundColor}} 
          className="text-2xl p-2 rounded-full">
        <Icon/>
    </Link>
  )
}

export default ProjectCardButton