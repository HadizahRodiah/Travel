import React from 'react';
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className="py-20 bg-slate-900 max-w-full overflow-x-hidden" id="footer">
      <div className="flex flex-wrap justify-between px-6 md:px-20 font-bold">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row items-center text-white mb-4 md:mb-0 md:mr-8">
            <Icons.House width={25} height={25} className="hidden md:block text-white mr-3" />
            <a href="#home" className="hover:underline">Home</a>
          </div>
          <div className="flex flex-row items-center text-white mb-4 md:mb-0 md:mr-8">
            <Icons.Screwdriver width={25} height={25} className="hidden md:block text-white mr-3" />
            <a href="#service" className="hover:underline">Service</a>
          </div>
          <div className="flex flex-row items-center text-white mb-4 md:mb-0 md:mr-8">
            <Icons.Table width={25} height={25} className="hidden md:block text-white mr-3" />
            <a href="#resort" className="hover:underline">Resort</a>
          </div>
          <div className="flex flex-row items-center text-white mb-4 md:mb-0">
            <Icons.PencilSquare width={25} height={25} className="hidden md:block text-white mr-3" />
            <a href="#review" className="hover:underline">Review</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 py-10">
        <div className="flex flex-col mb-10 md:mb-0 md:w-1/3">
          <h1 className="text-slate-500 text-2xl mb-4 font-bold">Contact Us!</h1>
          <div className="flex flex-col space-y-2">
            <a className="flex items-center text-white hover:text-green-500 transition-colors duration-300">
              <Icons.Whatsapp width={25} height={25} className="mr-3" /> Whatsapp
            </a>
            <a className="flex items-center text-white hover:text-green-500 transition-colors duration-300">
              <Icons.Envelope width={25} height={25} className="mr-3" /> Email
            </a>
            <a className="flex items-center text-white hover:text-green-500 transition-colors duration-300">
              <Icons.Facebook width={25} height={25} className="mr-3" /> Facebook
            </a>
            <a className="flex items-center text-white hover:text-green-500 transition-colors duration-300">
              <Icons.Telephone width={25} height={25} className="mr-3" /> Phone
            </a>
            <a className="flex items-center text-white hover:text-green-500 transition-colors duration-300">
              <Icons.Linkedin width={25} height={25} className="mr-3" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col mb-10 md:mb-0 md:w-1/3">
          <h1 className="text-slate-500 text-2xl mb-4 font-bold">Stay Updated!</h1>
          <form>
            <label htmlFor="subscribeEmail" className="form-label text-white font-bold mb-2">Email address</label>
            <input
              type="email"
              id="subscribeEmail"
              className="w-full p-2 rounded mb-4 text-slate-900"
              placeholder="Enter your email..."
              required
            />
            <button type="submit" className="w-full py-2 bg-white border border-white text-black rounded hover:bg-slate-700 hover:text-white font-bold transition duration-300">
              Subscribe
            </button>
            <div className="form-text text-slate-600 mt-2">We'll never share your email with anyone else.</div>
          </form>
        </div>

        <div className="flex flex-col md:w-1/3 hidden md:flex">
          <h2 className="text-2xl font-bold text-slate-500 mb-4">Give us a review</h2>
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="reviewName" className="text-white mb-2">Name</label>
              <input
                type="text"
                id="reviewName"
                className="p-2 rounded text-slate-900"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="reviewEmail" className="text-white mb-2">Email</label>
              <input
                type="email"
                id="reviewEmail"
                className="p-2 rounded text-slate-900"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="reviewMessage" className="text-white mb-2">Message</label>
              <textarea
                id="reviewMessage"
                rows="5"
                className="p-2 rounded text-slate-900 resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 bg-white text-slate-900 font-bold rounded hover:bg-slate-700 hover:text-white transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>

      <p className="text-center text-slate-500">&copy; All rights reserved</p>
    </div>
  );
};

export default Footer;
