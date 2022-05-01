import React, { useState } from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='w-full bg-navbg py-4'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center'>
        <div className='text-explorecolor text-3xl font-extrabold'>
        <i class="fa-solid fa-coins text-3xl"></i> COIN.COM
        </div>

        <div className='hidden md:block'>
                <ul className='flex items-center justify-between text-textcolor font-semibold'>
                    <li className='p-4'>
                    <Link
                        className='cursor-pointer'
                        activeClass="active"
                        to="wallet"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Wallet
                        </Link>
                        </li>

                        <li className='p-4'>
                        <Link
                        className='cursor-pointer'
                        activeClass="active"
                        to="exchange"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Exchange
                        </Link>
                        </li>
                    
                        <li className='p-4'>
                        <Link
                        className='cursor-pointer'
                        activeClass="active"
                        to="explore"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Explorer
                        </Link>
                        </li>

                        <li className='p-4'>
                        <Link
                        className='cursor-pointer'
                        activeClass="active"
                        to="institution"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Institutional
                        </Link>
                        </li>
                </ul>
        </div>

        <div className='block md:hidden' onClick={handleNav}>
        {
            nav ?
            <i className="fa-solid fa-xmark text-white text-xl"></i>
            :
            <i className="fa-solid fa-bars text-white text-xl"></i>
        }
        </div>

        <div className={nav ? 'w-full left-0 bg-white text-navcolor absolute top-[61px]  opacity-100' : 'absolute opacity-0'}>
            <ul className='flex flex-col items-center justify-center'>
                <li className='font-xl font-semibold p-4'>
                        <Link
                        className='cursor-pointer'
                        activeClass="active"
                        to="wallet"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Wallet
                        </Link>
                </li>
                <li className='font-xl font-semibold p-4'>
                        <Link
                        className='cursor-pointer'
                        activeClass="active"
                        to="exchange"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Exchange
                        </Link>
                </li>
                <li className='font-xl font-semibold p-4'>
                        <Link
                        className='cursor-pointer'
                        activeClass="active"
                        to="explore"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Explorer
                        </Link>
                </li>
                <li className='font-xl font-semibold p-4'>
                        <Link
                        className='cursor-pointer'
                        activeClass="active"
                        to="institution"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Institutional
                        </Link>
                </li>
            </ul>
           <div className='bg-black'>
                
           </div>
        </div>
            
        </div>
        
    </div>
  )
}

export default Navbar