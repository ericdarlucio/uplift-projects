import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h1>This is the admin page.</h1>
      <Link to='/'><span>Go to back login page</span></Link>      
    </div>
  )
}

export default Admin;