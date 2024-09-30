import React from 'react'
import Imp from './assets/Imp.jpg'
import Imq from './assets/Imq.jpg'
import Imt from './assets/Imt.jpg'
import Ims from './assets/Ims.jpg'

import * as Icons from 'react-bootstrap-icons';


const Review = () => {
  return (
     <div className='w-screen'>
<div className='p-10 bg-slate-700 flex flex-col flex-wrap justify-between py-12 md:flex-row' id='review'>
    <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-col items-center md:space-x-12'>
   <Icons.PencilSquare width={150} height={100} className='round rounded-full text-white  m-10'/> 
 <span className=' font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-green-900 shadow-lg round rounded-full w-80'>Customers</span> <span className='text-3xl text-white font-bold'>Reviews</span>   </div>
   <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-row flex-wrap items-center md:space-x-12'>
 <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <Icons.Person  width={40} height={40}/><p>Yusuf Hadizzay</p>
    </div>
    <cite>hadizzy@gmail.com</cite>
    <p className='text-black font-bold'>Affordable and relaxing holiday...</p>
    <h5 className='italic font-100'>more</h5>
    <div className='flex flex-row item-center justify-center'>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.Star width={25} height={15}/>
    </div>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <img src={Imq}  width={40} height={35} className='round rounded-full shadow-lg'/> <h1 className='m-3 text-black font-bold'>Yusuf Hadizzay</h1>
    </div>
    <cite>LATIIizzy@gmail.com</cite>
    <p className='text-black font-bold'>Thanks so much for making traveling easier...</p>
    <h5 className='italic font-100'>more</h5>
    <div className='flex flex-row item-center justify-center'>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     </div>
    
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <Icons.Person  width={50} height={50} /> <h1 className='m-3 text-black font-bold'>Mr Dorcas Bull</h1>
    </div>
    <cite>dorcasbull@gmail.com</cite>
    <p className='text-black font-bold'>Thanks so much for making traveling easier...</p>
    <h5 className='italic font-100'>more</h5>
    <div className='flex flex-row item-center justify-center'>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.Star width={25} height={15}/>
    </div>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <img src={Imp}  width={40} height={35} className='round rounded-full shadow-lg'/> <h1 className='m-3 text-black font-bold'>Mr John Week</h1>
    </div>
    <cite>johnweek@gmail.com</cite>
    <p className='text-black font-bold'>Thanks so much for making holiday relaxing...</p>
    <h5 className='italic font-100'>more</h5>
    <div className='flex flex-row item-center justify-center'>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.Star width={25} height={15}/>
    </div>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <img src={Imt}  width={40} height={35} className='round rounded-full shadow-lg'/> <h1 className='m-3 text-black font-bold'>Mr Cat Fish</h1>
    </div>
    <cite>catfish@gmail.com</cite>
    <p className='text-black font-bold'>very affordable and serene environment...</p>
    <h5 className='italic font-100'>more</h5>
    <div className='flex flex-row item-center justify-center'>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.Star width={25} height={15}/>
     <Icons.Star width={25} height={15}/>
    </div>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <Icons.Person  width={40} height={40} /><p>Mr Ahmad gidado</p>
    </div>
    <cite>Ahmadgiddy@gmail.com</cite>
    <p className='text-black font-bold'>i am giving a 100 percent recommendations...</p>
    <h5 className='italic font-100'>more</h5>
    <div className='flex flex-row item-center justify-center'>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.Star width={25} height={15}/>
    </div>
    </div>
 
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <img src={Ims}  width={40} height={35} className='round rounded-full shadow-lg'/> <h1 className='m-3 text-black font-bold'>Miss Anderson Tessi</h1>
    </div>
    <cite>tessyizzy@gmail.com</cite>
    <p className='text-black font-bold'>so many place to visit Thanks for making...</p>
    <h5 className='italic font-100'>more</h5>
    <div className='flex flex-row item-center justify-center'>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.StarFill width={25} height={15}/>
     <Icons.Star width={25} height={15}/>
    </div>
    </div>
 

 </div>


 </div>
  

    </div>
  )
}

export default Review