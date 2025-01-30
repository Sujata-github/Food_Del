import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useEffect } from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const MyOrders = () => {
  const [data, setData] = useState([])
  const { url, token } = useContext(StoreContext)

  const fetchOrders = async () => {
    const response = await axios.post(
      url + '/api/order/userorders',
      {},
      {
        headers: { token }
      }
    )
    setData(response.data.data)
    console.log(response.data.data)
  }

  useEffect(() => {
    if (token) {
      fetchOrders()
    }
  }, [token])

  return (
    <div className=' mx-5 my-0'>
      <h2 className='text-xl font-semibold pt-3'>MyOrders</h2>
      <div className='flex flex-col gap-5  mt-7'>
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className='grid grid-cols-4 lg:grid-cols-7 items-center  lg:gap-0 gap-7 px-2 py-5 text-[#454545] border-[1px] border-solid border-tomato'
            >
              <img className='w-[50px]' src={assets.parcel_icon} alt='' />
              <p className='col-span-2 md:-ml-10 ml-0 text-sm font-semibold'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + ' x ' + item.quantity
                  } else {
                    return item.name + ' x ' + item.quantity + ', '
                  }
                })}
              </p>
              <p className='md:-ml-2 ml-0 text-sm'>₹{order.amount}.00</p>
              <p className='lg:-ml-10 ml-0 text-sm '>
                Items : {order.items.length}
              </p>
              <p className='md:-ml-10 col-span-2 lg:col-span-1'>
                <span className='text-tomato'>&#x25cf;</span>
                <b className='text-xs md:text-sm font-semibold whitespace-nowrap text-[#454545'>
                  {order.status}
                </b>
              </p>
              <button
                onClick={fetchOrders}
                className=' hover:bg-tomato hover:text-black md:-ml-5 border-none text-xs md:text-base md:whitespace-nowrap  md:w-32 py-1 rounded bg-[#ffe1e1] cursor-pointer text-[#454545]'
              >
                Track Order
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
