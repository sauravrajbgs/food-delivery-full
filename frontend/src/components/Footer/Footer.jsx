import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {

    const navigate=useNavigate();
  return (
    <div className='footer'id='footer'>
<div className='footer-content'>
    <div className='footer-content-left'>
<img src={assets.logo}alt=''/>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aperiam modi unde placeat voluptate velit repudiandae eos perspiciatis cumque voluptates deserunt eaque magnam itaque reprehenderit, quis nam animi amet neque!</p>
<div className='footer-social-icon'>
<a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
  <img src={assets.facebook_icon} alt='Facebook' />
</a>
<a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer">
<img src={assets.twitter_icon}alt=''/>
</a>
   
<a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
    <img src={assets.linkedin_icon}alt=''/>
    </a>
</div>
    </div>
    <div className='footer-content-right'>
<h2>COMPANY</h2>
<ul>
<Link to='/'><li>Home</li></Link>    
 <Link to ='/about'><li>About Us</li></Link>   
 <Link to ='/myorder'> <li>Delivery</li></Link>  
    <li>Privecy Policy</li>
</ul>
    </div>
    <div className='footer-content-center'>
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-212-456-7890</li>
    <li>contact@ecofood.com</li>
</ul>
    </div>
</div>
<hr/>
<p className='footer-copyright'>copyright 2024 #$Ecofood.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer