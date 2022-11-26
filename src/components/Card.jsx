import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
    // <Link to={props.path}>
    <div className='lg:w-[254px] lg:h-[365px] w-[170px] h-[300px] rounded-[15px] border border-neutral-300 flex flex-col overflow-hidden hover:-translate-y-3 hover:shadow-lg transition hover:border-transparent'>
        <div className="image w-full h-full lg:h-[254px]">
            <img src={props.image} alt="" className='w-full h-full' />
        </div>
        <div className="content w-full lg:h-[111px] h-full p-3">
            <h1 className='lg:w-[200px] text-md lg:text-xl font-bold text-neutral-900 leading-5 mb-2'>{props.title}</h1>
            <h2 className='text-lg font-medium text-neutral-500'>Rp{props.price}</h2>
        </div>
    </div>
    // </Link>
  )
}

export default Card