import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import BusinessList from './pages/BusinessList';
import BusinessProfile from './pages/BusinessProfile';
import Hero from './pages/Hero';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/businesses').then(result => {
      dispatch({type: 'FETCH', payload: {data: result.data}});
    });
  }, []);

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