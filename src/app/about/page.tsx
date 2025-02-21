import AboutPage from '@/components/pages/AboutPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About',
}
export default async function page() {
  return <AboutPage />
}
