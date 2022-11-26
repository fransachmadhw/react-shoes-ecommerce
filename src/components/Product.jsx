import React from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const location = useLocation()
  const data = location.state?.data
  console.log(location)
  return (
    <div className='w-full lg:h-screen flex justify-center items-center mt-5 lg:mt-0'>
      <div className="w-full h-full lg:w-[1200px] lg:h-[500px] flex flex-col lg:flex-row">
        <div className='image w-full lg:w-[500px] h-full'>
          <img src={data.image} alt="shoes-image" className='w-full h-full' />
        </div>
        <div className='content w-full lg:w-[700px] h-full p-5 lg:p-8 flex flex-col justify-between gap-3'>
          <h1 className='lg:w-[450px] text-neutral-900 font-bold text-3xl lg:text-4xl'>{data.title}</h1>
          <h1 className='lg:w-[450px] text-neutral-500 font-medium text-4xl lg:text-5xl'>Rp{data.price}</h1>
          <p className='text-xl text-neutral-500 font-normal text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dictum est, ut pharetra orci. Mauris bibendum tincidunt ex. Donec a libero pretium, pharetra lacus eget, tristique arcu. Nulla fermentum consequat blandit. Curabitur id nulla quis purus mollis maximus nec id justo. Ut eget vehicula ipsum. Donec vitae pellentesque nisi. In at urna nulla. Aenean consequat ante sit amet ante rutrum accumsan.</p>
          <div className='w-full flex justify-center lg:justify-end'>
            <div className='w-full lg:w-[290px] h-[65px] bg-neutral-900 rounded-lg flex justify-center items-center text-white  cursor-pointer hover:bg-transparent hover:text-neutral-900 border-2 border-neutral-900 transition'>
              <h3 className='text-xl font-medium'>+ Add to Cart</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product