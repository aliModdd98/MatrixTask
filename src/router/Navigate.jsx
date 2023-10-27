import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import About from '../components/About/About';
import Servises from '../components/Servises/Servises';
import Contact from '../components/Contact/Contact';
function Navigate() {
  return (
  
          <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/servises" element={<Servises />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    );
 

}

export default Navigate

  