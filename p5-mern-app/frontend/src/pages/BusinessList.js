import Header from "../components/Header";
import { useSelector } from "react-redux";
import BusinessCard from "../components/BusinessCard";


const BusinessList = () => {

  const businesses = useSelector(state => state.businesses);

  return (
    <div>
      <Header/>
      <hr></hr>
      {businesses.map(business => {
        return <BusinessCard key={business._id} businesses={business}/>
      })}
      
    </div>
  )
};

export default BusinessList;