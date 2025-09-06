import React, { useContext, useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import {Link, useNavigate}from 'react-router-dom'
import { StoreContext } from '../../context/storeContext'



function Navbar({setshowLogin,  setSearchTerm }) {
  const {food_list}=useContext(StoreContext);
  const[menu ,serMenu]=useState("home");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update searchTerm in parent
  };
  

 
  const {getTotalCartAmount ,token ,setToken}=useContext(StoreContext);
  const navigate=useNavigate();
  const logout=()=>{
localStorage.removeItem("token");
setToken("");
navigate();


  }
  // console.log(prev);
  // const data1= food_list.filter((item) => {
  //   if (prev === "") {
  //     return food_list;
  //    } else if (item.name.toLowerCase().includes(prev.toLowerCase())) {
  //     return item;
  //   }
  //  });
  
  return (
 <navbar className='navbar'>
 <Link to= '/'><img src={assets.logo}alt='' className='logo'/></Link>
 <ul className='navbar-menu'>
  <Link to='/'  onClick={()=>serMenu('home')} className={menu=="home"?"active":""}>home</Link>
  <a href='#exploreMenu' onClick={()=>serMenu('menu')} className={menu=="menu"?"active":""}>menu</a>
  <a href='#footer'  onClick={()=>serMenu('contact us')}className={menu=="contact us"?"active":""}>contact us</a>
  <a href='#app-download'  onClick={()=>serMenu('mobile-app')}className={menu=="mobile-app"?"active":""}>mobile-app</a>
 </ul>
 <div className='navbar-right'>
<div className='searchproduct'>
<input 
          type="text " className='texts'
          placeholder="Type your favorite food "
          onChange={handleSearchChange} // Call handler on input change
        />
</div>
 
 
  <div className='navbar-search-icon'>
   <Link to='/cart'><img src={assets.basket_icon}alt=''/></Link> 
    <div className={getTotalCartAmount()===0?"":"dot"}></div>
  </div>
  {! token?<button onClick={()=>setshowLogin(true)}>sign in</button>:
  <div className='navbar-profile'>
<img src={assets.profile_icon}alt=''/>
<ul className='nav-profile-dropdown'>
  <li onClick={()=>navigate('/myorder')}><img src={assets.bag_icon}alt=''/><p>Order</p></li>
  <hr/>
  <li onClick={logout}><img src={assets.logout_icon}alt=''/><p>Logout</p></li>
</ul>

  </div>}
 
 </div>

 </navbar>
  )
}

export default Navbar;