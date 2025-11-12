import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />  {/* default route */}
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default RoutesApp;
