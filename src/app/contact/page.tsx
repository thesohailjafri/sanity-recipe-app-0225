import ContactPage from '@/components/pages/ContactPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact',
}
export default async function page() {
  return <ContactPage />
}
