import React from 'react';

const Service = () => {
  return (
    <div className='w-screen py-20 md:py-20 relative'>
      <div className='p-10 bg-white flex flex-col flex-wrap justify-between py-12 md:flex-row' id='service'>
        <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-col items-center md:space-x-12'>
          <span className='font-bold text-5xl text-black'>Services</span>
          <span className='text-3xl text-black font-bold'>Our service, Our strength</span>
        </div>
        <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-row flex-wrap items-center md:space-x-12'>
          {[
            {
              title: 'Pre-trip Planning',
              items: [
                'Itinerary creation',
                'Flight booking',
                'Hotel reservation',
                'Travel insurance',
                'Visa application assistance',
              ],
            },
            {
              title: 'Travel Arrangement',
              items: [
                'Tour packages',
                'Flight booking',
                'Hotel reservation',
                'Travel insurance',
                'Visa application assistance',
              ],
            },
            {
              title: 'Travel Support',
              items: [
                'Itinerary creation',
                'Flight booking',
                'Hotel reservation',
                'Travel insurance',
                'Visa application assistance',
              ],
            },
            {
              title: 'On-trip Assistance',
              items: [
                'Itinerary creation',
                'Flight booking',
                'Hotel reservation',
                'Travel insurance',
                'Visa application assistance',
              ],
            },
            {
              title: 'Specialised Services',
              items: [
                'Itinerary creation',
                'Flight booking',
                'Hotel reservation',
                'Travel insurance',
                'Visa application assistance',
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className='flex flex-col shadow-lg rounded-lg bg-slate-400 p-5 w-96 m-2 transition-transform duration-300 hover:bg-white hover:shadow-xl hover:scale-105'
            >
              <div className='flex flex-col'>
                <h1 className='text-black text-2xl font-bold'>{service.title}</h1>
                <ul className='flex flex-col text-slate-900'>
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
