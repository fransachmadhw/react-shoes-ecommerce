import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { data } from '../dataSepatu'

const Home = () => {
  const [dataSepatu, setDataSepatu] = React.useState(data)
  return (
    <div className='w-full'>
        <h1 className='text-center text-neutral-900 text-3xl lg:text-5xl font-semibold my-[48px]'>React E-Commerce</h1>
        <div className='w-full my-12 gap-y-7 grid grid-cols-2 lg:grid-cols-4 place-items-center px-2 lg:px-5'>
            <Link to={'/product/1'} state={{ data: dataSepatu.product1 }}>
                <Card
                    title={dataSepatu.product1.title}
                    image={dataSepatu.product1.image}
                    price={dataSepatu.product1.price}
                />
            </Link>
            <Link to={'/product/2'} state={{ data: dataSepatu.product2 }}>
                <Card
                    title={dataSepatu.product2.title}
                    image={dataSepatu.product2.image}
                    price={dataSepatu.product2.price}
                />
            </Link>
            <Link to={'/product/3'} state={{ data: dataSepatu.product3 }}>
                <Card
                    title={dataSepatu.product3.title}
                    image={dataSepatu.product3.image}
                    price={dataSepatu.product3.price}
                />
            </Link>
            <Link to={'/product/4'} state={{ data: dataSepatu.product4 }}>
                <Card
                    title={dataSepatu.product4.title}
                    image={dataSepatu.product4.image}
                    price={dataSepatu.product4.price}
                />
            </Link>
        </div>
    </div>
  )
}

export default Home