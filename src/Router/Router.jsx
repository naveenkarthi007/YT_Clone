import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Shorts from '../Shorts/Shorts';
function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shorts" element={<Shorts />}/>
    </Routes>
  );
}
export default RoutesApp;
