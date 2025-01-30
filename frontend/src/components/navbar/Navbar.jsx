import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { HiShoppingBag } from 'react-icons/hi'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home')
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const [hoverState, setHoverState] = useState(false)

  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    setToken('')
    navigate('/')
  }
  return (
    <div className=' px-1 lg:px-5 py-4 flex justify-between items-center'>
      <Link to='/'>
        <img
          src={assets.logo}
          alt=''
          className='w-[100px] md:w-[120px] lg:w-[150px]'
        />
      </Link>
      <ul className='hidden md:flex list-none lg:gap-5 md:gap-4 text-[#49557e] md:text-base lg:text-[18px]'>
        <Link
          to={'/'}
          onClick={() => setMenu('home')}
          className={`cursor-pointer ${
            menu === 'home'
              ? 'border-b-2 p-b-[2px] border-solid border-[#49557e]'
              : ''
          }`}
        >
          home
        </Link>
        <a
          href='#explore-menu'
          onClick={() => setMenu('menu')}
          className={` cursor-pointer ${
            menu === 'menu'
              ? 'border-b-2 p-b-[2px] border-solid border-[#49557e]'
              : ''
          }`}
        >
          menu
        </a>
        <a
          href='#app-download'
          onClick={() => setMenu('mobile-app')}
          className={` cursor-pointer ${
            menu === 'mobile-app'
              ? 'border-b-2 p-b-[2px] border-solid border-[#49557e]'
              : ''
          }`}
        >
          mobile-app
        </a>
        <a
          href='#footer'
          onClick={() => setMenu('contact-us')}
          className={` cursor-pointer ${
            menu === 'contact-us'
              ? 'border-b-2 p-b-[2px] border-solid border-[#49557e]'
              : ''
          }`}
        >
          contact us
        </a>
      </ul>
      <div className='flex items-center lg:gap-3 md:gap-3 gap-3'>
        <img
          src={assets.search_icon}
          alt='search-icon'
          className='h-5  lg:h-6 text-gray-600'
        />
        <div className='relative '>
          <Link to='/cart'>
            {/* <img
              src={assets.bag_icon}
              alt='cart-icon'
              className='h-6  lg:h-auto text-black bg-black'
            /> */}
            <HiShoppingBag className='h-8 w-8 text-gray-600' />
          </Link>
          <div
            className={`${
              getTotalCartAmount() === 0
                ? ''
                : `absolute min-w-2 min-h-2 bg-tomato rounded-full top-[-2px] right-[-0px]`
            }`}
          ></div>
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className='bg-transparent text-sm md:text-base text-[#49557e] border-[1px] border-solid border-[#ff6347] lg:px-6 px-4 py-2 rounded-full cursor-pointer hover:bg-[#fff4f2] transition-all duration-300'
          >
            Sign In
          </button>
        ) : (
          // <div className='relative'>
          //   <img src={assets.profile_icon} className={` hover:${()=>setHoverState(true)}`}  alt='' />
          //   <ul className={`absolute hidden  right-0 z-10 ${hoverState?'flex flex-col gap-2 bg-[#fff2ef] px-3 py-6 rounded border-[1px] border-solid border-tomato outline-2 outline-white list-none':''}`}>
          //     <li>
          //       <img src={assets.bag_icon} alt='' />
          //       <p>Orders</p>
          //     </li>
          //     <hr />
          //     <li>
          //       <img src={assets.logout_icon} alt='' />
          //       <p>Logout</p>
          //     </li>
          //   </ul>
          // </div>
          <div
            className='relative'
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
          >
            <img
              src={assets.profile_icon}
              alt=''
              className='cursor-pointer h-auto w-6'
            />
            <ul
              className={`absolute right-0 w-32 z-10 ${
                hoverState
                  ? 'flex flex-col gap-2 bg-[#fff2ef] px-3 py-6 rounded border-[1px] border-solid border-tomato outline-2 outline-white list-none'
                  : 'hidden'
              }`}
            >
              <li
                onClick={() => navigate('/myorders')}
                className='flex items-center gap-2 cursor-pointer'
              >
                <img src={assets.bag_icon} alt='' className='w-6' />
                <p className=' hover:text-tomato'>Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className='flex items-center gap-2 cursor-pointer'
              >
                <img src={assets.logout_icon} alt='' className='w-6' />
                <p className=' hover:text-tomato'>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
