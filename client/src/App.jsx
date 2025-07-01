import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import RegistrationForm from "./pages/RegistrationForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./pages/LoginForm";
import CustomerProfile from "./pages/CustomerProfile";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/Adminpage";


function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar/>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/ragistration" element={<RegistrationForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/customerprofile" element={<CustomerProfile />} />
          <Route path="/employeedashboard" element={<EmployeeDashboard/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          
        </Routes>

        <Footer/>
        

    </BrowserRouter>
    </>
  )
}

export default App
