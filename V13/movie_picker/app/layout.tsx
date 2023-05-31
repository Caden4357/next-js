'use client'
import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Nav from './nav/Nav'
import { MovieProvider } from './context/MovieProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Picker',
  description: 'Movie Picker website to help you find a great movie to watch!',
}

export default function RootLayout({
  children=null,
}: {
  children?: ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body>
        <MovieProvider>
          <Nav/>
          <main className="p-4 bg-white dark:bg-slate-900 w-screen h-screen">
            {children}
          </main>
        </MovieProvider>
      </body>
    </html> 
  )
}
