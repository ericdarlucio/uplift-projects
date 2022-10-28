import { Link } from "react-router-dom";

import './Admin.css'

const Admin = () => {
  return (
    <div className="Admin-container">
      <h1>This is the admin page.</h1>
      <Link to='/'><span>Go to back login page</span></Link>      
    </div>
  )
}

export default Admin;