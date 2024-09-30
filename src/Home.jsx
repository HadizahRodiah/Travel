import React from 'react'
import * as Icons from 'react-bootstrap-icons';
 

const Home = () => {

  return (
           <div className=' w-screen bg-gradient-to-r from-slate-700 to-slate-200 text-black bg-slate-700' id='home'>
             <div className='flex flex-col py-14 justify-between md:flex-col items-center md:space-x-12'>
                <h1 className='justify-center font-bold text-4xl text-white shadow-lg bg-slate-700  w-60 round rounded-lg'>Diamond Star</h1>
           <p className='text-justify p-10 text-white'>Welcome to ALMAS Land page, nothing serious about this application just for learning purpose
            all images were downloaded from pinterest. 
            </p>       
            <Icons.Diamond width={80} height={80} className='text-white'/>
              <div className='bg-green-600 text-center mt-20'>
                 <div classNameName='bg-white text-black px-8 md:px-16 lg:px-24  flex flex-col justify-space md:flex-row'>
                   
                 <div className="navbar bg-slate-200 hidden md:block">
                     <div className="container-fluid">
                 <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success hover:bg-slate-900" type="submit">Search</button>
               </form>
               </div>

                </div>       
                </div>
                </div>
 </div>
 </div>
 
  )
}

export default Home