import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='w-full my-2 flex flex-col  gap-4' id='explore-menu'>
      <h1 className='text-2xl text-[#262626] font-[500]'>Explore our menu</h1>
      <p className='md:w-[60%] w-full text-[#808080] text-sm'>
        Choose from a diverse menu featuring a delectable array of dishes . Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className=' flex justify-between items-center gap-8  text-center lg:mx-5 md:mx-4 mx-2 my-0 overflow-x-scroll no-scrollbar'>
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory(prev =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
            >
              <img
                className={`max-w-[80px] cursor-pointer rounded-full ${
                  category === item.menu_name
                    ? 'border-2 border-solid border-tomato p-[2px]'
                    : ''
                }`}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p className='mt-2 text-[#747474] text-base cursor-pointer'>
                {item.menu_name}
              </p>
            </div>
          )
        })}
      </div>
      <hr className=' my-0 h-[2px] bg-[#e2e2e2]' />
    </div>
  )
}

export default ExploreMenu
