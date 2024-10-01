import React from 'react'
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='py-20 bg-slate-900 w-screen' id='footer'>
       <div className='flex flex-row justify-between px-20 font-bold'>
       <li className='flex flex-row text-white mb-2 '> <Icons.House width={25} height={25} className='hidden md:block text-white mr-3'/><a href='#home'>Home</a></li>
            <li className='flex flex-row text-white mb-2  '><Icons.Screwdriver width={25} height={25} className='hidden md:block text-white mr-3'/> <a href='#service'>Service</a></li>
            <li className='flex flex-row text-white mb-2   '><Icons.Table width={25} height={25} className='hidden md:block text-white mr-3'/><a href='#resort'>Resort</a></li>
            <li className='flex flex-row text-white mb-2   '> <Icons.PencilSquare width={25} height={25} className=' hidden md:block text-white mr-3'/><a href='#review'>Review</a></li>
            
  </div>
      <div className='flex flex-col md:flex-row justify-between p-10'>
        <div className='p-10 w-96'>
          <h1 className='text-slate-500 text-2xl mb-2 font-bold'>Contact Us!</h1>
            <li className='flex flex-row text-white mb-2    w-32 hover:bg-black'><a><Icons.Whatsapp width={25} height={25} className='text-white mr-3'/></a>Whatsapp</li>
            <li className='flex flex-row text-white mb-2   w-32 hover:bg-black'><a><Icons.Envelope width={25} height={25} className='text-white mr-3'/></a>Email</li>
            <li className='flex flex-row text-white mb-2   w-32 hover:bg-black'><a><Icons.Facebook width={25} height={25} className='text-white mr-3'/></a>Facebook</li>
            <li className='flex flex-row text-white mb-2   w-32 hover:bg-black'><a><Icons.Telephone width={25} height={25} className='text-white mr-3'/></a>Phone</li>
            <li className='flex flex-row text-white mb-2  w-32  hover:bg-black'><a><Icons.Linkedin width={25} height={25} className='text-white mr-3'/></a>Linkedin</li>
        </div>
    <div className='w-96 p-10'>
    <div className="mb-3 text-white flex flex-col " >
    <h1 className='text-slate-500 text-2xl mb-2 font-bold'>Stay Updated!</h1>
    <label for="exampleInputEmail1" className="form-label text-white font-bold">Email address</label>
    <input
              type="email"
              id="subscribeEmail"
              className='p-2 rounded mb-2 text-slate-900'
              placeholder='Enter your email...'
              required
            />
  </div>
  <button type="submit" className="btn bg-white  border border-white hover:bg-slate-900 text-black hover:text-white font-bold">Subscribe</button>
  <div id="emailHelp" className="form-text text-slate-600">We'll never share your email with anyone else.</div>
        </div>
        <div className='p-10 w-96 flex flex-col hidden  md:inline'>
          
        <div className='hidden md:block'>
          <h2 className='text-2xl font-bold text-slate-500 mb-4'>Give us a review</h2>
          <form className='flex flex-col'>
            <label htmlFor="reviewName" className='flex text-white items-center mb-2'>
              <Icons.Person className='mr-2' />
              Name
            </label>
            <input
              type="text"
              id="reviewName"
              className='p-2 rounded mb-4 text-slate-900'
              placeholder='Enter your name'
              required
            />

            <label htmlFor="reviewEmail" className='flex text-white items-center mb-2'>
              <Icons.Envelope className='mr-2' />
              Email
            </label>
            <input
              type="email"
              id="reviewEmail"
              className='p-2 rounded mb-4 text-slate-900'
              placeholder='Enter your email'
              required
            />

            <label htmlFor="reviewMessage" className='flex text-white items-center mb-2'>
              <Icons.Book className='mr-2' />
              Message
            </label>
            <textarea
              id="reviewMessage"
              rows="5"
              className='p-2 rounded mb-4 text-slate-900 resize-none'
              placeholder='Your message...'
              required
            ></textarea>

            <button
              type="submit"
              className='bg-white text-slate-900 font-bold py-2 rounded hover:bg-slate-200 transition duration-300'
            >
              Submit Review
            </button>
          </form>
        </div>
                     </div>
      </div>
               <p className='item-center flex justify-center text-slate-500'>&copy; All right reserved</p>
    </div>
  )
}

export default Footer