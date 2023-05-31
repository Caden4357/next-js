import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Picker',
  description: 'Movie Picker website to help you find a great movie to watch!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
