

import React from 'react'
import ProductPage from '../_component/ProductPage'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title: "Product"
}


const page = () => {
  return (
    <>
      <ProductPage />
    </>
  )
}

export default page

