import { createClient } from '@sanity/client'

export const sanityConfig = {
  projectId: 'ufzfwpmr',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: false,
}

export const sanityClient = createClient(sanityConfig)