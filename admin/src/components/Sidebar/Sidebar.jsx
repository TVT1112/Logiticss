import React from 'react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'
import { BiPlus ,BiListUl,BiSolidShoppingBag  } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink to='/add' className='sidebar-option'>
            <BiPlus className='sidebar-icon'/>
            <p>Thêm sản phẩm</p>
        </NavLink>
        <NavLink to='/list' className='sidebar-option'>
            <BiListUl className='sidebar-icon'/>
            <p>Danh sách sản phẩm</p>
        </NavLink>
        <NavLink to='/order' className='sidebar-option'>
            <BiSolidShoppingBag className='sidebar-icon'/>
            <p>Các đơn hàng</p>
        </NavLink>
      </div>
    
    </div>
  )
}

export default Sidebar