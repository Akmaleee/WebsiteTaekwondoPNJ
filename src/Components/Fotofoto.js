import React from 'react'
// import { Carousel } from 'flowbite-react'
import Card from './Card'

function Fotofoto() {
  return (
    <div className='bg-[#9DB2BF] p-14 md:p-4 sm:p-3 mx-auto my-14 rounded-2xl shadow-xl text-[#001C30] max-w-[60vw] flex-col justify-center' id='trending'>
        <h1 className=' font-courier text-3xl pb-2 text-center text-[#00425A] font-extrabold tracking-tight' >Program Kerja</h1>

        <div className='flex mx-auto flex-wrap'>
            <Card src="images/proker1.jpg" alt="Rendang" title="PNJ CUP II" description="merupakan kejuaraan taekwondo ke-2 setelah 10 tahun yang akan diadakan kembali oleh Taekwondo PNJ, dan merupakan kejuaraan tingkat provinsi." />
            <Card src="images/proker2.jpg" alt="Rendang" title="REOR 2023" description="merupakan kegiatan reorganisasi tahunan Takewondo PNJ dalam rangka pemilihan dan pelantikan kepengurusan Taekwondo PNJ untuk tahun ajaran baru." />
            <Card src="images/proker3.jpg" alt="Rendang" title="Taekwondo Traveler" description="merupakan kegiatan traveling ke tempat yang sudah disepakati dan biasanya diadakan setelah melaksanakan kejuaraan ataupun saat liburan semester" />

        </div>
        
    </div>
  )
}

export default Fotofoto;

// bg-[#93BFCF]
// #64ccc598
