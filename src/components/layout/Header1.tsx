import { IoMdCall } from 'react-icons/io'
import { IoMenu, IoSearchSharp } from 'react-icons/io5'
import Container from './Container'
import { pagePath } from '@/lib/config/site.config'
import Link from 'next/link'

export default function Header() {
  return (
    <Container className='mt-2 py-2 md:mt-5 flex justify-between md:p:5'>
      <h1 className='font-bold'>TheZenRecipes</h1>
      <div className=' gap-6 hidden md:flex'>
        {navbar.map((menu, index) => (
          <div key={index} className='group relative flex items-center space-x-2'>
            <p className='translate-x-0 group-hover:translate-x-1 cursor-pointer duration-200 ease-in-out font-normal group-hover:font-semibold min-w-[60px]'>
              <Link href={menu.path}>{menu.title}</Link>
            </p>

            {/* Circle that slides in from the right */}
            <p className='absolute left-0  translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-5 duration-200 ease-in-out'>
              <span className='block h-2 w-2 bg-yellow-400 rounded-full'></span>
            </p>
          </div>
        ))}
      </div>
      <div className='hidden md:flex gap-3'>
        <div className='bg-gray-100  rounded-full p-1'>
          <IoSearchSharp />
        </div>
        <div className='bg-black text-white  rounded-full p-1'>
          <IoMdCall />
        </div>
      </div>
      <div className='flex md:hidden'>
        <IoMenu />
      </div>
    </Container>
  )
}

const navbar = [
  {
    title: 'Home',
    path: pagePath.home
  },
  {
    title: 'About',
    path: pagePath.aboutus
  },
  {
    title: 'Recipes',
    path: pagePath.recipe
  },
  {
    title: 'Form',
    path: pagePath.form
  },
  {
    title: 'Contact',
    path: pagePath.contactus
  }
]
