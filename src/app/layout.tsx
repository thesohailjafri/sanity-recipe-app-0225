import type { Metadata } from 'next'
import { Outfit as MainFont } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const mainFont = MainFont({
  display: 'swap',
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <div className="min-h-screen overflow-hidden">
          <Header />
          <div id="main">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
