import React from "react";
import { carsList } from "./CarsList"; // Importing the car data from carsList

const CarRentPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-gray-100 to-white min-h-screen p-6 mt-5">
      {/* Enhanced Heading */}
      <h1 className="text-5xl font-extrabold text-blue-600 mb-12 text-center">
        Rent Your Perfect Ride with Experienced Drivers Today!
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        {carsList.map((car, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start md:space-x-8 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Car Image */}
            <img
              src={car.image} // Using the image from the carsList
              alt={car.name}
              className="w-full md:w-72 h-auto rounded-md"
            />

            {/* Car Details */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                {car.name}
              </h2>
              <p className="text-gray-600 text-lg mb-6">{car.description}</p>

              {/* Customer Benefits */}
              <ul className="text-gray-500 text-sm space-y-2">
                {car.customerBenefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="font-semibold">
                      {benefit.split(":")[0]}:
                    </span>{" "}
                    {benefit.split(":")[1]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRentPage;
