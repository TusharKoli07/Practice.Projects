import React, { useState, useRef, useEffect } from "react";
import "./About.css"; // If you want to add any additional styling
import videoList from "./AboutVideos"; // Import the video list

const AboutPage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // State to control the fade effect
  const videoRef = useRef(null); // Ref to control the video element

  // Effect to reload the video when the index changes
  useEffect(() => {
    if (videoRef.current) {
      setIsFading(true); // Start fading out
      setTimeout(() => {
        videoRef.current.load(); // Force the video to reload
        videoRef.current.play(); // Start playing the new video
        setIsFading(false); // Fade in after video change
      }, 500); // Wait for fade-out transition before switching the video
    }
  }, [currentVideoIndex]); // This effect runs when the current video index changes

  // Scroll to top when the page is loaded or navigated to
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []); // Empty dependency array ensures it runs only once when the component is mounted

  const handleVideoEnd = () => {
    // Move to the next video once the current video ends
    setCurrentVideoIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < videoList.length ? nextIndex : 0; // Loop back to first video after the last one
    });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-gray-100 to-white min-h-screen">
      <div className="pt-[2rem]">
      <h1 className="text-5xl font-extrabold text-blue-600 text-center mb-16">
          About Us
        </h1>

        {/* About Text Section */}
        <div className="border-2 border-black rounded-lg p-8 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to our world of reliable, safe, and exceptional travel
            experiences. With over 10 years of experience in the tourism and
            transport industry, we have built a strong foundation rooted in
            trust, safety, and customer satisfaction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We started with a single car and now proudly boast a robust fleet,
            having grown into a trusted community of travelers and connections
            across the country. Our partnerships span coast to coast, ensuring
            that no matter where your journey takes you, we have you covered.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With years of expertise, our team of drivers is highly trained,
            ensuring that each trip is smooth, safe, and enjoyable. Every
            vehicle in our fleet is well-maintained, regularly inspected, and
            ready for your adventure, providing the peace of mind you deserve.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our community is our strength. We’re more than just a service
            provider – we’re here to support you, every step of the way.
            Whether you need help planning your next trip or seeking travel
            advice, our extensive network of professionals is always ready to
            assist.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Join us and experience the future of travel, where safety,
            comfort, and a wealth of knowledge await. We're not just about
            cars; we’re about creating lasting memories and unforgettable
            experiences.
          </p>
        </div>
      </div>
      {/* Fixed Video Section */}
      <div className="relative w-full h-[500px] top-0 left-0 z-10">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
          autoPlay
          loop={false}
          muted
          onEnded={handleVideoEnd} // Trigger when the video ends
          playsInline
        >
          <source src={videoList[currentVideoIndex].src} type="video/mp4" />
          {/* Add fallback text */}
          Your browser does not support the video tag.
        </video>
        {/* Fade effect overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 "> {/* Added padding-top to avoid content hiding behind video */}
       

        {/* Mission and Vision Section */}
        <div className="text-center border-2 border-black rounded-lg p-8 mb-16 ">
          <h2 className="text-4xl font-semibold text-blue-700 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            To offer reliable, efficient, and comfortable travel solutions that
            exceed customer expectations, ensuring safety, quality service, and
            an unforgettable experience every time.
          </p>

          <h2 className="text-4xl font-semibold text-blue-700 mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To be the leading travel and transport company in the country,
            setting the standard for quality, customer service, and innovation
            in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
