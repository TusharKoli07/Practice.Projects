import React from "react";
import Header from "../Other/Header/Header";
import Destinations from "./Destinations/Destinations";
import CustomerReviews from "./CutomerReviews/CustomerReviews";
import CarsCards from './CarsCards/CarsCards';
import Footer from "../Other/Footer/Footer";


const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Destinations/>
      <CustomerReviews/>
      <CarsCards/>
      <Footer/>
    </div>
  );
};

export default Home;
