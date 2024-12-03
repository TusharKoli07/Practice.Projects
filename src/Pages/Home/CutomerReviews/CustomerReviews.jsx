import React, { useState, useEffect } from 'react';
import { CustomerReviewsList } from './CustomerReviewList'; // Import the reviews list
import '/src/Pages/Home/CutomerReviews/ReviewList.css'; // Import your custom CSS file

const ReviewsSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); // State to trigger fade-in

  // Auto-changing effect for all screen sizes (change every 5 seconds for smoother transition)
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Set fadeIn to false before changing
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % CustomerReviewsList.length);
        setFadeIn(true); // Trigger fade-in effect after the review index changes
      }, 500); // Time to wait for fade-out to complete (500ms)
    }, 5000); // Change review every 5 seconds (increase time for smoother transitions)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Function to get reviews for each row
  const getRowReviews = (startIndex) => {
    return CustomerReviewsList.slice(startIndex, startIndex + 4); // Get 4 reviews for each row
  };

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6">Customer Reviews</h2>

      {/* Desktop View - Show 2 horizontal lines of 4 reviews */}
      <div className="hidden md:flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex gap-6">
          {getRowReviews(currentReviewIndex).map((review, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 ${fadeIn ? 'animate-fadeIn' : 'opacity-0'}`}
              style={{ opacity: fadeIn ? 1 : 0 }}
            >
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <span key={starIndex} className="text-xl">★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, starIndex) => (
                    <span key={starIndex} className="text-xl">☆</span>
                  ))}
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-6">
          {getRowReviews(currentReviewIndex + 4).map((review, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 ${fadeIn ? 'animate-fadeIn' : 'opacity-0'}`}
              style={{ opacity: fadeIn ? 1 : 0 }}
            >
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <span key={starIndex} className="text-xl">★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, starIndex) => (
                    <span key={starIndex} className="text-xl">☆</span>
                  ))}
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View - Show one review at a time */}
      <div className="block md:hidden">
        <div
          key={currentReviewIndex}
          className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 ${fadeIn ? 'animate-fadeIn' : 'opacity-0'}`}
          style={{ opacity: fadeIn ? 1 : 0 }}
        >
          <h3 className="text-xl font-semibold mb-2">{CustomerReviewsList[currentReviewIndex].name}</h3>

          {/* Star Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-500">
              {Array.from({ length: CustomerReviewsList[currentReviewIndex].rating }).map((_, starIndex) => (
                <span key={starIndex} className="text-xl">★</span>
              ))}
              {Array.from({ length: 5 - CustomerReviewsList[currentReviewIndex].rating }).map((_, starIndex) => (
                <span key={starIndex} className="text-xl">☆</span>
              ))}
            </div>
          </div>

          {/* Review text */}
          <p className="text-gray-700">{CustomerReviewsList[currentReviewIndex].review}</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
