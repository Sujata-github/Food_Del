import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div
      className='w-full mt-24  text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-4 md:px-14 px-5 py-[6vw] pt-[80px] '
      id='footer'
    >
      <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-10'>
        <div className='flex flex-col items-start gap-5 mb-2 sm:col-span-2'>
          <img src={assets.logo} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            commodi autem debitis numquam sed, in dolor repellat earum ratione
            voluptas quidem omnis maiores, dolore perferendis, eos velit
            repudiandae explicabo aut?
          </p>
          <div className='flex flex-row gap-3 sm:col-span-1'>
            <img className='w-10 ' src={assets.facebook_icon} alt='' />
            <img className='w-10 ' src={assets.twitter_icon} alt='' />
            <img className='w-10 ' src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className='flex flex-col items-start gap-5 mb-2 ml-0 md:ml-10 sm:col-span-1'>
          <h2 className='text-white text-xl font-bold'>COMPANY</h2>
          <ul>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Delivery</li>
            <li className='cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>
        <div className='flex flex-col items-start gap-5 mb-2'>
          <h2 className='text-white text-xl font-bold'>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-[1px] mx-[2px] my-0 bg-gray-600 border-0' />
      <p className='text-sm sm:text-base pt-3'>
        Copyright 2025 © Tomato.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
