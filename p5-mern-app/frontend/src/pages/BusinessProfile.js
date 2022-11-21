import { useLocation } from "react-router";
import Header from "../components/Header";

const BusinessProfile = () => {

  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <Header/>
      
    </div>
  )
};

export default BusinessProfile;