import { NAVLINKS } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {

  const navOpenStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpenStyle} inset-0 transition-all transform duration-500 bg-black opacity-50 w-full z-20 h-screen`}>
      </div>
      {/* Nav Links */}
      <div className={`fixed top-0 h-full w-[70%] sm:w-[60%] bg-[#9f7c4e] z-30 transition-transform duration-500 transform translate-x-0 flex flex-col  justify-center space-y-6 ${navOpenStyle}`}>
        {NAVLINKS.map((link) =>(
          <Link key={link.id} href={link.url}>
            <p className='text-white w-fit text-[20px] ml-12 pb-1 sm:text-[30px] border-b-[1.5px] border-transparent hover:border-white transition-all duration-300'>
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <CgClose  className='w-6 h-6 absolute top-8 right-6 sm:w-8 sm:h-8 cursor-pointer active:scale-50 hover:text-white transition-all duration-300' onClick={closeNav}/>
      </div>
    </div>
  )
}

export default MobileNav