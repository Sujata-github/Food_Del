import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)
  // console.log('id', id)
  // console.log('cartItems', cartItems)
  return (
    <div
      // key={id}
      data-aos='fade-in'
      data-aos-duration='500'
      className='w-full m-auto rounded-md shadow-md transition duration-300 '
    >
      <div className='relative'>
        <img
          className='w-full rounded-tl-2xl rounded-tr-2xl'
          src={url + '/images/' + image}
          alt=''
        />
        {!cartItems?.[id] ? (
          <img
            src={assets.add_icon_white}
            className='w-[35px] absolute bottom-3 right-4 cursor-pointer rounded-full '
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className='absolute bottom-3 right-4 flex items-center gap-3 rounded-full bg-white p-1'>
            <img
              className='w-7'
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=''
            />
            <p>{cartItems[id]}</p>
            <img
              className='w-7'
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=''
            />
          </div>
        )}
      </div>
      <div className='p-5 pt-2 px-3'>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-base font-[500]'>{name}</p>
          <img className='w-[70px]' src={assets.rating_starts} alt='' />
        </div>
        <p className='text-[#676767] text-sm'>{description}</p>
        <p className='text-tomato text-xl font-[500] mx-2 my-0'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
