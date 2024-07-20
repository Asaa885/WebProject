// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import ApplyNow from './pages/ApplyNow';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import MainLayout from './Layout/MainLayout';
import Students from './pages/Students';
import Combination from './pages/Combination';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      
      <Routes>

      <Route path='/' element={<Login />} />
      <Route path='register' element={<Register/>} />
      <Route path='forgot' element={<ForgotPassword />} />



       <Route path='Main' element={<MainLayout/>}>
        <Route path='home' element={<Home />} />
        <Route path='apply' element={<ApplyNow />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='student' element={<Students />} />
        <Route path='combination' element={<Combination />} />
        <Route path='profile' element={<Profile />} />
        
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
