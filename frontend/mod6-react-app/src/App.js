import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Account from './pages/Account'
import Products from './pages/Products'
import Product from './pages/Product';
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import Forum from './pages/Forum'
import Logout from './pages/Logout'

import {Route, Routes} from "react-router-dom"
import ForumPost from './pages/ForumPost';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import EditProduct from './pages/EditProduct';
import DeleteProduct from './pages/DeleteProduct';



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
     <Route path="/Products/:id" element={<Product />}/>
     <Route path="/Products/edit/product/:id" element={<EditProduct/>}/>
     <Route path="/Products/delete/product/:id" element={<DeleteProduct />}/>
     
     <Route path="/Forum" element={<Forum />}/>
     <Route path="/Forum/Post/:id" element={<ForumPost />}/>
     <Route path="/Forum/edit/Post/:id" element={<EditPost />}/>
     <Route path="/Forum/delete/Post/:id" element={<DeletePost />}/>

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
