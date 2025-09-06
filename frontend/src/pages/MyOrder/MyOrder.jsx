import React, { useContext, useEffect, useState } from 'react'
import './MyOrder.css'
import { StoreContext } from '../../context/storeContext'
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';
function MyOrder() {
    const{url ,token}=useContext(StoreContext);
    const[data, setData]=useState([]);
const fetchOrders=async()=>{
const response=await axios.post(url+"/api/order/userorder",{},{headers:{token}});
setData(response.data.data);
console.log(response.data.data)
}
useEffect(()=>{
    if( token){
        fetchOrders();
    }
},[token])


//    return (
//      <div className='my-orders'>
//          <h2>My Orders</h2>
//          <div className='container'>
//         {data.map((order,index)=>{
//  return(
//    <div key={index} className='my-orders-order'>
//  <img src={assets.parcel_icon}alt=''/>
//  <p>{order.items.map((item ,index)=>{
//     if(index===order.items.length-1){
//         return item.name+"x"+item.quantity+"";
//      }
//      else{
//         return item.name+ "X"+item.quantity+ ",";
//     }
//  })
    
//  }</p>
//  <p>₹{order.amount}.00</p>
// <p>Items:{order.items.length}</p>
//  <p><span></span><b>{order.status}</b></p>
//  <button onClick={fetchOrders}>Track orders</button>
//    </div>
    
//    )
//     })}
//  </div>
//     </div>
//   )
// return (
//     <div className='my-orders'>
//       <h2>My Orders</h2>
//       <div className='container'>
//         {data.map((order, index) => {
//           return (
//             <div key={index} className='my-orders-order'>
//               <img src={assets.parcel_icon} alt='' />
//               <p>
//                 {order.items.map((item, itemIndex) => {
//                   if (itemIndex === order.items.length - 1) {
//                     return `${item.name} x ${item.quantity}`;
//                   } else {
//                     return `${item.name} x ${item.quantity}, `;
//                   }
//                 })}
//               </p>
//               <p>₹{order.amount}.00</p>
//               <p>Items: {order.items.length}</p>
//               <p>
//                 <span></span>
//                 <b>{order.status}</b>
//               </p>
//               <button onClick={fetchOrders}>Track orders</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((order, index) => (
            <div key={index} className='my-orders-order'>
              <img src={assets.parcel_icon} alt='' />
              <p>
                {Array.isArray(order.items) && order.items.length > 0 ? (
                  order.items.map((item, itemIndex) => {
                    return (
                      <span key={itemIndex}>
                        {item.name} x {item.quantity}
                      </span>
                    );
                  })
                ) : (
                  <span>No items found</span>
                )}
              </p>
              <p>₹{order.amount}.00</p>
              <p>Items: {order.items ? order.items.length : 0}</p>
              <p>
                <span></span>
                <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track orders</button>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
  
}

export default MyOrder