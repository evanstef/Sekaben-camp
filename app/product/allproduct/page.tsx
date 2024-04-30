
import AllProductPage from '@/app/_component/AllProductPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
  title : "All Product"
}

const AllProduct = () => {
    
  return (
    <AllProductPage />
  )
}

export default AllProduct