import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')
  const navigate = useNavigate()

  const { url } = useContext(StoreContext)
  // const verifyPayment = async () => {
  //   const response = await axios.post(url + '/api/order/verify', {
  //     success: orderId
  //   })
  //   console.log('response', response)
  //   if (response) {
  //     navigate('/myorders')
  //   }
  //   // if (response.data.success) {
  //   //   navigate('/myorders')
  //   // } else {
  //   //   navigate('/')
  //   // }
  // }
  const verifyPayment = async () => {
    const response = await axios.post(url + '/api/order/verify', {
      orderId: orderId,
      success: success
    })
    console.log('response', response)
    if (response.data.success) {
      navigate('/myorders')
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [])
  //   console.log(success, orderId)
  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
      <div className=' h-20 w-20 grid '>
        <div className=' w-full h-full self-center border-[5px] border-solid border-[#bdbdbd] border-t-tomato rounded-full animate-spin360'></div>
      </div>
    </div>
  )
}

export default Verify
