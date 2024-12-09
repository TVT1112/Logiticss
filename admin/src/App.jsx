import React from 'react'
import { Navbar, Sidebar } from './components'
import {Routes,Route} from 'react-router-dom'
import { Add, List, Order } from './pages'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>

        <Routes>
            <Route path="/add" element={<Add url={url}/>}/>
            <Route path="/list" element={<List url={url}/>}/>
            <Route path="/order" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App