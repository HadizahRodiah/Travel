import React from 'react';
import * as Icons from 'react-bootstrap-icons';
import Imk from './assets/Imk.jpg';
import Imj from './assets/Imj.jpg';
import Imn from './assets/Imn.jpg';
import Iml from './assets/Iml.jpg';
import Imo from './assets/Imo.jpg';
import Imm from './assets/Imm.jpg';

const Reserve = () => {
  return (
    <div className='w-screen'>
      <div className='py-20 bg-slate-900 flex flex-col flex-wrap md:flex-row' id='resort'>
        <div className='w-full py-10 text-center flex flex-col justify-between md:w-1/2'>
          <span className='font-bold text-5xl text-white'>Resort</span>
          <span className='text-3xl text-white font-bold'>Have a nice holiday!</span>
        </div>
        <div className='w-full md:w-1/2 px-4'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[Iml, Imo, Imk, Imj, Imm, Imn].map((image, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                  <div className='carousel-caption d-none d-md-block'>
                    <cite className='bg-green-300 p-2 rounded-full text-slate-900'>
                      {/* Add more link for captions if necessary */}
                      More info <a href="#" className="text-slate-900 underline">here</a>
                    </cite>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
