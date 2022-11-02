import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Account from './pages/Account'
import Products from './pages/Products'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import Forum from './pages/Forum'
import Logout from './pages/Logout'

import {Route, Routes} from "react-router-dom"



function App() {
  return (
    <>
    <Navigation />
    <div>
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/About" element={<About />}/>
     <Route path="/User/account" element={<Account />}/>
     <Route path="/Products" element={<Products />}/>
     <Route path="/Forum" element={<Forum />}/>
     <Route path="/Contact" element={<Contact />}/>
     <Route path="*" element={<PageNotFound />}/>
     <Route path="User/login" element={<Login />}/>
     <Route path="/User/register" element={<Register/>}/>
     <Route path="User/logout" element={<Logout/>}/>
     </Routes>   
    </div>
  <Footer /> 
   
            
    
    </>
    
  
  )
}

export default App;
