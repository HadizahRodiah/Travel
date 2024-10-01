import React from 'react';
const Home = () => {
  return (
    <div className="w-screen bg-transparent text-black relative  pt-20" id="home">
      <div className="flex flex-col py-2 justify-between mt-20 items-center space-y-2">
        <h1 className="font-bold text-5xl text-slate-900 shadow-lg text-center">
          Travels and Tour
        </h1>
        <p className="text-center p-5 text-black font-bold max-w-4xl">
          Welcome to ALMAS Land page, nothing serious about this application just for learning purposes.
        </p>

        {/* Buttons for Resort and Contact (visible on mobile) */}
        <div className="flex flex-row mb-20 md:hidden">
          <a
            href="#resort"
            className="font-bold text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full bg-slate-900 text-center"
          >
            Resort
          </a>
          <a
            href="#footer"
            className="font-bold text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full bg-slate-900 text-center"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
