import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useState } from 'react'
import { assets } from '../../../frontend/src/assets/frontend_assets/assets'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url + '/api/order/list')
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data)
    } else {
      toast.error('Error')
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + '/api/order/status', {
      orderId,
      status: event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders()
    }
  }
  return (
    <div className='order add w-[80%] m-auto'>
      <h3 className='px-6 py-1'>Order Page</h3>
      <div className='order-list py-5  space-y-4'>
        {orders.map((order, index) => (
          <div
            key={index}
            className='grid grid-cols-4 gap-4 md:gap-0 md:grid-cols-6 items-start  border-[1px] border-solid border-tomato px-3 py-2 md:p-5 mx-7  text-xs md:text-sm text-[#505050]'
          >
            <img
              className='w-[40px] md:w-auto'
              src={assets.parcel_icon}
              alt=''
            />
            <div className='sm:-ml-10 col-span-2'>
              <p className='order-item-food font-bold'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + ' x ' + item.quantity
                  } else {
                    return item.name + ' x ' + item.quantity + ', '
                  }
                })}
              </p>
              <p className='order-item-name font-bold mt-3 md:mt-5 mb-1'>
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div className='order-item-address mb-2'>
                <p> {order.address.street + ', '}</p>
                <p>
                  {order.address.city +
                    ', ' +
                    order.address.state +
                    ', ' +
                    order.address.country +
                    ', ' +
                    order.address.zipcode +
                    ', '}
                </p>
              </div>
              <p className='phone'>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select
              onChange={event => statusHandler(event, order._id)}
              value={order.status}
              className='bg-[#ffe8e4] text-xs border-[1px] border-solid border-tomato w-[120px] md:w-auto  p-1  md:p-2 outline-none '
            >
              <option value='Food Processing'>Food Processing</option>
              <option value='Out for Delivery'>Out for Delivery</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
