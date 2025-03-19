import type { Metadata } from 'next'
import { Young_Serif as HeadFont, Outfit as BodyFont } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

const headFont = HeadFont({
  display: 'swap',
  weight: ['400'],
  subsets: ['latin'],
  variable: '--head-font'
})

const bodyFont = BodyFont({
  display: 'swap',
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--body-font'
})

export const metadata: Metadata = {
  title: 'Recipe Blog',
  description: 'A simple recipe blog'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/assets/favicon/site.webmanifest' />
      </head>
      <body className={`${headFont.variable} ${bodyFont.variable}`}>
        <div className='min-h-screen overflow-hidden'>
          <Header />
          <main id='main'>
            <Container>{children}</Container>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
