"use client"

import React, { useRef } from 'react'
import ImageSlider from '../_component/ImageSlider'
import Image from 'next/image'
import bukit from '../../public/bukit-maras-bangka.jpg'
import Wrapper from '../_component/Wrapper'
import logo from '../../public/cropped-LOGO-SEKABEN-as-Smart-Object-1-120x120.png'
import phone from '../../public/icons8-phone-52.png'
import { useInView, motion } from 'framer-motion'
import image from '../../albumfoto/WhatsApp Image 2024-04-28 at 09.26.36_290c29d3.jpg'


const page = () => {
    const satu : any = useRef()
    const viewOne = useInView(satu, {margin:"-300px", once:true})
  return (
    <>
        <div className='relative'>
        <ImageSlider>
            <div>
              <Image className='w-full md:h-[400px] lg:h-[750px]' src={image} alt='' />
                <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-black">
                    <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0, transition : {duration : 0.7}}} className='text-white mt-[120px] md:mt-[300px] lg:mt-[500px] container mx-auto px-7 md:px-0'>
                        <h1 className='md:text-3xl lg:text-5xl font-bold'>Tinggalkan Pesan Dibawah jika ingin bertanya</h1>
                    </motion.div>
                </div>     
            </div>     
        </ImageSlider>
        </div>
        
        <Wrapper title='Contact Us'>
            <div ref={satu} className='flex flex-col md:flex-row justify-center items-center md:my-20'>
                <motion.div initial={{scale : 0}} animate={viewOne ? {scale : 1, transition : {duration : 0.3}} : {}} className='bg-hijau-kalem md:w-1/2 text-white rounded-t-xl md:rounded-l-xl md:rounded-tr-none p-5  space-y-8 h-[400px]'>
                    <div>
                       <Image className='w-[74px] md:w-24 lg:w-28' src={logo} alt='' />
                       <h1 className='font-bold text-lg md:text-xl'>Sekaben Camp</h1>
                       <p className='font-bold text-sm md:text-[16px]'>Jl Belakang Metro,Rejosari, Pangkal Balam Pangkal Pinang City, Bangka Belitung Islands 33172, Indonesia</p>
                    </div>

                    <div className='font-bold flex items-center gap-5'>
                        <svg fill='white' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 32 32">
                        <path d="M 6 7.03125 C 5.691406 7.03125 5.402344 7.089844 5.125 7.175781 L 8.039063 9.03125 L 23.960938 9.03125 L 26.875 7.175781 C 26.597656 7.089844 26.308594 7.03125 26 7.03125 Z M 4.113281 7.71875 C 3.4375 8.269531 3 9.097656 3 10.03125 L 3 23.03125 C 3 24.683594 4.347656 26.03125 6 26.03125 L 26 26.03125 C 27.652344 26.03125 29 24.683594 29 23.03125 L 29 10.03125 C 29 9.097656 28.5625 8.269531 27.886719 7.71875 L 16 15.28125 Z M 6 12.445313 L 16 18.8125 L 26 12.445313 L 26 24.03125 L 6 24.03125 Z"></path>
                        </svg>
                        <div>
                            <p>Email</p>
                            <p>sasjdajks@example.com</p>   
                        </div> 
                    </div>

                    <div className='font-bold flex items-center gap-5'>
                        <Image className='invert' src={phone} alt='' width={50} height={50}/>
                        <div>
                            <p>Phone</p>
                            <p>01293019209</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{scale : 0}} animate={viewOne ? {scale : 1, transition : {duration : 0.3, delay : 0.2}} : {}} className='md:w-1/2 bg-slate-400 rounded-b-xl md:rounded-r-xl md:rounded-bl-none p-5 w-full h-[400px]'>
                <form className="mx-auto">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-bold text-gray-900 ">Name</label>
                        <input placeholder='Sekaben' type="text" id="name" className="shadow-sm bg-slate-600 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-bold text-gray-900">Email</label>
                        <input type="email" id="email" className="shadow-sm bg-slate-600 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5" placeholder="sekabenteam@example.com" required />
                    </div>
                    
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-bold text-gray-900">Message</label>
                        <textarea placeholder='Tuliskan Pesan Disini...' className="shadow-sm h-24 bg-slate-600 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5" required style={{resize: 'none'}}></textarea>
                    </div>
                    <button type="submit" className="text-white bg-hijau-kalem duration-300 ease-in-out hover:bg-lime-950 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </form>
                </motion.div>
            </div>
        </Wrapper>
    </>
  )
}

export default page