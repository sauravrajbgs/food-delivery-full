import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/storeContext';
import axios from 'axios';

const Verify=() =>{
    const  [searchParams,setSearchParms]=useSearchParams();
    const sucess=searchParams.get("sucess")
    const orderId=searchParams.get("orderId")
    const{url}=useContext(StoreContext)
    const navigate=useNavigate();


    const verifyPayment=async ()=>{
        const response=await axios.post(url+"/api/order/verify",{sucess, orderId});
        if(response.data.sucess){
            navigate('/myorder');
        }
        else{
            navigate(' /')
        }
    }
useEffect(()=>{
verifyPayment();
},[verifyPayment])
   
  return (
  
    <div className='verify'>
        <div className='spinner'>

        </div>
    </div>
  )
}

export default Verify