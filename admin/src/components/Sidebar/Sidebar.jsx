import React from 'react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'
import { BiPlus ,BiListUl,BiSolidShoppingBag,BiBarChartSquare  } from "react-icons/bi";

const Sidebar = ({type}) => {
  return (
    <div className='sidebar'>
      {type==="Admin"?(
        <div className='sidebar-options'>
        <NavLink to='/order' className='sidebar-option'>
            <BiSolidShoppingBag className='sidebar-icon'/>
            <p>Các đơn hàng</p>
        </NavLink>
        <NavLink to='/plan' className='sidebar-option'>
            <BiBarChartSquare className='sidebar-icon'/>
            <p>Trang lên kế hoạch</p>
        </NavLink>
        <NavLink to='/chatpage' className='sidebar-option'>
            <BiBarChartSquare className='sidebar-icon'/>
            <p>Trang nhắn tin</p>
        </NavLink>
        </div>
      ):<></>
      }
      {type==="storehouser"?(
        (<div className='sidebar-options'>
        <NavLink to='/add' className='sidebar-option'>
            <BiPlus className='sidebar-icon'/>
            <p>Thêm sản phẩm</p>
        </NavLink>
        <NavLink to='/list' className='sidebar-option'>
            <BiListUl className='sidebar-icon'/>
            <p>Danh sách sản phẩm</p>
        </NavLink>
        </div>) 
      ):<></>}
      
    
    </div>
  )
}

export default Sidebar