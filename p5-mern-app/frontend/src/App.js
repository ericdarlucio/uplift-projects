import { Route, Routes } from 'react-router-dom';
import BusinessList from './pages/BusinessList';
import BusinessProfile from './pages/BusinessProfile';
import Hero from './pages/Hero';
import Login from './pages/Login';
import Register from './pages/Register';

import axios from 'axios';
import { useEffect } from 'react';


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/business-list" element={<BusinessList/>}></Route>
        <Route path="/business-profile" element={<BusinessProfile/>}></Route>
      </Routes>
    </div>
  );
};

export default App;