import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

  
  
  function ExploreMenu({category,setCategory}) {
   
  return (
    <div className='exploreMenu'id='exploreMenu'>
        <h1>Explore our menu</h1>
        <p className='exploreMenuText'>Choose from diverse menu featuring a delactable array od dishes.Our mission is to </p>
        
        <div className='exploreMenuList'>
            {menu_list.map((item ,index)=>{
                return (
                    <div onClick={()=>setCategory(prev =>prev===item.menu_name? "All":item.menu_name)} key={index} className='exploreMenuListItem'>
                        <img  className={category===item.menu_name? "active":""}src={item.menu_image}alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu