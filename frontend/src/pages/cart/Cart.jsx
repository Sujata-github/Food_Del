import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext)

  const navigate = useNavigate()
  return (
    <div className='mt-24 '>
      <div className=''>
        <div className='grid  grid-cols-6 justify-center items-center text-gray-600 text-base'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list && food_list.length > 0 ? (
          food_list.map((item, index) => {
            if (cartItems && cartItems[item._id] > 0) {
              return (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    className='grid  grid-cols-6 items-center text-black text-base mx-0 my-2 '
                  >
                    <img
                      className='w-12'
                      src={url + '/images/' + item.image}
                      alt=''
                    />
                    <p className=''>{item.name}</p>
                    <p className=''>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className='cursor-pointer '
                    >
                      x
                    </p>
                  </div>
                  <hr className='h-[1px] bg-[#e2e2e2] border-none' />
                </React.Fragment>
              )
            }
          })
        ) : (
          <p className='text-base font-semibold text-black'>Cart is Empty!</p>
        )}
      </div>
      <div className='mt-20 grid  sm:grid-cols-2 grid-cols-1 gap-10 lg:gap-28 justify-between items-center '>
        <div className='flex-1 flex flex-col gap-5 order-2 sm:order-1'>
          <h2 className='text-xl font-bold'>Cart Total</h2>
          <div>
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
            onClick={() => {
              navigate('/order')
            }}
            className='uppercase w-52 border-none text-white bg-tomato rounded text-sm px-3 py-2 cursor-pointer'
          >
            Proceed to Checkout
          </button>
        </div>
        <div className='flex-1 order-1 sm:order-2'>
          <div>
            <p className='text-[#555]'>
              If you have a promo code ,Enter it here
            </p>
            <div className='mt-2 flex justify-between items-center bg-[#eaeaea] rounded'>
              <input
                className='bg-transparent border-none outline-none pl-2'
                type='text'
                placeholder='promo code'
              />
              <button className=' px-7 py-1 w-32 border-none text-white bg-black rounded'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
