'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/config/site.config'
import { pagePath } from '@/lib/config/site.config'
import Container from './Container'

const navigation = [
  { name: 'Home', href: pagePath.home },
  { name: 'Recipes', href: pagePath.recipe },
  { name: 'About', href: pagePath.aboutus },
  { name: 'Contact', href: pagePath.contactus }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white'>
      <Container>
        <nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
          <Link href={pagePath.home} className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image
              width={32}
              height={32}
              alt='Company logo'
              src={siteConfig.logo}
              className='h-8 w-auto'
              unoptimized
            />
          </Link>
          <div className='flex lg:hidden'>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(true)}
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-10'>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className='text-sm/6 font-semibold text-gray-900'>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </Container>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image
                width={32}
                height={32}
                alt='Company logo'
                src={siteConfig.logo}
                className='h-8 w-auto'
                unoptimized
              />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
