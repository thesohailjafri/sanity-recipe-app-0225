import HowItWorksPage from '@/components/pages/HowItWorksPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'How It Works',
}
export default async function page() {
  return <HowItWorksPage />
}
