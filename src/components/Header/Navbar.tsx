import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="flex justify-center items-center text-[#0072e5]">
            <ul className="flex items-center gap-10 max-md:gap-4">
                <li>
                    <Link href={'/#'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/#'}>
                        Projects
                    </Link>
                </li>
                    <li>
                        <Link href={'/#'}>
                            Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar