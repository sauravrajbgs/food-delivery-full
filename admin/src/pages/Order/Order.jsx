import React from 'react'
import './Order.css'
import { useState } from 'react'
import axios from 'axios'
import{toast}from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../../../../frontend/src/assets/frontend_assets/assets'
function Order() {
  const [orders ,setOrders]=useState([]);
  const url='http://localhost:4000'
  const fetchOrders=async()=>{
const response= await axios.get(url+"/api/order/list")
if(response.data.sucess){
  setOrders(response.data.data);
  console.log(response.data.data);
}
else{
  toast.error("Error")
}
  } 
const statusHandler=async(event ,orderId)=>{
const response=await  axios.post(url+"/api/order/status",{
  orderId,
  status:event.target.value
});
if(response.data.sucess){
  await fetchOrders();
}
}

  useEffect(()=>{
    fetchOrders();
  },[])
  return (
   
    <div className='add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((order , index)=>(
<div key={index} className='order-item'>
  <img src={assets.parcel_icon}alt=''/>
  <div>
    <p className='order-item-food'>
      {order.items.map((item ,index)=>{
        if(index===order.items.length-1){
return item.name+ " x"+ item.quantity
        }
        else{
          return item.name + " x"+ item.quantity +" ;"
        }
      })}
    </p>
    <div className='order-item-name'>
      {order.address.firstName+" "+ order.address.lastName}
      <p className='order-item-address'>
        {order.address.street+ ";"}</p>
<p>{order.address.city + " "+order.address.state+" "+ order.address.country+" "+order.address.Zipcode}</p>
     

    </div>
    <p className='order-item-phone'>{order.address.phone}</p>
    
  </div>
  <p>Items:{order.items.length}</p>
  <p>₹{order.amount} </p>
  <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
      <option>processing
      </option>
      <option>Out for delivery</option>
      <option>Delivered</option>
    </select>
</div>
        )
          
           
          
      )}
      </div>
    </div>
  )
}

export default Order