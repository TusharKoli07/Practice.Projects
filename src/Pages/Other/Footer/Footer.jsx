import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-5 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* About the Website */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2 w-full sm:w-auto sm:mx-4">
          {/* Logo (in front of the text) */}
          <img 
            src="/src/assets/Car Png/sumodi.png" 
            alt="Getmecar Logo" 
            className="h-16 sm:h-20 object-contain" 
          />
          
          {/* Heading */}
          <h3 className="text-red-600 font-bold text-2xl px-2 text-center sm:text-left">
            Getmecar.com <br />
            <div className="text-sm">Travel, Heal, Thrive</div>
          </h3>
        </div>

        {/* Popular Destinations */}
        <div>
          <h2 className="text-md font-semibold text-white mb-2 text-center sm:text-left">
            Popular Destinations
          </h2>
          <ul className="space-y-1 text-sm text-center sm:text-left">
            <li><a href="/destinations/mysuru" className="hover:text-blue-400 transition">Mysuru Palace</a></li>
            <li><a href="/destinations/hampi" className="hover:text-blue-400 transition">Hampi</a></li>
            <li><a href="/destinations/jaipur" className="hover:text-blue-400 transition">Jaipur</a></li>
            <li><a href="/destinations/kerala" className="hover:text-blue-400 transition">Kerala Backwaters</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-md font-semibold text-white mb-2 text-center sm:text-left">
            Get In Touch
          </h2>
          <ul className="space-y-1 text-sm text-center sm:text-left">
            <li>Email: info@Getmecar.com</li>
            <li>Phone: +91-9876543210</li>
            <li>Address:  P723+MH7, Kolhapur, Maharashtra, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-md font-semibold text-white mb-2 text-center sm:text-left">
            Follow Us
          </h2>
          <div className="flex justify-center sm:justify-start space-x-3 text-sm">
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Instagram</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">YouTube</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 text-center border-t border-gray-700 pt-3">
        <p className="text-xs">© 2024 TravelRentals. All rights reserved.</p>
        <p className="text-xs">
          Designed by Tushar Koli | 
          <a 
            href="https://www.linkedin.com/in/tusharkoli07" 
            className="text-blue-400 hover:underline ml-1" 
            target="_blank" 
            rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
