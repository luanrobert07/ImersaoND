import { ReactNode } from 'react'
import './globals.css'
import { Rokkitt } from 'next/font/google'
import { Header } from './components/Header'

const rokkitt = Rokkitt({ subsets: ['latin'] })

// Arquivo de config SEO
export const metadata = {
  title: 'Transdimencional Passage ',
  description:
    'Agência de teletransporte para viagens em qualquer lugar do mundo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={rokkitt.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
