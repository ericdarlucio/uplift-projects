import Header from "../components/Header";
import { useSelector } from "react-redux";
import BusinessCard from "../components/BusinessCard";


const BusinessList = () => {

  const businesses = useSelector(state => state.businesses);

  return (
    <div>
      <Header/>
      <hr></hr>
      {businesses.sort().map(business => {
        return <BusinessCard key={business.businessName} businesses={business}/>
      })}
      
    </div>
  )
};

export default BusinessList;