import React from 'react'
import assets from '../../assets/assets'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-[4%] py-2'>
      <img className='w-32' src={assets.logo} alt='logo' />
      <img className='w-10' src={assets.profile_image} alt='profile_icon' />
    </div>
  )
}

export default NavBar
