// import React from 'react'
// import header_img from '../../../public/header_img.png'

// const BannerImg = {
//   backgroundImage: `url(${header_img})`,
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'contain',
//   position: 'relative'
// }

// const Header = () => {
//   return (
//     <div
//       className='relative h-[400px] w-full mx-[30px] my-auto '
//       style={BannerImg}
//     >
//       <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-16'>
//         <h2 className='font-bold text-white text-dynamic'>
//           Order your favourite food here{' '}
//         </h2>
//         <p>
//           Choose from a diverse menu featuring a delectable array of dishes
//           crafted with the finest ingredients and culinary expertise. Our
//           mission is to satisfy your cravings and elevate your dining
//           experience,one delecious meal at a time.
//         </p>
//         <button>View Menu</button>
//       </div>
//     </div>
//   )
// }

// export default Header

// import React from 'react'

// const BannerImg = {
//   backgroundImage: `url('/header_img.png')`,
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'contain',
//   position: 'relative'
// }

// const Header = () => {
//   return (
//     <div
//       className='relative top-0 left-0 h-[700px] md:h-[500px] w-full my-auto'
//       style={BannerImg}
//     >
//       <div
//         data-aos='zoom-in'
//         data-aos-duration='700'
//         data-aos-delay='100'
//         className='absolute flex flex-col items-start gap-2 w-[60%] bottom-16 left-16 text-white'
//       >
//         <h2 className=' text-dynamic text-white'>
//           Order your favourite food here
//         </h2>
//         <p className='text-sm hidden lg:flex '>
//           Choose from a diverse menu featuring a delectable array of dishes
//           crafted with the finest ingredients and culinary expertise. Our
//           mission is to satisfy your cravings and elevate your dining
//           experience, one delicious meal at a time.
//         </p>
//         <button className='text-sm rounded-full w-auto px-5 py-2 text-[#747474] font-[500]  bg-white  '>
//           View Menu
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Header
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BannerImg = {
  backgroundImage: `url('/header_img.png')`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain', // Ensures the image covers the area proportionally
  position: 'relative'
}

const Header = () => {
  const navigate = useNavigate()
  return (
    <div
      className='relative top-0 left-0 lg:h-[500px] md:h-[300px] sm:h-[300px] h-[200px] w-full my-auto'
      style={BannerImg}
    >
      <div
        data-aos='zoom-in'
        data-aos-duration='700'
        data-aos-delay='100'
        className='absolute flex flex-col  items-start gap-2 lg:gap-5 w-[80%] md:w-[60%] bottom-6 left-8  sm:bottom-20  sm:left-16 text-white p-4 sm:p-2'
      >
        <h2 className='text-xl md:text-2xl lg:text-6xl text-white '>
          Order your favourite food here
        </h2>
        <p className='text-sm md:text-sm hidden  lg:flex'>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className='text-sm rounded-full w-auto px-5 py-2 text-gray-600 font-medium bg-white hover:bg-gray-200'>
          <a href='#explore-menu'>View Menu</a>
        </button>
      </div>
    </div>
  )
}

export default Header
