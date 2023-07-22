import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'IMDb Clone',
    description: 'Find top rated movies and tv shows. IMDb Clone built with Next.js. Created by Caden Wilcox.',
    favicon: '/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
