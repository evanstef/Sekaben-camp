"use client"

import Wrapper from "@/app/_component/Wrapper";

import Image from "next/image";
import {image} from './_component/AssetImage'
import pantai from "../public/9__Senja_menjadi_saat_yang_tepat_untuk_berkunjung_ke_Pantai_Pasir_Padi_karena_dapat_menyaksikan_panorama_matahari_terbenam_di_pantai_inie-1.jpg"
import bukit1 from "../public/bukit-maras-bangka.jpg"
import bukit2 from "../public/20210605-air-terjun-bukit-maras.jpg"
import ImageSlider from "./_component/ImageSlider";
import Link from "next/link";
import Typewriter from "typewriter-effect"
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import image1 from '../albumfoto/WhatsApp Image 2024-04-27 at 18.15.50_de08b866.jpg'
import image2 from '../albumfoto/WhatsApp Image 2024-04-27 at 18.16.10_c8fd0d18.jpg'
import image3 from '../albumfoto/WhatsApp Image 2024-04-27 at 18.16.09_2db576dd.jpg'
import image4 from '../albumfoto/WhatsApp Image 2024-04-28 at 09.26.35_4e04bf78.jpg'
import Head from "next/head";

export default function Home() {

  const viewSatu : any = useRef()
  const viewDua : any = useRef()
  const viewOne = useInView(viewSatu, {margin:"-500px", once:true})
  const viewTwo = useInView(viewDua, {margin:"-600px", once:true})

  

  return (
    <>
      <div className="relative">
      <ImageSlider>
        {image.map((image : any, index) => (
          <div key={index}> 
            <Image className="w-full h-[230px] md:h-[500px] lg:h-[900px]" src={image} alt="" />
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-black">
              <div className="mt-[90px] md:mt-[250px] lg:mt-[600px] mx-auto px-6 md:px-0 md:pr-48 container text-white">
              <div className="font-bold text-lg md:text-3xl lg:text-5xl">
                <Typewriter
                options={{
                  strings: ["Suka Travelling Dan Camping ?","Cari Alat Camping ?","Sekaben Camp Aja"],
                  autoStart: true,
                  loop: true,
                }}
                />
              </div>
              
              <motion.p initial={{opacity: 0, y: 50}} animate={ {opacity: 1, y: 0, transition : {duration : 0.7}}} className="text-[10px] lg:text-xl mb-2 md:mb-6">Kami menyediakan jasa penyewaan alat camping lengkap dan terpercaya berada di pusat kota PangkalPinang sehingga bagi kalian yang menyukai camping bisa menyewa alat camping di sekaben camp<i className="font-bold">"Kualitas Elit Harga Irit"</i></motion.p>
              <motion.div initial={{opacity: 0, y: -50}} animate={ {opacity: 1, y: 0, transition : {duration : 0.7}}}>
              <Link className="bg-green-600 text-[10px] w-[28%] md:w-[35%] lg:w-[16.5%] md:text-xl px-2 flex items-center gap-1 md:gap-3 md:px-5 py-1 rounded-lg lg:text-2xl hover:bg-green-800 duration-300 ease-in-out" href={"https://wa.me/6281368757969?text=Halo%20min,%20Saya%20Mau%20Sewa%20Alat%20Camping"} target="_blank">
                <p>Contact Us</p>
                <svg className="w-5 h-5 md:w-[35px] md:h-[35px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="white" viewBox="0 0 32 32">
                <path fill-rule="evenodd" d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"></path>
                </svg>
              </Link>
              </motion.div>
              </div>
            </div>
            
            </div>
        ))}
      </ImageSlider>
      </div>
      
      <Wrapper>
        {/* Home Page */}
        <div ref={viewSatu} className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10 md:my-28">
          <motion.div initial={{opacity: 0, x: -100}} animate={viewOne ? {opacity: 1, x: 0,transition:{duration : 0.5}} : {}} className="w-full md:w-1/2">
            <h1 className="text-sm md:text-xl lg:text-3xl font-bold mb-4">Apa sih itu Sekaben Camp ?</h1>
            <p className="text-xs md:text-sm lg:text-[16px]">Sekaben Camp merupakan Bisnis / Badan Usaha yang melayani Jasa Penyewaan Peralatan Camping yang merupakan binaan Kampus Institut Sains dan Bisnis (ISB) Atma Luhur yang lahir pada bulan Agustus 2023, yang dikelola oleh Mahasiswa Wirausaha dari Institut Sains dan Bisnis Atma Luhur. Sekaben Camp mendapat support pendanaan dari Kemendikbud RI pada Program P2MW Tahun 2023.</p>
          </motion.div>
          <motion.div initial={{opacity: 0, x: 100}} animate={viewOne ? {opacity: 1, x: 0,transition:{duration : 0.5}} : {}} className="w-full md:w-1/2">
            <Image className="w-full lg:h-[800px] rounded-xl" src={image1} alt=""/>
          </motion.div>
        </div>

        <motion.div ref={viewDua} className="flex flex-col md:flex-row justify-between items-center gap-10 mb-28">
          <motion.div initial={{opacity: 0, y: -100}} animate={viewTwo ? {opacity: 1, y: 0,transition:{duration : 0.7}} : {}} className="w-full md:w-1/2">
            <div className="flex items-center gap-2">
              <motion.div initial={{scale : 0}} animate={viewTwo ? {scale : 1,transition:{duration : 0.3, delay: 0.5}} : {}} className="w-[40%]">
                <Image className="h-[130px] md:h-[130px] lg:h-[220px] rounded-xl" src={image2} alt=""/>
              </motion.div>
              <motion.div initial={{scale : 0}} animate={viewTwo ? {scale : 1,transition:{duration : 0.3, delay: 0.8}} : {}} className="w-[60%]">
                <Image className="h-[110px] md:h-[130px] lg:h-[220px] rounded-xl" src={image3} alt=""/>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <Image className="w-[200px] md:w-[250px] lg:w-[400px] rounded-xl mt-3" src={image4} alt=""/>
            </div>
          </motion.div>
          <motion.div initial={{opacity: 0, y: 100}} animate={viewTwo ? {opacity: 1, y: 0,transition:{duration : 0.7}} : {}} className="w-full md:w-1/2">
            <h1 className="text-sm font-bold md:text-xl lg:text-3xl mb-4">Alasan Kenapa Mendirikan Sekaben Camp ? </h1>
            <p className="text-xs md:text-sm lg:text-[16px]">Beberapa orang mungkin memiliki akses ke alat-alat camping yang tidak mereka gunakan secara teratur, seperti tenda, sleeping bag, dan peralatan memasak. Melihat potensi dari sumber daya yang dimiliki, kami memutuskan untuk memanfaatkannya dengan mendirikan usaha penyewaan alat camping. Dan juga lokasi Bangka Belitung yang terkenal dengan wisata alamnya seperti bukit,air terjun, pantai, dan lain sebagainya tempat-tempat yang cocok untuk berkemah seringkali menarik minat seseorang untuk melakukan kegiatan outdoor. Namun, tidak semua orang memiliki akses atau mampu membeli alat-alat camping secara pribadi. Dengan menyediakan jasa penyewaan alat camping, kami dapat memenuhi kebutuhan pasar yang ada di sekitar kami.</p>
          </motion.div>
        </motion.div>
      </Wrapper>
    </>
  );
}
