import { writeFileSync } from 'fs'
import { globby } from 'globby'

const siteUrl = 'https://example.com' // TODO: Change this to your site URL
const fullUrl = (path) => siteUrl + path
const defaultConfig = {
  changefreq: 'weekly',
  priority: '0.7',
  lastmod: new Date().toISOString(),
}

const homeConfig = {
  loc: '/',
  changefreq: 'weekly',
  priority: '1.0',
  lastmod: defaultConfig.lastmod,
}

const nextApproach = 'app' // app or pages
const serverPath = `.next/server/${nextApproach}`

async function generateSitemap() {
  console.log('Generating sitemap.xml 🥂')
  // Grub Pages from build
  const buildPages = await globby([
    // *** Include ***
    // include all html files and nested html files
    `${serverPath}/**/*.html`,
    // *** Exclude ***
    // /index.html is same as / so we will exclude it, along with 404, 500 and _not-found pages, cool right?
    `!${serverPath}/index.html`,
    `!${serverPath}/404.html`,
    `!${serverPath}/_not-found.html`,
    `!${serverPath}/500.html`,
  ])

  const sitemapStr = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${fullUrl(homeConfig.loc)}</loc>
      <lastmod>${homeConfig.lastmod}</lastmod>
  		<changefreq>${homeConfig.changefreq}</changefreq>
      <priority>${homeConfig.priority}</priority>
    </url>
    ${buildPages
      .map((page) => {
        const path = page.replace(serverPath, '').replace('.html', '')
        const loc = fullUrl(path)
        const lastmod = new Date().toISOString()
        let changefreq = defaultConfig.changefreq
        let priority = defaultConfig.priority
        if (path === '/recipe') {
          priority = '0.9' // Higher priority for the index products page
        } else if (path.includes('/recipe/')) {
          priority = '0.8' // Higher priority for the slug products page
        }
        return `
				<url>
          <loc>${loc}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>
            `
      })
      .join('')}
    </urlset>
    `

  writeFileSync(`public/sitemap.xml`, sitemapStr)
  console.log('sitemap.xml generated 🎉')
}

generateSitemap()
