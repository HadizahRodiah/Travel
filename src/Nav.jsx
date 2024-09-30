import React from 'react'
import * as Icons from 'react-bootstrap-icons';

const Nav = () => {
  return (
    <nav className='bg-slate-300 text-black border border-black px-8 md:px-16 lg:px-24 w-screen'>
    <div className='container mt-2 py-2 flex justify-center md:justify-between item-center'>
        <div className='text-2xl font-bolder flex flex-row hidden md:inline md:flex-row'>
        <Icons.Star width={40} height={40} className='text-slate-900'/>
        </div>
        <div className='space-x-6 font-bold'>
        <a href="#home" className='hover:text-green-700'>Home</a>
        <a href="#resort" className='hover:text-green-700'>Resort</a>
        <a href="#review" className='hover:text-green-700'>Review</a>
        <a href="#service" className='hover:text-green-700'>Service</a>
        </div>
        <a href='#footer'className='font-bold text-black hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full bg-gradient-to-r from-slate-900 to-green-300'>Contact</a>
    </div>
</nav>

)
}

export default Nav