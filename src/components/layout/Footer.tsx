import { siteConfig } from '@/lib/config/site.config'
import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from 'react-icons/lu'
import Container from './Container'

export default function Footer() {
  const navigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Automation', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' }
    ],
    support: [
      { name: 'Submit ticket', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' }
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: <LuFacebook />
      },
      {
        name: 'Instagram',
        href: '#',
        icon: <LuInstagram />
      },
      {
        name: 'X',
        href: '#',
        icon: <LuTwitter />
      },
      {
        name: 'YouTube',
        href: '#',
        icon: <LuYoutube />
      }
    ]
  }

  return (
    <footer className='bg-white'>
      <Container className='pb-8 pt-16 sm:pt-24 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-2 xl:gap-8'>
          <img alt='Company name' src={siteConfig.logo} className='h-9' />
          <div className='mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 xl:mt-0'>
            <div>
              <h3 className='text-sm/6 font-semibold text-gray-900'>Solutions</h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className='text-sm/6 text-gray-600 hover:text-gray-900'>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm/6 font-semibold text-gray-900'>Support</h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className='text-sm/6 text-gray-600 hover:text-gray-900'>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm/6 font-semibold text-gray-900'>Company</h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className='text-sm/6 text-gray-600 hover:text-gray-900'>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between'>
          <div>
            <h3 className='text-sm/6 font-semibold text-gray-900'>Subscribe to our newsletter</h3>
            <p className='mt-2 text-sm/6 text-gray-600'>
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          <form className='mt-6 sm:flex sm:max-w-md lg:mt-0'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email-address'
              type='email'
              required
              placeholder='Enter your email'
              autoComplete='email'
              className='w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:w-56 sm:text-sm/6'
            />
            <div className='mt-4 sm:ml-4 sm:mt-0 sm:shrink-0'>
              <button
                type='submit'
                className='flex w-full items-center justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'>
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className='mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between'>
          <div className='flex gap-x-6 md:order-2'>
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className='text-gray-600 hover:text-gray-800'>
                <span className='sr-only'>{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <p className='mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0'>
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
