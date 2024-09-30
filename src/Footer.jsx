import React from 'react'
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='py-20 bg-slate-900 w-screen' id='footer'>
       <div className='flex flex-row justify-between px-20 font-bold'>
        <a href="#home" className=' text-white'><Icons.House width={25} height={25} className=' ml-3 text-white'/>Home</a>
        <a href="#resort" className='text-white'><Icons.Table width={25} height={25} className=' ml-3  text-white'/>Resort</a>
        <a href="#service" className='text-white'><Icons.Screwdriver width={25} height={25} className='text-white'/>Service</a>
        <a href="#review" className='text-white'><Icons.PencilSquare width={25} height={25} className=' ml-3  text-white'/>Review</a>
        </div>
      <div className='flex flex-col md:flex-row justify-between p-10'>
        <div className='p-10 w-96'>
          <h1 className='text-white text-2xl mb-2 font-bold'>Contact Us!</h1>
            <li className='flex flex-row text-white mb-2    w-32 hover:bg-black'><a><Icons.Whatsapp width={25} height={25} className='text-white mr-3'/></a>Whatsapp</li>
            <li className='flex flex-row text-white mb-2   w-32 hover:bg-black'><a><Icons.Envelope width={25} height={25} className='text-white mr-3'/></a>Email</li>
            <li className='flex flex-row text-white mb-2   w-32 hover:bg-black'><a><Icons.Facebook width={25} height={25} className='text-white mr-3'/></a>Facebook</li>
            <li className='flex flex-row text-white mb-2   w-32 hover:bg-black'><a><Icons.Telephone width={25} height={25} className='text-white mr-3'/></a>Phone</li>
            <li className='flex flex-row text-white mb-2  w-32  hover:bg-black'><a><Icons.Linkedin width={25} height={25} className='text-white mr-3'/></a>Linkedin</li>
        </div>
        <div className='subscribe w-96 p-10'>
  <div className="mb-3 text-white " >
    <h1 className='text-white text-2xl mb-2 font-bold'>Stay Updated!</h1>
    <label for="exampleInputEmail1" className="form-label text-white font-bold">Email address</label>
    <input type="email" className="form-control border border-white placeholder-text-slate-900 italic" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='@gmail,yahoo,mail...etc'/>
    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
  </div>
  <button type="submit" className="btn btn-white bg-slate-900 border border-white text-white font-bold">Subscribe</button>
        </div>
        <div className='p-10 w-96 flex flex-col hidden  md:inline'>
          <h1 className='text-white text-2xl mb-2 font-bold'>Give us a review</h1>
          <form action="" className='flex flex-col'>
            <div className='flex flex-col text-white:'>
            <label htmlFor="name" className='flex flex-row text-white mr-5'><Icons.Person width={25} height={25} className='text-white mr-2' /> Name </label>
            <input type="text" htmlFor="name" className='bg-white  placeholder-text-slate-900 italic w-60 rounded-lg mb-2' placeholder='Enter your name'  />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="Email" className='flex flex-row text-white mr-6'><Icons.Envelope width={25} height={25} className='text-white mr-2' />Email</label>
            <input type="text" htmlFor="Email" placeholder='Enter your Email'  className='bg-white  placeholder-text-slate-900 italic w-60 rounded-lg mb-2' />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="message" className='flex flex-row text-white mr-1' > <Icons.Book width={25} height={25} className='text-white mr-2' />Message</label>
            <textarea rows={5} type="text" htmlFor="message"  placeholder='your message.....' className='bg-white font-bold placeholder-text-slate-900 italic w-60 rounded-lg mb-2' />
            </div>
          </form>
        </div>
      </div>
               <cite className='item-center flex justify-center text-white'>All right reserved@2024</cite>
    </div>
  )
}

export default Footer