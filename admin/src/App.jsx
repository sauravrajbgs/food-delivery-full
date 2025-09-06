import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import './index.css'
import {Routes ,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
       <Routes>
        <Route path='/Add'element={<Add/>}/>
        <Route path='/list'element={<List/>}/>
        <Route path='/order'element={<Order/>}/>
       </Routes>
      </div>
    </div>
  )
}

export default App