import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Casa Azul Ibiza',
  description: 'Maison d\'hôtes à Ibiza - Réservez votre séjour',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-primaryBg text-primaryText font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
