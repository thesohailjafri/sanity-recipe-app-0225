import TermsPage from '@/components/pages/TermsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms',
}
export default async function page() {
  return <TermsPage />
}
