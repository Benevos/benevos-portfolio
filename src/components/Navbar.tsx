import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="flex justify-center items-center">
            <ul className="flex items-center gap-10 max-md:gap-4">
                <li>
                    <Link href={'/#'}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href={'/#'}>
                        Proyectos
                    </Link>
                </li>
                    <li>
                        <Link href={'/#'}>
                            Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar