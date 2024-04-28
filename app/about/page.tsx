"use client"

import React, { useRef } from 'react'
import ImageSlider from '../_component/ImageSlider'
import Image from 'next/image'
import bukit1 from '../../public/bukit-maras-bangka.jpg'
import Wrapper from '../_component/Wrapper'
import camp from '../../public/icons8-tent-in-the-forest-64.png'
import diskon from '../../public/icons8-discount-96.png'
import service from '../../public/icons8-service-96.png'
import Slider from 'react-slick'
import { useInView, motion } from 'framer-motion'
import image from '../../albumfoto/WhatsApp Image 2024-04-27 at 18.15.52_c9a8d371.jpg'
import image2 from '../../albumfoto/WhatsApp Image 2024-04-27 at 18.15.51_fce05683.jpg'
import image3 from '../../albumfoto/WhatsApp Image 2024-04-27 at 18.15.56_0061802e.jpg'
import faqih from '../../fotoorang/WhatsApp Image 2024-04-28 at 18.21.03_68a846f6.jpg'
import teman1 from '../../fotoorang/WhatsApp Image 2024-04-28 at 18.36.55_ef77e8fd.jpg'
import teman2 from '../../fotoorang/WhatsApp Image 2024-04-28 at 18.38.22_db04fd58.jpg'


