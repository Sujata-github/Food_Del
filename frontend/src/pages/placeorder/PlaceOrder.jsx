import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext)

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    street: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = event => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async event => {
    event.preventDefault()
    let orderItems = []
    food_list.map(item => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item
        itemInfo['quantity'] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    }
    let response = await axios.post(url + '/api/order/place', orderData, {
      headers: { token }
    })
    if (response.data.success) {
      const { session_url } = response.data
      window.location.replace(session_url)
    } else {
      alert('Error')
    }
  }
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate('/cart')
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token])
  return (
    <form
      onSubmit={placeOrder}
      className='flex items-start justify-between flex-col md:flex-row gap-20 mt-24 w-full'
    >
      <div className='md:w-[50%] w-full   '>
        <p className='text-2xl font-bold mb-12 '>Delivery Information</p>

        <div className='w-full'>
          {/* Name Inputs */}
          <div className='flex flex-col sm:flex-row gap-3'>
            <input
              required
              name='firstName'
              onChange={onChangeHandler}
              value={data.firstName}
              className='w-full sm:w-1/2 mb-4 p-2 border border-[#c5c5c5] rounded outline-tomato'
              type='text'
              placeholder='First Name'
            />
            <input
              required
              name='lastName'
              onChange={onChangeHandler}
              value={data.lastName}
              className='w-full sm:w-1/2 mb-4 p-2 border border-[#c5c5c5] rounded outline-tomato'
              type='text'
              placeholder='Last Name'
            />
          </div>

          {/* Email Input */}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            className='w-full mb-4 p-2 border border-[#c5c5c5] rounded outline-tomato'
            type='email'
            placeholder='Email Address'
          />

          {/* Street Input */}
          <input
            required
            name='street'
            onChange={onChangeHandler}
            value={data.street}
            className='w-full mb-4 p-2 border border-[#c5c5c5] rounded outline-tomato'
            type='text'
            placeholder='Street'
          />

          {/* City & State */}
          <div className='flex flex-col sm:flex-row gap-3'>
            <input
              required
              name='city'
              onChange={onChangeHandler}
              value={data.city}
              className='w-full sm:w-1/2 mb-4 p-2 border border-[#c5c5c5] rounded outline-tomato'
              type='text'
              placeholder='City'
            />
            <input
              required
              name='state'
              onChange={onChangeHandler}
              value={data.state}
              className='w-full sm:w-1/2 mb-4 p-2 border border-[#c5c5c5] rounded outline-tomato'
              type='text'
              placeholder='State'
            />
          </div>

          {/* Zipcode & Country */}
          <div className='flex flex-col sm:flex-row gap-3'>
            <input
              required
              name='zipcode'
              onChange={onChangeHandler}
              value={data.zipcode}
              className='w-full sm:w-1/2 mb-4 p-2 border border-[#c5c5c5] rounded outline-tomato'
              type='text'
              placeholder='Zip code'
            />
            <input
              required
              name='country'
              onChange={onChangeHandler}
              value={data.country}
              className='w-full sm:w-1/2 mb-4 p-2 border border-[#c5c5c5] rounded outline-tomato'
              type='text'
              placeholder='Country'
            />
          </div>

          {/* Phone Input */}
          <input
            required
            name='phone'
            onChange={onChangeHandler}
            value={data.phone}
            className='w-full mb-4 p-2 border border-[#c5c5c5] rounded outline-tomato'
            type='text'
            placeholder='Phone'
          />
        </div>
      </div>
      <div className='md:w-[50%] w-full '>
        <div className='flex-1 flex flex-col gap-5 order-2 sm:order-1 '>
          <h2 className='text-2xl font-bold '>Cart Total</h2>
          <div className='mt-6'>
            <div className='flex justify-between text-[#555]'>
              <p>SubTotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className='my-2 mx-0' />
            <div className='flex justify-between text-[#555]'>
              <p>Delievery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 100}</p>
            </div>
            <hr className='my-2 mx-0' />
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}
              </b>
            </div>
          </div>
          <button
            type='submit'
            className='mt-8 uppercase w-40 border-none text-white bg-tomato rounded text-sm px-3 py-2 cursor-pointer'
          >
            Place Order
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
