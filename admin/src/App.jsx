import React from 'react'
import NavBar from './components/navbar/NavBar'
import Sidebar from './components/sidebar/Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const url = 'http://localhost:4000'
  return (
    <div>
      <NavBar />
      <hr />
      <div className='flex '>
        <Sidebar />
        <ToastContainer autoClose={2000} />
        <Routes>
          {/* Redirect from the root path `/` to `/add` */}
          <Route path='/' element={<Navigate to='/add' />} />
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/orders' element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
