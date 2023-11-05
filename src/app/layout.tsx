import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { UserProvider } from './Contexts/UserContext'
import Navbar from './Components/Navbar'

const roboto = Roboto({ weight: ['100', '400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Butter Cheese Eggs',
  description: 'TicTacToe with a twist. Made with Next.js and Firebase.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
