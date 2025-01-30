import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div id='app-download' className='m-auto mt-24'>
      <div data-aos='fade-up' className=' text-3xl text-center font-[500]'>
        <p>
          For Better Experience Download <br /> Tomato App
        </p>
        <div className='flex flex-row justify-center gap-10 py-9'>
          <img
            data-aos='zoom-in'
            src={assets.play_store}
            alt=''
            className='w-36 cursor-pointer  transition-transform duration-500 hover:scale-150'
          />
          <img
            data-aos='zoom-in'
            src={assets.app_store}
            alt=''
            className='w-36 cursor-pointer  transition-transform duration-500 hover:scale-150'
          />
        </div>
      </div>
    </div>
  )
}

export default AppDownload
