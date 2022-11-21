import Header from "../components/Header";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BusinessCard from "../components/BusinessCard";


const BusinessList = () => {

  const businesses = useSelector(state => state.businesses);

  return (
    <div>
      <Header/>
      {businesses.map(business => {
        return <BusinessCard key={business._id} array={business}/>
      })}
      
    </div>
  )
};

export default BusinessList;