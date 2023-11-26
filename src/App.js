
import Home from './Pages/Home';
import React from 'react';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Error from './Pages/Error';
import About from './Pages/about';
import "/Users/alan/Desktop/kasa/src/style/app/app.css"
import Logement from './Pages/Logement';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
