import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
// import { data } from '../dataSepatu'
import { db } from '../firebase';
import { collection, onSnapshot } from "firebase/firestore";

const Home = () => {
  const [dataSepatu, setDataSepatu] = React.useState([]);
  const shoesCollectionRef = collection(db, "shoes-list");

  React.useEffect(() => {
    onSnapshot(shoesCollectionRef, snapshot => {
      setDataSepatu(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()
        }
      }))
      console.log(snapshot);
    })
  }, [])
  return (
    <div className='w-full'>
        <h1 className='text-center text-neutral-900 text-3xl lg:text-5xl font-semibold my-[48px]'>React E-Commerce</h1>
        <div className='w-full my-12 gap-y-7 grid grid-cols-2 lg:grid-cols-4 place-items-center px-2 lg:px-5'>
            {
                dataSepatu.map((sepatu, index) => (
                    <Link to={`/product/${sepatu.id}`} state={{ data: sepatu }} key={index}>
                        <Card
                            title={sepatu.title}
                            image={sepatu.image}
                            price={sepatu.price}
                        />
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Home