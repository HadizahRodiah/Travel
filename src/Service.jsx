import React from 'react'

import * as Icons from 'react-bootstrap-icons';


const Service = () => {
  return (
     <div className='w-screen'>
<div className='p-10 bg-slate-700 flex flex-col flex-wrap justify-between py-12 md:flex-row' id='service'>
    <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-col items-center md:space-x-12'>
   <Icons.Screwdriver width={150} height={100} className='round rounded-full text-white  m-10'/> 
 <span className=' font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-green-900 shadow-lg round rounded-full w-80'>Services</span> <span className='text-3xl text-white font-bold'>Our service, Our strength</span>   </div>
   <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-row flex-wrap items-center md:space-x-12'>
 <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-col'>
        <h1 className='text-black font-bold'>Pre-trip planing</h1>
        <ul className='flex flex-col text-slate-900'>
            <li>Itinery creation</li>
            <li>flight booking</li>
            <li>Hotel reservation</li>
            <li>Travel insurance</li>
            <li>Visa application assistance</li>
        </ul> 
    </div>  
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-col'>
    <h1 className='text-black font-bold'>Travel Arrangement</h1>
        <ul className='flex flex-col text-slate-900'>
            <li>Tour packages</li>
            <li>flight booking</li>
            <li>Hotel reservation</li>
            <li>Travel insurance</li>
            <li>Visa application assistance</li>
        </ul>
    </div>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-col'>
    <h1 className='text-black font-bold'>Travel support</h1>
        <ul className='flex flex-col text-slate-900'>
            <li>Itinery creation</li>
            <li>flight booking</li>
            <li>Hotel reservation</li>
            <li>Travel insurance</li>
            <li>Visa application assistance</li>
        </ul>


    </div>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-col'>
    <h1 className='text-black font-bold'>Ontrip Assistance</h1>
        <ul className='flex flex-col text-slate-900'>
            <li>Itinery creation</li>
            <li>flight booking</li>
            <li>Hotel reservation</li>
            <li>Travel insurance</li>
            <li>Visa application assistance</li>
        </ul>
     
     </div>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-col'>
    <h1 className='text-black font-bold'>specialised Services</h1>
        <ul className='flex flex-col text-slate-900'>
            <li>Itinery creation</li>
            <li>flight booking</li>
            <li>Hotel reservation</li>
            <li>Travel insurance</li>
            <li>Visa application assistance</li>
        </ul>
    
    </div>
    </div>
 
     </div>
</div>
  </div>
  )
}

export default Service