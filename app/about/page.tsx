
import React from 'react'
import AboutPage from '../_component/AboutPage';
import { Metadata } from 'next';


export const metadata : Metadata = {
    title: "About"
}

const About = () => {
    
  return (
    <>
        <AboutPage />
    </>
        )
    }

export default About;