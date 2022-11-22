import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import History from "../Pages/About/History";
import Library from "../Pages/Library/Library";
import Footer from '../Pages/Footer/Footer';
import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import Sport from "../Pages/Sports/Sport";
import Performance from "../Pages/Academics/Performance";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/history" element={<History />} />
          <Route path="/library" element={<Library />} />
          <Route path="/sports" element={<Sport />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
