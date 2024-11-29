import React from "react";
import SignUpForm from "./components/SignUpForm"
import LoginPage from "./components/LoginPage"
import AdminDashboard from "./components/AdminDashboard"
import Home from'./components/Home'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'

import './index.css'

function App() {
  return (
    // router is the root tag and to navigate we use Link tag, like the ul and li. This is a component
   <Router>  
    <div>
      <nav>
        {/* like href in a tag we give prob */}
        {/* "./ will navigate to the home page" */}
        <Link to="/">User Management</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </nav>
    </div>
    {/* To guve the path where we want to go when we click the nav */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUpForm/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
    </Routes>
   </Router>
  );
}

export default App;
