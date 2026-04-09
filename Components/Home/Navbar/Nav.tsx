import Logo from '@/Components/Helper/Logo'
import { NAVLINKS } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type NavProps = {
  openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
  return (
    <div className='h-[12vh] relative z-10 lg:mt-8'>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        <Logo/>
        {/* Nav Links for Large Screens */}
        <div className='hidden lg:flex bg-white h-[10vh] md:pl-4 items-center space-x-10 '>
          {
            NAVLINKS.map((link) => (
              <Link key={link.id} href={link.url} className='text-lg font-medium text-gray-700 hover:text-gray-900 transition duration-300'>
                {link.label}
              </Link>
            ))}
            
            {/* Button */}
            <button className='h-full bg-orange-400 text-white text-lg px-4 py-2 hover:bg-orange-500 transition duration-300 cursor-pointer active:scale-80 '>
              Create Account
            </button>
        </div>
        {/* Hamburger Menu for Small Screens */}
        <div  className='lg:hidden'>
          <HiBars3BottomRight className='w-9 h-9 text-stone-100 cursor-pointer active:scale-50 hover:text-orange-500 transition duration-300 ' onClick={openNav}/>
        </div>
      </div>
    </div>
  )
}

export default Nav