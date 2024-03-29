'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



function All() {
  const [products, setProducts] = useState([]);
  const queryWord = useSelector(state => state.searchedWord)

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
      <div className='bg-slate-300 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8 '>
        {products.filter((product)=>
          {
            if(queryWord ==='')
            {
              return true;
            }
            else
            {
              return product.name.toLowerCase().includes(queryWord.toLowerCase())
            }
          }
        ).map((item, i) => (
          <Link href={`/all/${item._id}`} key={i}>
            <div key={i} className='cursor-pointer w-300 h-300 object-cover'>
              <div className='w-300 h-300 object-cover bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105'>
              <div className='bg-white rounded-lg w-300 h-300 object-cover overflow-hidden shadow-lg transition duration-300 transform hover:scale-105'>
                <img
                  src={item.imageurl}
                  alt="Product Image"
                  className="w-300 h-300 object-cover rounded-md shadow-md "
                />
              </div>
                {/* {queryWord} */}
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
    </>
  );
}

export default All;