const About = () => {
    const satu : any = useRef()
    const dua : any = useRef()
    const tiga : any = useRef()
    const empat : any = useRef()
    const viewOne = useInView(satu, {margin:"-300px", once:true})
    const viewTwo = useInView(dua, {margin:"-300px", once:true})
    const viewThree = useInView(tiga, {margin:"-300px", once:true})
    const viewFour = useInView(empat, {margin:"-300px", once:true})
    

  return (
    <>
        <div className='relative'>
        <ImageSlider>
            <div>
              <Image className='w-full h-[230px] md:h-[500px] lg:h-[900px]' src={image} alt='' /> 
              <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-black">
                <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0, transition : {duration : 0.7}}} className='text-white mt-[150px] md:mt-[300px] lg:mt-[600px] container mx-auto px-7'>
                   <h1 className='md:text-3xl lg:text-5xl font-bold'>Mau Tau Banyak Tentang Kami ?</h1> 
                   <p className='bg-hijau-kalem w-32 md:w-52 text-center py-2 rounded-xl md:text-xl font-bold'>Scroll Down</p>
                </motion.div>
              </div>
            </div>
        </ImageSlider>
        </div>
        
        <Wrapper>
          <div ref={satu} className='mb-8 md:my-28 flex flex-col md:flex-row justify-between items-center gap-10'>
                <motion.div initial={{opacity: 0, x: -100}} animate={viewOne ? {opacity: 1, x: 0, transition : {duration : 0.7}} : {}} className='md:w-1/2'>
                    <h1 className='text-sm md:text-2xl lg:text-3xl font-bold'>Awal Cerita Terbentuknya Sekaben Camp</h1>
                    <p className='text-xs md:text-sm lg:text-[16px]'>Jadi,awalnya kami bertiga adalah mahasiswa Institut Sains Dan Bisnis (ISB) yang suka nongkrong suka kumpul-kumpul dan memiliki hobi yang sama yaitu camping. Nah,berhubung kami menyukai camping dan kami pun berfikir bagaimana kalo hobi ini bisa menghasilkan uang buat kami.sehingga singkat cerita ada Dosen kami bernama Bapak Tri Sugihartono yang menawarkan untuk mengikuti program dari Kemendikbud RI yaitu P2MW. P2MW merupakan singkatan dari &quot;Program Pembelajaran Mitra Wirausaha&quot; yang merupakan program yang dicanangkan oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia (Kemendikbudristek). Program ini bertujuan untuk mengembangkan keterampilan kewirausahaan dan membantu mahasiswa dalam mempersiapkan diri untuk menjadi wirausaha di masa depan.Sehingga kami pun sangat antusias mengikuti program tersebut dengan cara mengajukan proposal tentang bisnis/wirausaha yang akan dijalankan. Singkat Cerita, setelah menunggu beberapa waktu saat itu kami baru selesai sholat kemudian dapat kabar dari Bapak Tri bahwa proposal kami diterima oleh Kemendikbud RI dan kami pun mendapatkan pendanaan sebesar 15 juta rupiah dari Kemendikbud. baru lah ini awal karir bisnis kami dan berdirilah Sekaben Camp ini.</p>  
                </motion.div>
                <motion.div initial={{opacity: 0, x: 100}} animate={viewOne ? {opacity: 1, x: 0, transition : {duration : 0.7}} : {}} className='md:w-1/2'>
                    <Image className='rounded-lg' src={image2} alt='' />
                </motion.div>
           </div>  
           
           <div ref={dua}>
                <motion.h1 initial={{opacity: 0, y: -100}} animate={viewTwo ? {opacity: 1, y: 0, transition : {duration : 0.7}} : {}} className='text-sm text-center font-bold md:text-xl lg:text-3xl mb-4'>Apa Saja Yang Kami Tawarkan ?</motion.h1>
                <div className='grid md:grid-cols-3 gap-10'>
                    <motion.div initial={{scale: 0}} animate={viewTwo ? {scale: 1, transition : {duration:0.3,delay: 0.3}} : {}} className='bg-cream-susu-mentah shadow-2xl h-[100px] flex flex-col justify-center items-center rounded-lg'>
                        <Image src={camp} alt='' width={50} height={50} />
                        <p className='md:text-lg lg:text-xl'>Alat Camping</p>
                    </motion.div>
                    <motion.div initial={{scale: 0}} animate={viewTwo ? {scale: 1, transition : {duration:0.3,delay: 0.6}} : {}} className='bg-cream-susu-mentah shadow-2xl h-[100px] flex flex-col justify-center items-center rounded-lg'>
                        <Image src={diskon} alt='' width={50} height={50} />
                        <p className='md:text-lg lg:text-xl'>Promo Menarik</p>
                    </motion.div>
                    <motion.div initial={{scale: 0}} animate={viewTwo ? {scale: 1, transition : {duration:0.3,delay: 0.9}} : {}} className='bg-cream-susu-mentah shadow-2xl h-[100px] flex flex-col justify-center items-center rounded-lg'>
                        <Image src={service} alt='' width={50} height={50} />
                        <p className='md:text-lg lg:text-xl'>Pelayanan Yang Cepat</p>
                    </motion.div>
                </div>
           </div>

           <div ref={tiga} className='flex flex-col md:flex-row items-center justify-between my-28 gap-10'>
            <motion.div initial={{opacity: 0, y: -100}} animate={viewThree ? {opacity: 1, y: 0, transition : {duration : 0.7}} : {}} className='md:w-1/2'>
                <Image className='rounded-lg lg:h-[700px] lg:w-[600px]' src={image3} alt='' />
            </motion.div>
                    
            <motion.div initial={{opacity: 0, y: 100}} animate={viewThree ? {opacity: 1, y: 0, transition : {duration : 0.7}} : {}} className='md:w-1/2'>
                <h1 className='text-sm font-bold md:text-xl lg:text-3xl mb-4'>Tujuan Kedepan Sekaben Camp</h1> 
                <p className="text-xs md:text-sm lg:text-[16px]">Mungkin untuk tujuan kedepannya buat sekaben camp ini kami berencana membuka toko atau store penjualan alat camping, serta bisa membuka banyak cabang terutama di seluruh Indonesia</p>  
            </motion.div>
           </div>

           <div ref={empat}>
                <motion.h1 initial={{opacity: 0, y: 100}} animate={viewFour ? {opacity: 1, y: 0, transition : {duration : 0.7}} : {}} className='text-sm text-center font-bold md:text-xl lg:text-3xl mb-4'>Tim Sekaben Camp</motion.h1>
                <div className='flex flex-col md:flex-row justify-around items-center gap-10'>
                    <motion.div initial={{scale:0}} animate={viewFour ? {scale: 1, transition : {duration:0.3,delay: 0.3}} : {}}>
                       <Image className='rounded-full w-[200px] h-[200px] shadow-xl' src={faqih} alt='' /> 
                       <h1 className='font-bold md:text-lg text-center'>Ahmad Faqih Alkayes</h1>
                    </motion.div>
                    <motion.div initial={{scale:0}} animate={viewFour ? {scale: 1, transition : {duration:0.3,delay: 0.9}} : {}}>
                      <Image className='rounded-full w-[250px] h-[250px] shadow-xl' src={teman1} alt='' /> 
                      <h1 className='font-bold md:text-xl text-center'>Irsad Dwi Sandro</h1> 
                    </motion.div>
                    <motion.div initial={{scale:0}} animate={viewFour ? {scale: 1, transition : {duration:0.3,delay: 0.6}} : {}}>
                       <Image className='rounded-full w-[200px] h-[200px] shadow-xl' src={teman2} alt='' /> 
                       <h1 className='font-bold md:text-xl text-center'>Royhan Indallah</h1>
                    </motion.div>
                </div>
           </div>
        </Wrapper>
    </>
        )
    }

export default About;