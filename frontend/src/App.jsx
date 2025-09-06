import React, { useState } from 'react'

import './App.css';
import { Route ,Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/home';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Loginpopup from './components/LoginPopup/Loginpopup';
import Verify from './pages/verify/Verify';
import MyOrder from './pages/MyOrder/MyOrder';



import Navbar from './components/navbar/navbar';



function App() {
  const[showLogin ,setshowLogin]=useState(false)
  
  const [searchTerm, setSearchTerm] = useState(""); 
  
  
  return (
    <>
    {showLogin? <Loginpopup  setshowLogin={setshowLogin}/>:<></>}
    {/* {search? <Searchitem setsearch={setSearch} foodlist={foodlist} setfoodlist={setfoodlist}  />:<></>} */}
     <div className='App'>
       <Navbar setshowLogin={setshowLogin} setSearchTerm={setSearchTerm} />
       

      
      <Routes>
      <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorder'element={<MyOrder/>}/>
      </Routes>
   
    </div>
    <Footer/>
    </>
   
    
  

 

  )
}

export default App;