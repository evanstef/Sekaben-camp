import React from 'react'

type WrapperProps = {
    title? : string;
    children : React.ReactNode
}

const Wrapper = ({title, children} : WrapperProps) => {
  return (
    <section className='container mx-auto px-7'>
        <h1 className='text-center text-xl md:text-4xl font-bold my-8'>{title}</h1>
        <div>{children}</div>
    </section>
  )
}

export default Wrapper