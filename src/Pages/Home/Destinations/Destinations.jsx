import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { destinations } from "./DestinationList"; // Assuming this file has the data

const Destinations = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedDestination, setSelectedDestination] = useState("");

  // Detect window resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle dropdown selection
  const handleDropdownChange = (event) => {
    const destinationName = event.target.value;
    setSelectedDestination(destinationName);

    const destinationElement = document.getElementById(destinationName);
    if (destinationElement) {
      destinationElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth =
          scrollRef.current.firstChild?.offsetWidth || 0 + 20; // Adding spacing
        scrollRef.current.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });

        // Reset to start if scrolled to the end
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 1
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mouse scroll for desktop
  const handleMouseWheel = (event) => {
    if (isMobile) return;
    event.preventDefault();
    const scrollAmount = event.deltaY > 0 ? 300 : -300;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Handle swipe gestures for mobile
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    const touchStart = e.touches[0].clientX;
    scrollRef.current.touchStart = touchStart;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    const touchMove = e.touches[0].clientX;
    const touchStart = scrollRef.current.touchStart;
    const scrollAmount = touchStart - touchMove;
    scrollRef.current.scrollLeft += scrollAmount;
    scrollRef.current.touchStart = touchMove;
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-6">
        Explore India - Travel Destinations
      </h1>

      {/* Dropdown for destinations */}
      <div className="mb-6">
        <label
          htmlFor="destination-dropdown"
          className="text-gray-800 font-semibold mr-2"
        >
          Select a Destination:
        </label>
        <select
          id="destination-dropdown"
          value={selectedDestination}
          onChange={handleDropdownChange}
          className="px-4 py-2 border rounded-lg bg-white text-gray-800 shadow-md"
        >
          <option value="">--Choose a Destination--</option>
          {destinations.map((destination, index) => (
            <option key={index} value={destination.name.toLowerCase()}>
              {destination.name}
            </option>
          ))}
        </select>
      </div>

      {/* Scrollable container */}
      <div
        className="relative"
        onWheel={handleMouseWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        style={{ overflowX: "auto", cursor: isMobile ? "pointer" : "grab" }}
      >
        {/* Left Scroll Button */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            onClick={() =>
              scrollRef.current.scrollBy({ left: -500, behavior: "smooth" })
            }
            className="text-white bg-indigo-600 p-2 rounded-full shadow-lg hover:bg-indigo-800 focus:outline-none"
          >
            &#8249;
          </button>
        </div>

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-6 scroll-smooth"
          style={{ gap: "20px" }}
        >
          {destinations.map((destination, index) => (
            <div
              id={destination.name.toLowerCase()}
              key={index}
              className="flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden"
              style={{ width: "350px", height: "500px", margin: "0 10px" }}
            >
              <div className="relative h-2/3">
                {destination.media.endsWith(".mp4") ||
                destination.media.endsWith(".webm") ? (
                  <video
                    className="w-full h-full object-cover"
                    src={destination.media}
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={destination.media}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-4 flex flex-col justify-between h-1/3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mt-2">{destination.description}</p>
                <div className="mt-auto bg-gray-200 text-center py-2">
                  <Link
                    to={`/destinations/${destination.name.toLowerCase()}`}
                    className="text-indigo-600 font-bold hover:text-indigo-800"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            onClick={() =>
              scrollRef.current.scrollBy({ left: 500, behavior: "smooth" })
            }
            className="text-white bg-indigo-600 p-2 rounded-full shadow-lg hover:bg-indigo-800 focus:outline-none"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
