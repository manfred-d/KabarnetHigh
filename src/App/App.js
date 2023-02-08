import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Gallery from "../Pages/About/Gallery";
import History from "../Pages/About/History";
import Library from "../Pages/Library/Library";
import Sport from "../Pages/Sports/Sport";
import Performance from "../Pages/Academics/Performance";
import Contact from "../Pages/Contacts/Contact";

import React from "react";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/history" element={<History />} />
          <Route path="/library" element={<Library />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/sports" element={<Sport />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
