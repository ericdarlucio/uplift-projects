import {Routes, Route} from 'react-router-dom';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Customer from './pages/Customer';
import CustomerForm from './pages/CustomerForm';
import CustomerOrder from './pages/CustomerOrder';


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/customer' element={<Customer />}></Route>
        <Route path='/customer/form' element={<CustomerForm />}></Route>
        <Route path='/customer/order' element={<CustomerOrder />}></Route>
      </Routes>
    </>
  )
}

export default App