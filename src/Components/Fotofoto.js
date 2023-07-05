import React from 'react'
// import { Carousel } from 'flowbite-react'
import Card from './Card'

function Fotofoto() {
  return (
    <div className='bg-[#93BFCF] p-10 md:p-7 sm:p-3 mx-auto my-10 rounded-2xl shadow-xl text-[#001C30] max-w-[75vw] flex-col justify-center' id='trending'>
        <h1 className='text-3xl font-bold pb-5 text-center text-[#00425A]' >Program Kerja</h1>

        <div className='flex mx-auto flex-wrap'>
            <Card src="images/logopnj.png" alt="Rendang" title="Rendang" description="Rendang is a traditional Indonesian dish that is widely recognized and celebrated for its rich and complex flavors." />
            <Card src="images/logopnj.png" alt="Rendang" title="Rendang" description="Rendang is a traditional Indonesian dish that is widely recognized and celebrated for its rich and complex flavors." />
            <Card src="images/logopnj.png" alt="Rendang" title="Rendang" description="Rendang is a traditional Indonesian dish that is widely recognized and celebrated for its rich and complex flavors." />

        </div>
        
    </div>
  )
}

export default Fotofoto;

// #64ccc598