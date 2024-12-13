import React from 'react';
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-200 py-12 w-full" id="footer">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between mb-8">
          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row items-center md:space-x-8 mb-6 md:mb-0">
            <FooterLink href="#home" icon={<Icons.House />} label="Home" />
            <FooterLink href="#about" icon={<Icons.InfoCircle />} label="About" />
            <FooterLink href="#service" icon={<Icons.Wrench />} label="Service" />
            <FooterLink href="#project" icon={<Icons.Briefcase />} label="Project" />
          </nav>

          {/* Subscribe Section */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Stay Updated!</h2>
            <form>
              <label htmlFor="subscribeEmail" className="block text-sm font-medium mb-2">Email address</label>
              <div className="flex flex-col md:flex-row">
                <input
                  type="email"
                  id="subscribeEmail"
                  className="flex-grow p-2 mb-2 md:mb-0 md:mr-2 rounded text-black"
                  placeholder="Enter your email..."
                  required
                />
                <button
                  type="submit"
                  className="p-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-sm mt-2">We'll never share your email with anyone else.</p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-wrap justify-between mb-8">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Contact Us!</h2>
            <ul>
              <ContactItem icon={<Icons.Whatsapp />} label="Whatsapp" href="https://wa.me/+2349155140115" />
              <ContactItem icon={<Icons.Envelope />} label="Email" href="mailto:hadizahrodiah@gmail.com" />
              <ContactItem icon={<Icons.Facebook />} label="Facebook" href="https://facebook.com/rodiah.hadizah" />
              <ContactItem icon={<Icons.Telephone />} label="Phone" href="tel:+2349155140115" />
              <ContactItem icon={<Icons.Linkedin />} label="LinkedIn" href="https://bit.ly/4dbrkDV" />
            </ul>
          </div>

          {/* Review Section */}
          <div className="md:w-1/3 hidden md:block">
            <h2 className="text-xl font-semibold mb-4">Give us a review</h2>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="reviewName" className="mb-2">Name</label>
                <input
                  type="text"
                  id="reviewName"
                  className="p-2 rounded text-black"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="reviewEmail" className="mb-2">Email</label>
                <input
                  type="email"
                  id="reviewEmail"
                  className="p-2 rounded text-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="reviewMessage" className="mb-2">Message</label>
                <textarea
                  id="reviewMessage"
                  rows="5"
                  className="p-2 rounded text-black resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Link Component
const FooterLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="flex items-center text-white hover:text-indigo-400 transition duration-300 mb-2 md:mb-0"
    aria-label={label}
  >
    {React.cloneElement(icon, { className: "mr-2", size: 20 })}
    {label}
  </a>
);

// Reusable Contact Item Component
const ContactItem = ({ icon, label, href }) => (
  <li className="flex items-center text-white hover:text-indigo-400 transition duration-300 mb-2">
    <a href={href} className="flex items-center" aria-label={label}>
      {React.cloneElement(icon, { className: "mr-2", size: 20 })}
      {label}
    </a>
  </li>
);

export default Footer;
