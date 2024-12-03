// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./Pages/About/About";
// import Home from "./Pages/Home/Home";
// import Navbar from "./Pages/Navbar/Navbar"; // Import Navbar

// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* Always visible Navbar */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing
import About from "./Pages/About/About"; // About page
import Home from "./Pages/Home/Home"; // Home page
import Navbar from "./Pages/Navbar/Navbar"; // Navbar component
import Contact from "./Pages/Contact/Contact";

import Signin from "./Pages/Login/Signin/Signin";

function App() {
  return (
    <div>
      {/* Navbar stays visible on all pages */}
      <Navbar />
      <Routes>
        {/* Define your Routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signin />} />
        
      </Routes>
    </div>
  );
}

export default App;
