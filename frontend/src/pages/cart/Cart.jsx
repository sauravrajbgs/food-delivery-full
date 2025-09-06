import React, { useContext } from 'react'
import './Cart.css';
import { StoreContext } from '../../context/storeContext';
import { Navigate, useNavigate } from 'react-router-dom';
function Cart() {
  const{cartItem ,food_list, removeFromCart,getTotalCartAmount ,url}=useContext(StoreContext);
  const nevigate=useNavigate();
  return (
    <div className='cart' id='cart'>
      <div className='cart-item'>
        <div className='cart-item-title'>
        <p>Item name</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
       <br/>
       <hr/>

       {food_list.map((item ,index)=>{
        <div> key={item.name}</div>
if(cartItem[item._id]>0){
  return(
    
<>
<div className='cart-item-title cart-item-item'>
    <img src={url+"/images/"+ item.image}alt=''/>
    <p>{item.name}</p>
    <p>₹{item.price}</p>
    <p>{cartItem[item._id]}</p>
    <p>{item.price*cartItem[item._id]}</p>
    <p  onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
    </div>
    <hr/></>
  )

}
       })}
    
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <p>Delivery charges</p>
            <p>{getTotalCartAmount()===0?0:40}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <b>Total</b>
            <b>{ getTotalCartAmount()===0?0: getTotalCartAmount()+40}</b>
          </div>
          </div>
          <button onClick={()=>nevigate('/order')} >PROCEED TO CHECKOUT</button>
         
        </div>
      
        <div className='promo-code'>
          <div>
            <p>If you have a promo-code ,Enter here</p>
            <div className='cart-promo-code-inputs'>
              <input type='text'placeholder='enter promocode here'/>
              <button>submit</button>
            </div>
          </div>

</div>
      </div>
    
    </div>
    
  
  )
}

export default Cart;