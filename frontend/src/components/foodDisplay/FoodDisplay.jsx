import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../fooditem/FoodItem'
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  //   console.log('foodlist', food_list)
  return (
    <div className='mt-7' id='food-display'>
      <h2 className='text-2xl font-bold'>Top dishes near you</h2>
      <div
        // data-aos='fade-up'
        // data-aos-duration='500'
        className='grid md:grid-cols-3  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-7 gap-7'
      >
        {/* {food_list?.map((item, index) => {
          console.log(item)
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )
          }
        })} */}
        {food_list?.length > 0 ? (
          food_list.map((item, index) => {
            if (category === 'All' || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            }
            return null
          })
        ) : (
          <p>Loading food items...</p>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
