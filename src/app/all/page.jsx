'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from './[product]/loading';

function All() {
  const [products, setProducts] = useState([]);
  const queryWord = useSelector(state => state.searchedWord);
  const [electronicsHovered, setElectronicsHovered] = useState(false)
  const [fashionHovered, setFashionHovered] = useState(false)
  const [automotivesHovered, setAutomotivesHovered] = useState(false)
  const [currentCategoryQuery, setCurrentCategoryQueryState] = useState('')
  const [minimumPrice, setMinimumPrice] = useState('')
  const [maximumPrice, setMaximumPrice] = useState('')

  console.log('MinimumPrice Price: ', minimumPrice)
  console.log('MaximumPrices Price: ', maximumPrice)
  console.log(currentCategoryQuery)

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch(`http://localhost:3000/api/products`);
    const data = await res.json();
    setProducts(data.result);
  };


  const filterByElectronicsCategory = ()=>
  {
    setElectronicsHovered(!electronicsHovered);
    setCurrentCategoryQueryState('electronics');
  }

  return (
    <>
      <div className='flex flex-row items-start'>
        <div className='flex flex-col w-80'>
          <div className='flex flex-col items-start'>
            <div className='flex flex-col items-start'>
              <h1 className='font-bold'>Filter By Cateories</h1>
              <div>
                <h1 onClick={filterByElectronicsCategory}  className='hover:cursor-pointer'>Electronics</h1>
                <ul className={electronicsHovered ? 'hover:flex flex-col' : 'hidden'}>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={()=>setCurrentCategoryQueryState('laptops')}><p>{'> '}</p>Laptops</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={()=>setCurrentCategoryQueryState('smartphones')}><p>{'> '}</p>Smart Phones</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={()=>setCurrentCategoryQueryState('smartwatches')}><p>{'> '}</p>Smart Watches</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={()=>setCurrentCategoryQueryState('headphones')}><p>{'> '}</p>Headphones</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={()=>setCurrentCategoryQueryState('moniters')}><p>{'> '}</p>Moniters</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={()=>setCurrentCategoryQueryState('tablets')}><p>{'> '}</p>Tablets</li>
                </ul>
              </div>

              <div>
                <h1 onClick={() => setFashionHovered(!fashionHovered)} className='hover:cursor-pointer'>Fashion</h1>
                <ul className={fashionHovered ? 'hover:flex flex-col' : 'hidden'}>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/jewelry'}>jewelry</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/mens ware'}>Mens Ware</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/womens ware'}>Womens Ware</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/shoes'}>Shoes</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/watches'}>Watches</Link></li>
                </ul>
              </div>

              <div>
                <h1 onClick={() => setAutomotivesHovered(!automotivesHovered)} className='hover:cursor-pointer'>Automotives</h1>
                <ul className={automotivesHovered ? 'hover:flex flex-col' : 'hidden'}>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/automotive/bikeaccessories'}>Bike Accessories</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/automotive/caraccessories'}>Car Accessories</Link></li>
                </ul>
              </div>
            </div>

            <div>
              <div className='flex flex-col items-start'>
                <h1 className='font-bold'>Filter By Price</h1>
                <div className='flex flex-row items-center'>
                  <input type='text' value={minimumPrice} onChange={(e)=>setMinimumPrice(e.target.value)} placeholder='Minimum' className='text-center border-2 rounded-md mr-2 mt-2 ml-2 border-black h-12 w-1/3' />
                  <input type='text' value={maximumPrice} onChange={(e)=>setMaximumPrice(e.target.value)} placeholder='Maximum' className='text-center border-2 rounded-md mt-2 border-black h-12 w-1/3' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {products.length > 0 ? (
            <div className='bg-slate-300 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8'>
              {products.filter((product) => {
                const nameMatch = queryWord === '' || product.name.toLowerCase().includes(queryWord.toLowerCase())
                const categoryMatch = currentCategoryQuery === '' || product.category.toLowerCase().includes(currentCategoryQuery.toLowerCase())
                const minPrice = minimumPrice === '' || Number(product.price) >= Number(minimumPrice)
                const maxPrice = maximumPrice === '' || Number(product.price) <= Number(maximumPrice)

                return nameMatch && categoryMatch && minPrice && maxPrice
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
        </div>
      </div>
    </>
  );
}

export default All;
