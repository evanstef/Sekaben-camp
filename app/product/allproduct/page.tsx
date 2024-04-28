"use client"

import ImageSlider from '@/app/_component/ImageSlider'
import React, { useRef } from 'react'
import bukit from '../../../public/bukit-maras-bangka.jpg'
import Image from 'next/image'
import Wrapper from '@/app/_component/Wrapper'
import { promo } from '@/app/_component/AssetImage'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardProduct from '@/app/_component/CardProduct'
import { useInView, motion } from 'framer-motion'
import { product } from '@/app/_component/ProductImage'
import detail from '../../../albumfoto/WhatsApp Image 2024-04-27 at 18.39.07_853bd94c.jpg'


const AllProduct = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000,
        arrows: true,
    }

    const satu : any = useRef()
    const dua : any = useRef()
    const viewOne = useInView(satu, {margin:"-300px", once:true})
    const viewTwo = useInView(dua, {margin:"-300px", once:true})

  return (
    <Wrapper>
        <h1 className='text-center font-bold md:text-xl lg:text-3xl mt-24 mb-10'>Promo Dan Semua Produk</h1>
        <Slider {...settings}>
            {promo.map((item, index) => (
              <div key={index}>
                <Image className='h-[150px] md:h-[350px] lg:h-[600px]' src={item} alt='' />
              </div>
            ))}
        </Slider>
            <h1 className='text-center font-bold text-3xl my-10'>Detail Harga</h1>
            <div ref={dua}>
              <motion.div initial={{scale:0}} animate={viewTwo ? {scale:1, transition : {duration : 0.3}} : {}}>
                <Image className='w-[500px] rounded-xl mx-auto' src={detail} alt='' />
              </motion.div>
            </div>
            
            <h1 className='text-center font-bold text-3xl my-10'>Semua Produk</h1>

            <div ref={satu} className='grid md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {product.map((item, index) => (
                  <motion.div key={index} initial={index % 2 === 0 ? {opacity: 0, y: 100} : {opacity: 0, y: -100}} animate={viewOne ? {opacity: 1, y: 0, transition : {duration : 0.7, delay : 0.3 * index}} : {}} className="mx-auto lg:w-[400px] bg-base-100 shadow-xl rounded-xl duration-300 ease-in-out">
                    <Image className='rounded-xl' src={item} alt="Shoes" />
                  </motion.div>
                ))}
            </div>
    </Wrapper> 
  )
}

export default AllProduct