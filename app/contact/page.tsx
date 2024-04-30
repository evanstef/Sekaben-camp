
import React from 'react'
import ContactPage from '../_component/ContactPage'
import { Metadata } from 'next'


export const metadata : Metadata = {
    title : "Contact",
}



const Contact = () => {
    
  return (
    <>
        <ContactPage />
    </>
  )
}

export default Contact