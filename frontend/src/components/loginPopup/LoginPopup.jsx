import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext)
  const [currentState, setCurrentState] = useState('Sign In')
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const onChangeHandler = event => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({ ...data, [name]: value }))
  }
  const onLogin = async event => {
    event.preventDefault()
    let newUrl = url
    if (currentState === 'Sign In') {
      newUrl += '/api/user/login'
    } else {
      newUrl += '/api/user/register'
    }

    const response = await axios.post(newUrl, data)

    if (response.data.success) {
      toast.success(response.data.message)
      setToken(response.data.token)
      localStorage.setItem('token', response.data.token)
      setShowLogin(false)
    } else {
      alert(response.data.message)
    }
  }
  return (
    <div className='absolute z-10 w-full h-full bg-[#00000090] grid'>
      <form
        onSubmit={onLogin}
        data-aos='fade-in'
        className='flex  m-auto self-center w-80 text-[#808080] bg-white  flex-col gap-6 px-6 py-7 rounded-md text-base'
      >
        <div className='flex justify-between items-center text-black '>
          <h2 className='font-bold text-xl'>{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=''
            className='w-4 cursor-pointer'
          />
        </div>
        <div className='flex flex-col gap-5'>
          {currentState === 'Sign In' ? (
            <></>
          ) : (
            <input
              className='outline-none p-2 border-[1px] border-solid border-[#c9c9c9] rounded'
              type='text'
              placeholder='Enter  name'
              required
              name='name'
              onChange={onChangeHandler}
              value={data.name}
            />
          )}

          <input
            className='outline-none p-2 border-[1px] border-solid border-[#c9c9c9] rounded'
            type='email'
            placeholder='Enter  email'
            required
            name='email'
            onChange={onChangeHandler}
            value={data.email}
          />
          <input
            className='outline-none p-2 border-[1px] border-solid border-[#c9c9c9] rounded'
            type='password'
            placeholder='Enter  Password'
            required
            name='password'
            onChange={onChangeHandler}
            value={data.password}
          />
        </div>
        <button
          type='submit'
          className='border-none p-2 rounded text-white bg-tomato text-base cursor-pointer'
        >
          {currentState === 'Sign Up' ? 'Create Account' : 'Sign In'}
        </button>
        <div className='flex items-start gap-2 -mt-4'>
          <input type='checkbox' required className='mt-[5px]' />
          <p className='text-sm'>
            By continuing, I agree to the terms or use & privacy policy
          </p>
        </div>
        {currentState === 'Sign In' ? (
          <p>
            Create a new account?{' '}
            <span
              className='text-tomato font-[500] cursor-pointer'
              onClick={() => setCurrentState('Sign Up')}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span
              className='text-tomato font-[500] cursor-pointer'
              onClick={() => setCurrentState('Sign In')}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPopup
