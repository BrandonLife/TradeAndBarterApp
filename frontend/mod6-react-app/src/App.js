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
import CreatePost from './pages/CreatePost';
import CreateProduct from "./pages/CreateProduct"

import {Route, Routes} from "react-router-dom"
import ForumPost from './pages/ForumPost';
import EditPost from './pages/EditPost';
import EditProduct from './pages/EditProduct';
import { useState } from 'react';
import {useCookies} from "react-cookie"



function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["x-auth-token"]);
	const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(cookies["x-auth-token"] ? true : false)
  return (
    <>
    <Navigation loggedIn = {loggedIn} removeCookie = {removeCookie} setLoggedIn = {setLoggedIn} setUserId = {setUserId} />
    <div>
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/About" element={<About />}/>
     <Route path="/User/account" element={<Account loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId} />}/>

     <Route path="/Products" element={<Products loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId}/>}/>
     <Route path="/Products/:id" element={<Product loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId}/>}/>
     <Route path="/Products/create/product" element={<CreateProduct loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId} />}/>
     <Route path="/Products/edit/product/:id" element={<EditProduct loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId}/>}/>
     
     <Route path="/Forum" element={<Forum loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId}/>}/>
     <Route path="/ForumPost/:id" element={<ForumPost loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId}/>}/>
     <Route path="/Forum/create/Post" element={<CreatePost loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId} />}/>
     <Route path="/Forum/edit/Post/:id" element={<EditPost loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId} />}/>
     

     <Route path="/Contact" element={<Contact />}/>
    <Route path="/User/login" element={<Login loggedIn={loggedIn} setLoggedIn = {setLoggedIn} setCookie ={setCookie} setUserId = {setUserId} />}/>
     <Route path="/User/register" element={<Register loggedIn ={loggedIn}/>}/>
     <Route path="/User/logout" element={<Logout loggedIn = {loggedIn} cookie={cookies["x-auth-token"]} userId={userId} removeCookie = {removeCookie}/>}/>
     <Route path="*" element={<PageNotFound />}/>
     </Routes>   
    </div>
  <Footer loggedIn = {loggedIn} removeCookie = {removeCookie} setLoggedIn = {setLoggedIn} setUserId = {setUserId} /> 
   
            
    
    </>
    
  
  )
}

export default App;
