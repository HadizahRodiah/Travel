import React from 'react';

const Home = () => {
  return (
    <div className="w-screen bg-transparent text-black relative pt-16 md:pt-20" id="home">
      <div className="flex flex-col py-2 justify-between mt-16 md:mt-20 items-center space-y-6 md:space-y-8">
        <h1 className="font-bold text-4xl md:text-6xl text-slate-900 text-center leading-tight">
          Travels and Tour
        </h1>
        <p className="text-center px-4 md:px-6 text-lg md:text-xl text-black font-medium max-w-2xl md:max-w-4xl">
          Welcome to ALMAS Land page. This application is designed just for learning purposes, offering a serene tour through travel insights.
        </p>

        {/* Buttons for Resort and Contact (visible on mobile) */}
        <div className="flex flex-row space-x-4 mb-10 md:hidden">
          <a
            href="#resort"
            className="font-bold text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full bg-slate-900 text-center"
          >
            Resort
          </a>
          <a
            href="#footer"
            className="font-bold text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full bg-slate-900 text-center"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
