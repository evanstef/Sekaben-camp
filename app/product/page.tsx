"use client"

import React, { useRef } from 'react'
import ImageSlider from '../_component/ImageSlider'
import bukit from '../../public/bukit-maras-bangka.jpg'
import Image from 'next/image'
import Wrapper from '../_component/Wrapper'
import Link from 'next/link'
import arrow from '../../public/icons8-arrow-96.png'
import {motion, useInView} from "framer-motion"
import image from '../../albumfoto/WhatsApp Image 2024-04-27 at 18.15.52_ff7d4195.jpg'
import image2 from '../../albumfoto/WhatsApp Image 2024-04-28 at 09.26.34_dc732ba9.jpg'

const page = () => {
  const view1 : any = useRef()
  const view2 : any = useRef()
  const viewOne = useInView(view1, {margin:"-300px", once:true})
  const viewTwo = useInView(view2, {margin:"-300px", once:true})


  return (
    <>
      <div className='relative'>
        <ImageSlider>
          <div>
            <Image className='w-full h-[230px] md:h-[500px] lg:h-[1000px]' src={image} alt="" />
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-black">
              <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0, transition : {duration : 0.7}}} className='text-white mt-[150px] md:mt-[300px] lg:mt-[600px] container mx-auto px-7 md:px-0'>
                <h1 className='md:text-3xl font-bold'>Apa Aja Sih Barang Yang Disewakan</h1>
                <h1 className='text-2xl md:text-5xl font-bold'>Dan Semua Produk Kami</h1>
              </motion.div>
            </div> 
          </div>
        </ImageSlider>
      </div>
      
      <Wrapper>
        
        <div ref={view1} className='flex flex-col md:flex-row justify-between items-center gap-10 mb-8 md:my-28'>
            <motion.div initial={{opacity: 0, y: -100}} animate={viewOne ? {opacity: 1, y: 0, transition : {duration : 0.7}} : {}} className='md:w-1/2'>
              <h1 className='text-sm md:text-xl lg:text-3xl font-bold'>Apa Aja Sih Barang Yang Disewakan</h1>
              <p className='text-xs md:text-sm lg:text-[16px]'>Buat temen - temen nih yang masih bingung sebenarnya barang apa aja sih yang kami sewakan, yang jelas kami menyewakan alat-alat camping seperti tenda,kursi lipat, nesting, hamook, dan alat camping lainnya, selain itu kami juga menyediakan tripod bluetooth dan juga gitar untuk temen-temen yang suka berfoto dan juga bermain musik jadi kalau ingin tau lebih lanjut silahkan klik tombol lihat semua produk di bawah.</p>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={viewOne ? {opacity: 1, y: 0, transition : {duration : 0.7}} : {}} className='md:w-1/2 flex justify-center'>
             <Image className='rounded-xl lg:w-[600px] lg:h-[700px]' src={image2} alt='' />
            </motion.div>
        </div>

        <div ref={view2} className='text-center mx-auto'>
          <motion.h1 initial={{scale:0}} animate={viewTwo ? {scale: 1, transition : {duration : 0.4}} : {}} className='font-bold md:text-xl lg:text-3xl mb-4'>Jika Ingin tau lebih lanjut</motion.h1>
          <motion.div initial={{opacity: 0, y: 100}} animate={viewTwo ? {opacity: 1, y: 0, transition : {duration : 0.7}} : {}}>
            <Link className='mx-auto flex w-[300px] items-center hover:bg-lime-950 duration-300 justify-center gap-2 bg-hijau-kalem text-white px-4 py-2 rounded-lg' href={'/product/allproduct'}>
            <p>Lihat Semua Produk</p>
            <Image className='w-8 h-8 invert animate-left' src={arrow} alt='' /> 
            </Link>
          </motion.div>
        </div>
        
      </Wrapper>
    </>
  )
}

export default page