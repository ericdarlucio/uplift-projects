import Header from "../components/Header";
import { useSelector } from "react-redux";
import BusinessCard from "../components/BusinessCard";
import Footer from '../components/Footer';

const BusinessList = () => {

  const businesses = useSelector( state => state.businesses);

  return (
    <div>
      <Header/>

      {businesses.map(business => {
        return (
          <BusinessCard key={business._id} business={business}/>
        )
      })}

      <Footer/>
      
    </div>
  )
};

export default BusinessList;