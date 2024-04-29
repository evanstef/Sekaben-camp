"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import arrow from '../../public/icons8-chevron-right-48.png'
import logo from '../../public/Logo.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {motion} from 'framer-motion'

const Navbar = () => {

  const [openDua, setOpenDua] = useState(false)
  const [hamburger, setHamburger] = useState(false)

  const pathName = usePathname()

  function handleClick () {
    setHamburger(!hamburger)
  }

  const handleOpenDua = () => {
    setOpenDua(!openDua)
  }


  
  return (
    <div className='navbar bg-hijau-kalem'>
      {/* Mode Mobile */}
      
      <div className='container mx-auto  justify-between items-center font-bold lg:text-xl text-slate-200 py-3'>
        {/* Hamburger Menu */}
          <div onClick={() => handleClick()} className='flex flex-col z-50 gap-2 items-center justify-center md:hidden'>
            <span className={`bg-slate-200 w-9 h-1 rounded-full duration-300 ease-in-out ${hamburger ? 'rotate-45 origin-top-left' : ''}`}></span>
            <span className={`bg-slate-200 w-9 h-1 rounded-full duration-300 ease-in-out ${hamburger ? 'scale-0' : ''}`}></span>
            <span className={`bg-slate-200 w-9 h-1 rounded-full duration-300 ease-in-out ${hamburger ? '-rotate-45 origin-bottom-left' : ''}`}></span>
          </div>
        {/* Hamburger Menu */}
          <div className='hidden md:flex gap-7'>
            <Link className={`${pathName === '/' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`} href={"/"}>Company</Link>
              <Link className={`${pathName === '/about' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`}  href={"/about"}>About Us</Link>

              <div className='flex items-center gap-2'>
                <Link className={`${pathName === '/product' || pathName === '/product/allproduct' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`}  href={"/product"}>Product</Link>
                <div className='cursor-pointer dropdown dropdown-hover'>
                  <Image tabIndex={0} role='button' className={`invert duration-200 hover:rotate-90 ${openDua ? 'rotate-90' : 'rotate-0'}`} src={arrow} alt='' width={15} height={15}/>
                  <div tabIndex={0} onMouseEnter={() => handleOpenDua()} onMouseLeave={() => handleOpenDua()} className='menu dropdown-content z-10 bg-hijau-kalem rounded-lg w-52 pt-10'>
                    <Link className={`${pathName === '/product/allproduct' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`} href={'/product/allproduct'}>All Produk And Discount</Link>
                  </div>
                </div>  
              </div>
              <Link className={`${pathName === '/contact' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`} href={"/contact"}> Contact</Link>
          </div>

          {/* Khusus mode mobile */}
          <motion.div initial={{opacity: 0, y : -100}} animate={hamburger ? {opacity: 1, y: 0, transition : {duration : 0.5}} : {}} className={`${hamburger ? 'absolute top-0 flex flex-col z-40 bg-hijau-kalem left-0 px-10 py-20' : 'hidden'} gap-7 md:hidden`}>
            <Link onClick={() => handleClick()} className={`${pathName === '/' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`} href={"/"}>Company</Link>
            <Link onClick={() => handleClick()} className={`${pathName === '/about' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`}  href={"/about"}>About Us</Link>

            <div className='flex items-center gap-2'>
              <Link onClick={() => handleClick()} className={`${pathName === '/product' || pathName === '/product/allproduct' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`}  href={"/product"}>Product</Link>
              <div className='cursor-pointer dropdown dropdown-hover'>
                <Image tabIndex={0} role='button' className={`invert duration-200 hover:rotate-90 ${openDua ? 'rotate-90' : 'rotate-0'}`} src={arrow} alt='' width={15} height={15}/>
                <div tabIndex={0} onMouseEnter={() => handleOpenDua()} onMouseLeave={() => handleOpenDua()} className='menu dropdown-content z-10 bg-hijau-kalem rounded-lg w-52 pt-10'>
                  <Link onClick={() => handleClick()} className={`${pathName === '/product/allproduct' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`} href={'/product/allproduct'}>All Produk And Discount</Link>
                </div>
              </div>  
            </div>
            <Link onClick={() => handleClick()} className={`${pathName === '/contact' ? 'text-white' : ''} hover:text-white duration-200 ease-in-out`} href={"/contact"}> Contact</Link>
          </motion.div>
          {/* Akhir mode mobile */}

          <div className='absolute z-10 top-0 left-[41%] mt-8 md:hidden lg:block lg:mt-3 lg:left-[47.5%]'>
            <Image className='bg-cream-susu w-[70px] h-[70px] rounded-full lg:w-[110px] lg:h-[110px]' src={logo} alt='' />
          </div>

          {/* Sosmed */}
          <div className='flex md:gap-3'>
            <a href="https://www.instagram.com/sekaben_camp/" target='_blank'>
            <svg className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] *:cursor-pointer duration-300 ease-in-out hover:fill-lime-500' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill='white' viewBox="0 0 32 32">
            <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
            </svg>
            </a>   
            <a href="https://wa.me/6281212653247?text=Halo%20min,%20Saya%20Mau%20Sewa%20Alat%20Camping" target='_blank'>
            <svg className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer duration-300 ease-in-out hover:fill-lime-500' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="white" viewBox="0 0 32 32">
                <path fill-rule="evenodd" d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"></path>
              </svg>
            </a>
            
              <a href="https://www.tiktok.com/@sewaalatcamping_bangka" target='_blank'>
                <svg className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer duration-300 ease-in-out hover:fill-lime-500' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill='white' viewBox="0 0 32 32">
                <path d="M 9.6113281 5 C 7.0767063 5 5 7.0767063 5 9.6113281 L 5 22.388672 C 5 24.923294 7.0767063 27 9.6113281 27 L 22.388672 27 C 24.923294 27 27 24.923294 27 22.388672 L 27 9.6113281 C 27 7.0767063 24.923294 5 22.388672 5 L 9.6113281 5 z M 9.6113281 7 L 22.388672 7 C 23.84205 7 25 8.15795 25 9.6113281 L 25 22.388672 C 25 23.84205 23.84205 25 22.388672 25 L 9.6113281 25 C 8.15795 25 7 23.84205 7 22.388672 L 7 9.6113281 C 7 8.15795 8.15795 7 9.6113281 7 z M 17 9 L 17 19 C 17 20.116666 16.116666 21 15 21 C 13.883334 21 13 20.116666 13 19 C 13 17.883334 13.883334 17 15 17 L 15 15 C 12.802666 15 11 16.802666 11 19 C 11 21.197334 12.802666 23 15 23 C 17.197334 23 19 21.197334 19 19 L 19 12.888672 C 19.827834 13.529766 20.809277 13.98411 21.927734 14 L 21.957031 12 C 20.310764 11.976611 19 10.654231 19 9 L 17 9 z"></path>
              </svg>
              </a>
              <a href="mailto:Sekabencamp313@gmail.com?Subject : Informasi" target='_blank'>
                <svg className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer duration-300 ease-in-out hover:fill-lime-500' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill='white' viewBox="0 0 32 32">
                <path d="M 6 5 C 3.8026661 5 2 6.8026661 2 9 L 2 24 C 2 25.64497 3.3550302 27 5 27 L 10 27 L 10 17.03125 L 16 21.552734 L 22 17.03125 L 22 27 L 27 27 C 28.64497 27 30 25.64497 30 24 L 30 9 C 30 6.8026661 28.197334 5 26 5 C 25.103127 5 24.263145 5.2976622 23.591797 5.7988281 L 23.589844 5.8007812 L 16 11.517578 L 8.4121094 5.8007812 L 8.4121094 5.8027344 C 7.7382078 5.2939553 6.8953058 5 6 5 z M 6 7 C 6.4606942 7 6.876933 7.1492198 7.2070312 7.3984375 L 8 7.9960938 L 8 13.019531 L 4 10.005859 L 4 9 C 4 7.8833339 4.8833339 7 6 7 z M 26 7 C 27.116666 7 28 7.8833339 28 9 L 28 10.003906 L 24 13.017578 L 24 7.9941406 L 24.789062 7.4003906 C 25.119715 7.1535565 25.550873 7 26 7 z M 10 9.5019531 L 16 14.021484 L 22 9.5019531 L 22 14.525391 L 16 19.046875 L 10 14.525391 L 10 9.5019531 z M 4 12.507812 L 8 15.523438 L 8 25 L 5 25 C 4.4349698 25 4 24.56503 4 24 L 4 12.507812 z M 28 12.507812 L 28 24 C 28 24.56503 27.56503 25 27 25 L 24 25 L 24 15.523438 L 28 12.507812 z"></path>
                </svg>
              </a>   
          </div>
      </div>
      
    </div>
  )
}

export default Navbar