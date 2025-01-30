import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
// import { food_list } from '../assets/frontend_assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = props => {
  const [cartItems, setCartItems] = useState({})

  const url = 'https://food-del-backend-vjsc.onrender.com'
  // const url = 'http://localhost:4000'
  const [token, setToken] = useState('')
  const [food_list, setFoodList] = useState([])

  // const addToCart = async itemId => {
  //   // const key = String(itemId);
  //   console.log('itemId', itemId)
  //   if (!itemId) {
  //     console.error('Invalid itemId:', itemId)
  //     return
  //   }
  //   const key = String(itemId) // Ensure consistent key type
  //   if (!cartItems[itemId]) {
  //     setCartItems(prev => ({ ...prev, [key]: 1 }))
  //   } else {
  //     setCartItems(prev => ({ ...prev, [key]: prev[key] + 1 }))
  //   }
  //   if (token) {
  //     await axios.post(
  //       url + '/api/cart/add',
  //       { itemId },
  //       { headers: { token } }
  //     )
  //   }
  // }
  const addToCart = async itemId => {
    console.log('addToCart called with itemId:', itemId) // Debugging

    if (!itemId) {
      console.error('Invalid itemId:', itemId)
      return
    }

    const itemExists = food_list.some(item => item._id === itemId)
    if (!itemExists) {
      console.error('Item not found in food_list:', itemId)
      return
    }
    if (!cartItems || !itemId) {
      console.error('Invalid state or itemId:', { cartItems, itemId })
      return
    }

    const key = String(itemId) // Consistently handle key as a string
    setCartItems(prev => ({
      ...prev,
      [key]: (prev[key] || 0) + 1
    }))

    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { token } }
        )
      } catch (error) {
        console.error('Failed to add item to server:', error)
      }
    }
  }

  const removeFromCart = async itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    if (token) {
      await axios.post(
        url + '/api/cart/remove',
        { itemId },
        { headers: { token } }
      )
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      // console.log('item', item)
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find(product => product._id === item)
        // console.log('itemInfo', itemInfo)
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }

  const fetchFoodList = async () => {
    const response = await axios.get(url + `/api/food/list`)
    setFoodList(response.data.data)
  }

  // const loadCartData = async token => {
  //   const response = await axios.get(
  //     url + '/api/cart/get',
  //     {},
  //     { headers: { token } }
  //   )
  //   setCartItems(response.data.cartData)
  // }
  const loadCartData = async token => {
    try {
      const response = await axios.get(url + '/api/cart/get', {
        headers: { token }
      })
      setCartItems(response.data.cartData || {})
    } catch (error) {
      console.error('Error loading cart data:', error)
    }
  }

  useEffect(() => {
    async function loadData () {
      await fetchFoodList()
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        await loadCartData(localStorage.getItem('token'))
      }
    }
    loadData()
  }, [])
  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    food_list,
    setFoodList
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
