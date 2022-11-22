import Header from "../components/Header";
import { useSelector } from "react-redux";
import BusinessCard from "../components/BusinessCard";
import Footer from '../components/Footer';
import './BusinessList.css'

const BusinessList = () => {

  const businesses = useSelector( state => state.businesses);

  return (
    <div className="BusinessList-container">
      <Header/>

      <div className="BusinessListCard-container">
        <h1>Businesses/Services in Mapandan</h1>
        {businesses.map(business => {
          return (
            <BusinessCard key={business._id} business={business}/>
          )
        })}
      </div>

      <Footer/>
      
    </div>
  )
};

export default BusinessList;