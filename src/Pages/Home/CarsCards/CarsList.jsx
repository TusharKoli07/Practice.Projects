// src/CarsList.js

import TataZestImage from "/assets/Car Png/Tatazest.png";
import SumoDiImage from "/assets/Car Png/sumodi.png";
import ForceTravellerImage from "/assets/Car Png/Travaller.png";
import ToyotaRumionImage from "/assets/Car Png/Rumion.png";

export const carsList = [
  {
    name: "Tata Zest",
    description:
      "A compact sedan perfect for city travel with spacious interiors and efficient fuel economy.",
    image: TataZestImage,
    customerBenefits: [
      "Comfortable seating for up to 5 passengers",
      "High fuel efficiency for city travel",
      "Experienced drivers with in-depth knowledge of local roads",
      "Affordable rates and flexible rental options",
    ],
  },
  {
    name: "Toyota Rumion",
    description:
      "A premium MPV perfect for long journeys, combining luxury, style, and performance.",
    image: ToyotaRumionImage,
    customerBenefits: [
      "Luxurious and comfortable interior",
      "Great for long-distance travel with a smooth drive",
      "Skilled drivers ensuring a stress-free ride",
      "Sleek design with ample cabin and cargo space",
    ],
  },
  {
    name: "Sumo Di",
    description:
      "A rugged SUV ideal for group travel and off-road adventures with ample seating capacity.",
    image: SumoDiImage,
    customerBenefits: [
      "Spacious interior for larger groups",
      "Perfect for off-road and rugged terrains",
      "Experienced drivers who know the best routes",
      "Extra luggage space for your convenience",
    ],
  },
  {
    name: "Force Traveller",
    description:
      "A versatile van designed for large groups, offering comfort and ample luggage space.",
    image: ForceTravellerImage,
    customerBenefits: [
      "Ideal for family trips and group travel",
      "Comfortable and spacious seating for long journeys",
      "Experienced drivers ensure a smooth ride",
      "Plenty of luggage space for all your belongings",
    ],
  },
];
