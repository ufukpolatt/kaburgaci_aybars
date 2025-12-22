import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SEO from '@/components/SEO'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaburgacı Aybaz - En Lezzetli Kaburgalar',
  description: 'Kaburgacı Aybaz, Türkiye\'nin en lezzetli kaburga çeşitlerini sunan premium bir restorandır. Taze etler, özel soslar ve unutulmaz tatlar burada.',
  keywords: ['kaburga', 'et', 'restoran', 'lezzet', 'yemek', 'Türk mutfağı'],
  authors: [{ name: 'Kaburgacı Aybaz' }],
  openGraph: {
    title: 'Kaburgacı Aybaz - En Lezzetli Kaburgalar',
    description: 'Kaburgacı Aybaz, Türkiye\'nin en lezzetli kaburga çeşitlerini sunan premium bir restorandır.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <SEO />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}