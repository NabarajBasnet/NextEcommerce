'use client';




import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from './[product]/loading';

function All() {
  const [products, setProducts] = useState([]);
  const queryWord = useSelector(state => state.searchedWord);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch(`http://localhost:3000/api/products`);
    const data = await res.json();
    setProducts(data.result);
  };

  return (
    <>
      {products.length > 0 ? (
        <div className='bg-slate-300 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8'>
          {products.filter((product) => {
            if (queryWord === '') {
              return true;
            } else {
              return product.name.toLowerCase().includes(queryWord.toLowerCase());
            }
          }).map((item, i) => (
            <Link href={`/all/${item._id}`} key={i}>
              <div className='cursor-pointer w-300 h-300'>
                <div className='w-300 h-300 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105'>
                  <div style={{ paddingBottom: '70%', position: 'relative' }}> {/* Aspect ratio container */}
                    <img
                      src={item.imageurl}
                      alt="Product Image"
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md"
                      style={{ objectFit: 'cover' }} // Ensures the image covers the container
                    />
                  </div>
                  <div className='p-6'>
                    <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
                    <div className='flex justify-between'>
                      <p className='text-gray-700 mb-2'>$ {item.price}</p>
                      <p className='text-gray-700 mb-2'>{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Loading />
        </div>
      )}
    </>
  );
}

export default All;
