import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const List = ({ url }) => {
  // const url = 'http://localhost:4000'
  const [list, setList] = useState([])
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    // console.log(response)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error('Error')
    }
  }
  useEffect(() => {
    fetchList()
  })

  const removeFood = async foodId => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
    await fetchList()

    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error('Error')
    }
  }
  return (
    <div className='flex w-full  flex-col items-center justify-start my-4'>
      <p className='text-xl font-bold self-start ml-7 my-2'>All Food List</p>
      <div className='w-[90%] grid grid-cols-5 items-center gap-1 px-3 py-2 border-[1px] border-solid border-[#cacaca] text-sm  bg-[#f9f9f9]'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className='w-[90%] grid grid-cols-5 items-center gap-1 px-3 py-2 border-[1px] border-t-0 border-solid border-[#cacaca] text-sm '
          >
            <img
              className='w-[50%]'
              src={`${url}/images/` + item.image}
              alt=''
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p
              onClick={() => {
                removeFood(item._id)
              }}
              className=' cursor-pointer'
            >
              x
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default List
