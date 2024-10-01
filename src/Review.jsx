import React from 'react';
import Imp from './assets/Imp.jpg';
import Imq from './assets/Imq.jpg';
import Imt from './assets/Imt.jpg';
import Ims from './assets/Ims.jpg';

import * as Icons from 'react-bootstrap-icons';

const Review = () => {
  return (
    <div className='w-screen'>
      <div className='p-10 bg-white flex flex-col flex-wrap justify-between py-12 md:flex-row' id='review'>
        <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-col items-center md:space-x-12'>
          <Icons.PencilSquare width={100} height={100} className='text-slate-900 transition-transform duration-300 hover:scale-110' />
          <span className='font-bold text-5xl text-black w-80'>Customers</span>
          <span className='text-3xl text-slate-600 font-bold'>Reviews</span>
        </div>
        <div className='w-400 py-10 text-center flex flex-col justify-between md:flex-row flex-wrap items-center md:space-x-12'>
          {[
            {
              name: 'Yusuf Hadizzay',
              email: 'hadizzy@gmail.com',
              review: 'Affordable and relaxing holiday...',
              stars: 4,
              img: null,
            },
            {
              name: 'Yusuf Hadizzay',
              email: 'LATIIizzy@gmail.com',
              review: 'Thanks so much for making traveling easier...',
              stars: 5,
              img: Imq,
            },
            {
              name: 'Mr Dorcas Bull',
              email: 'dorcasbull@gmail.com',
              review: 'Thanks so much for making traveling easier...',
              stars: 4,
              img: null,
            },
            {
              name: 'Mr John Week',
              email: 'johnweek@gmail.com',
              review: 'Thanks so much for making holiday relaxing...',
              stars: 4,
              img: Imp,
            },
            {
              name: 'Mr Cat Fish',
              email: 'catfish@gmail.com',
              review: 'Very affordable and serene environment...',
              stars: 3,
              img: Imt,
            },
            {
              name: 'Mr Ahmad Gidado',
              email: 'Ahmadgiddy@gmail.com',
              review: 'I am giving a 400 percent recommendations...',
              stars: 4,
              img: null,
            },
            {
              name: 'Miss Anderson Tessi',
              email: 'tessyizzy@gmail.com',
              review: 'So many places to visit! Thanks for making...',
              stars: 4,
              img: Ims,
            },
          ].map(({ name, email, review, stars, img }, index) => (
            <div key={index} className='flex flex-col shadow-lg  bg-slate-400 p-5 w-96 m-2 transition-transform duration-300 hover:bg-white hover:shadow-xl hover:scale-105'>
              <div className='flex flex-row items-center'>
                {img ? (
                  <img src={img} width={40} height={35} className='rounded-full shadow-lg' />
                ) : (
                  <Icons.Person width={40} height={40} />
                )}
                <h1 className='m-3 text-black font-bold'>{name}</h1>
              </div>
              <cite>{email}</cite>
              <p className='text-black font-bold'>{review}</p>
              <h5 className='italic font-400'>more</h5>
              <div className='flex flex-row item-center justify-center'>
                {Array.from({ length: 5 }, (_, i) => (
                  <Icons.StarFill key={i} width={25} height={15} className={i < stars ? 'text-yellow-500' : 'text-gray-400'} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
