import React from 'react'
import assets from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  console.log('location', location.pathname)
  return (
    <div className='w-[18%] min-h-screen border-[1.5px] border-solid border-[#a9a9a9] border-t-0'>
      <div className='pt-12 pl-5 flex flex-col gap-5'>
        <NavLink
          to={'/add'}
          className={`flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 px-[10px] py-2 rounded-tl-md rounded-tr-0 rounded-br-0 rounded-bl-md cursor-pointer ${
            location.pathname === '/add' ? 'bg-[#fff0ed] border-tomato' : ''
          }  `}
        >
          <img src={assets.add_icon} alt='' />
          <p className='hidden md:flex whitespace-nowrap'>Add Items</p>
        </NavLink>
        <NavLink
          to={'/list'}
          className={`flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 px-[10px] py-2 rounded-tl-md rounded-tr-0 rounded-br-0 rounded-bl-md cursor-pointer ${
            location.pathname === '/list' ? 'bg-[#fff0ed] border-tomato' : ''
          }  `}
        >
          <img src={assets.order_icon} alt='' />
          <p className='hidden md:flex whitespace-nowrap'>List Items</p>
        </NavLink>
        <NavLink
          to={'/orders'}
          className={`flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 px-[10px] py-2 rounded-tl-md rounded-tr-0 rounded-br-0 rounded-bl-md cursor-pointer ${
            location.pathname === '/orders' ? 'bg-[#fff0ed] border-tomato' : ''
          }  `}
        >
          <img src={assets.order_icon} alt='' />
          <p className='hidden md:flex whitespace-nowrap'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
