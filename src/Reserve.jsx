import React from 'react'
import * as Icons from 'react-bootstrap-icons';
import Imk from './assets/Imk.jpg'
import Imj from './assets/Imj.jpg'
import Imn from './assets/Imn.jpg'
import Iml from './assets/Iml.jpg'
import Imo from './assets/Imo.jpg'
import Imm from './assets/Imm.jpg'
 


const Reserve = () => {
  return (
     <div className='w-screen'>
<div className='py-20  bg-slate-700 flex flex-col flex-wrap md:flex-row' id='resort'>
    <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-col items-center md:space-x-12'>
   <Icons.Table width={150} height={100} className='round rounded-full text-white shadow-lg m-10'/>
   <span className=' font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-green-900 shadow-lg round rounded-full w-80'>Resort</span> <span className='text-3xl text-white font-bold'>Have a nice holiday!</span>   
 </div>
              <div className='w-100 d-inline px-15'>
              <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner px-20 ">
    <div className="carousel-item active">
      <img src={Iml} className="d-block w-100 p-20" alt="..."/>
       <cite className='bg-green-300 w-96 item-center  text-slate-900 hidden round rounded-full'>Visiting Banff and jasper in winter?<a>more</a></cite> 
    </div>
    <div class="carousel-item">
      <img src={Imo} className="d-block w-100 p-20" alt="..."/>
      <cite className='bg-green-300 w-96 item-center  text-slate-900  hidden round rounded-full'>Top 7 ski-in-ski-out Accommodations in sugar Mountain,North Carolina<a>More</a></cite> 
    </div>
    <div class="carousel-item">
      <img src={Imk} className="d-block w-100 p-20" alt="..."/>
      <cite className='bg-green-300 w-96 item-center  text-slate-900 hidden round rounded-full'>Amazing over Water bungalows,Hotel suites <a>More</a></cite> 
    </div>
    <div class="carousel-item">
      <img src={Imj} className="d-block w-100 p-20" alt="..."/>
      <cite className='bg-green-300 w-96 item-center  text-slate-900 hidden round rounded-full'>Switzerland in winter, a non skiers guide ,the ginger wanderlust <a>more</a> </cite> 
    </div>
    <div class="carousel-item">
      <img src={Imm} className="d-block w-100 p-20" alt="..."/>
      <cite className='bg-green-300 w-96 item-center  text-slate-900 hidden round rounded-full'> Switzerland in winter, nice mountain view <a>more</a> </cite> 
    </div>
    <div class="carousel-item">
      <img src={Imn} className="d-block w-100 p-20" alt="..."/>
      <cite className='bg-green-300 w-96 item-center  text-slate-900 hidden round rounded-full'>The wintry enchantment of an Alpine village <a>more</a></cite> 

    </div>
    <div class="carousel-item">
      <img src={Imo} className="d-block w-100 p-20" alt="..."/>
      <cite className='bg-green-300 w-96 item-center  text-slate-900 hidden round rounded-full'> Top 7 ski-in-ski-out Accommodations in sugar Mountain,North Carolina<a>More</a></cite> 

    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    <span className="visually-hidden">Previous</span>
    <span className="visually-hidden">Previous</span>
    <span className="visually-hidden">Previous</span>
    <span className="visually-hidden">Previous</span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    <span className="visually-hidden">Next</span>
    <span className="visually-hidden">Next</span>
    <span className="visually-hidden">Next</span>
    <span className="visually-hidden">Next</span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
              </div>             
    </div>
    </div>
  )
}

export default Reserve