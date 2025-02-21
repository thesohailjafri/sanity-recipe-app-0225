import PrivacyPage from '@/components/pages/PrivacyPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy',
}
export default async function page() {
  return <PrivacyPage />
}
