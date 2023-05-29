
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css'
import { Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/login';
import Sepet from './Pages/Sepet';
import İnput from "./components/İnput";
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sepet" element={<Sepet />} />
    </Routes>
    <Outlet></Outlet>
  </BrowserRouter> 
  
    
  );
}

export default App