import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import shoes1 from '../assets/shoes1.jpg'
import shoes2 from '../assets/shoes2.jpg'
import shoes3 from '../assets/shoes3.jpg'
import shoes4 from '../assets/shoes4.jpg'

const Home = () => {
    const dataSepatu = {
        product1: {
            title: 'Gearfourth Sneakers Blunt Os Black White',
            price: '115.000',
            image: shoes1,
        },
        product2: {
            title: 'Gearfourth Sneakers Willy Os Black Maroon',
            price: '99.000',
            image: shoes2,
        },
        product3: {
            title: 'Gearfourth Sneakers Goofy Os Yellow',
            price: '99.000',
            image: shoes3,
        },
        product4: {
            title: 'Gearfourth Sneakers Grind Os Black Nevy',
            price: '99.000',
            image: shoes4,
        },
    }

  return (
    <div className='w-full'>
        <h1 className='text-center text-neutral-900 text-3xl lg:text-5xl font-semibold my-[48px]'>React E-Commerce</h1>
        <div className='w-full my-12 gap-y-7 grid grid-cols-2 lg:grid-cols-4 place-items-center px-5'>
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