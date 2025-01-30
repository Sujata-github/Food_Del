import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({ url }) => {
  // const url = 'http://localhost:4000'
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad'
  })
  const onChangeHandler = event => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', Number(data.price))
    formData.append('category', data.category)
    formData.append('image', image)

    const response = await axios.post(`${url}/api/food/add`, formData)
    if (response.data.success) {
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Salad'
      })
      setImage(false)
      toast.success(response.data.message)
      //   toast.success('Added Successfully')
    } else {
      toast.error(response.data.message)
    }
  }
  return (
    <div className='ml-2 md:ml-10 mt-2 w-full max-w-[70%] md:max-w-[50%]  text-[#6d6d6d] text-base'>
      <form
        className='flex-cols gap-3 grid grid-cols-1'
        onSubmit={onSubmitHandler}
      >
        <div className='add-img-upload flex-cols'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img
              className='w-32'
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=''
            />
          </label>
          <input
            onChange={e => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
            className='border-[1px] border-solid border-gray-400'
          />
        </div>
        <div className=' flex-cols'>
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className='border-[1px] border-solid border-gray-400 p-1'
            type='text'
            name='name'
            placeholder='Enter Product Name'
          />
        </div>
        <div className=' flex-cols'>
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className='border-[1px] border-solid border-gray-400 p-1'
            name='description'
            rows={6}
            placeholder='Write Description Here..'
            required
          ></textarea>
        </div>
        <div className='flex gap-7'>
          <div className='add-cat flex-cols'>
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name='category'
              className='w-32 p-1 border-[1px] border-solid border-gray-400'
            >
              <option value='Salad'>Salad</option>
              <option value='Rolls'>Rolls</option>
              <option value='Deserts'>Deserts</option>
              <option value='Sandwich'>Sandwich</option>
              <option value='Cake'>Cake</option>
              <option value='Pure Veg'>Pure Veg</option>
              <option value='Pasta'>Pasta</option>
              <option value='Noodles'>Noodles</option>
            </select>
          </div>
          <div className='add-price flex-cols'>
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className='w-32 p-1 border-[1px] border-solid border-gray-400'
              type='number'
              name='price'
              placeholder='$20'
            />
          </div>
        </div>
        <button
          type='submit'
          className='w-40 border-none p-2 bg-black text-white cursor-pointer'
        >
          ADD
        </button>
      </form>
    </div>
  )
}

export default Add
