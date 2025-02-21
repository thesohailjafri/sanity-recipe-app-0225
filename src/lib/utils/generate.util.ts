import { siteConfig } from '../config/site.config'

export const getCanonicalUrl = (url: string, isDomainPath: boolean = true) => {
  if (!isDomainPath) return url
  return url.startsWith('http')
    ? url
    : `${siteConfig.domain}${url[0] === '/' ? url : `/${url}`}`
}

export const genSlug = (value: string) => {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}
