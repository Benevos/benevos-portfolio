import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../scss/globals.scss'
import Providers from '@/components/Providers';
import { ThemeModeScript } from 'flowbite-react';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: 'Benevos portfolio',
  description: "Meet me! My name is Kevin a Fullstack engineer, also known as Benevos. You're welcome to see the path I've made as developer",
  keywords: ['benevos','kevin','developer','fullstack','web','frontend','backend','mendoza','portfolio','engineer',
            'desarrollador', 'portafolio', 'ingeniero', 'sistemas'],
  authors: [{name: 'Kevin (Benevos)', url: 'https://github.com/Benevos'}],
  openGraph: {
    title: 'Benevos portfolio',
    description: "Meet me! My name is Kevin a Fullstack engineer, also known as Benevos. You're welcome to see the path I've made as developer",
    siteName: 'Benevos portfolio',
    type: 'website',
    countryName: 'Mexico',
    url: 'https://benevos-portfolio.vercel.app/',
    emails: ['kevin_mendoza092@hotmail.com'],
    images: [
      {
        url: 'https://benevos-portfolio.vercel.app/benevos-site.png',
        alt: 'benevos-site.png',
        width: '1987',
        height: '865'
      },
      {
        url: 'https://benevos-portfolio.vercel.app/benevos.jpg',
        alt: 'benevos.jpg',
        width: '890',
        height: '898'
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link
          rel="icon.png"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <ThemeModeScript/>
      </head>
      <body className={roboto.className + " scrollbar"}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
