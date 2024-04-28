"use client"

import bukit from '../../public/bukit-maras-bangka.jpg'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
type CardProductProps = {
  view : any
  image : any
  i : number
  viewOne : any
}

const CardProduct = ({view, image, i, viewOne} : CardProductProps) => {

  return (
    <div ref={view}>
      <motion.div initial={i % 2 === 0 ? {opacity: 0, y: 100} : {opacity: 0, y: -100}} animate={viewOne ? {opacity: 1, x: 0, transition : {duration : 0.5, delay : 0.3 * i}} : {}} className="card card-compact mx-auto w-[400px] bg-base-100 shadow-xl hover:scale-105 duration-300 ease-in-out">
        <figure><Image src={image || bukit} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Tenda</h2>
            <ul>
              <li>If a dog chews shoes whose shoes does he choose?</li>
              <li>If a dog chews shoes whose shoes does he choose?</li>
              <li>If a dog chews shoes whose shoes does he choose?</li>
              <li>If a dog chews shoes whose shoes does he choose?</li>
              <li>If a dog chews shoes whose shoes does he choose?</li>
            </ul>
        </div>
      </motion.div>
    </div>
    
  )
}

export default CardProduct;