import React, { useState, useEffect, useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { ContactVideos } from "./ContactVideos"; // Adjust the path

const ContactPage = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideoReady, setNextVideoReady] = useState(false);
  const videoRef = useRef(null); // Ref to the video element

  useEffect(() => {
    // Function to handle video switching with preloading
    const videoInterval = setInterval(() => {
      // Preload next video
      setNextVideoReady(true);

      // Switch video after a slight delay to allow preloading
      setTimeout(() => {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % ContactVideos.length);
      }, 500); // You can adjust the timeout to fit the transition duration
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(videoInterval); // Clean up the interval on component unmount
  }, []);

  const handleVideoLoadedData = () => {
    // Trigger the video to start playing after it has loaded
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="bg-gray-100 mb-10 animate-fade-in">
      {/* Hero Section with Video */}
      <div className="relative h-[250px] sm:h-[350px] bg-cover bg-center bg-fixed">
        <div
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            !nextVideoReady ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Current Video */}
          <video
            ref={videoRef} // Attach ref to the video element
            className="w-full h-full object-cover"
            src={ContactVideos[currentVideo].src}
            type="video/mp4"
            muted
            loop
            preload="auto" // Preload video for smoother transitions
            onLoadedData={handleVideoLoadedData} // Ensure video is loaded before playback
          />
        </div>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center animate-fade-in">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto py-6 px-6 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
          Get in Touch with Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fade-in">
            <FaPhone className="text-4xl text-indigo-600 mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Phone</h3>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fade-in">
            <FaEnvelope className="text-4xl text-indigo-600 mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Email</h3>
              <p className="text-gray-600">info@Getmecar.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fade-in">
            <FaMapMarkerAlt className="text-4xl text-indigo-600 mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Address</h3>
              <p className="text-gray-600">
                P723+MH7, Kolhapur, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fade-in">
            <FaClock className="text-4xl text-indigo-600 mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">Working Hours</h3>
              <p className="text-gray-600">Mon-Sat: 9 AM - 8 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex justify-center animate-fade-in">
        <div className="h-[400px] w-[80%] border-4 border-black rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.508643054574!2d74.210123015385!3d16.705090188468193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fb8a00e94d97%3A0x6fb6e3bc4e3f15a5!2sP723%2BMH7%2C%20Kolhapur%2C%20Maharashtra%20416012%2C%20India!5e0!3m2!1sen!2sin!4v1697645557994!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map - Kolhapur, Maharashtra"
            aria-label="Map location of P723+MH7, Kolhapur, Maharashtra, India"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
