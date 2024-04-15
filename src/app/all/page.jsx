'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from './[product]/loading';
import SliderComponent from '@/components/slider/slider';

function All() {
  const [products, setProducts] = useState([]);
  const queryWord = useSelector(state => state.searchedWord);
  const [electronicsHovered, setElectronicsHovered] = useState(false)
  const [fashionHovered, setFashionHovered] = useState(false)
  const [automotivesHovered, setAutomotivesHovered] = useState(false)
  const [currentCategoryQuery, setCurrentCategoryQueryState] = useState('')
  const [minimumPrice, setMinimumPrice] = useState('')
  const [maximumPrice, setMaximumPrice] = useState('')
  const [sidebar, setSidebar] = useState(true);


  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch(`http://localhost:3000/api/products`);
    const data = await res.json();
    setProducts(data.result);
  };


  const filterByElectronicsCategory = () => {
    setElectronicsHovered(!electronicsHovered);
    setCurrentCategoryQueryState('electronics');
  }

  return (
    <>
      <div className='flex flex-row items-start'>
        {sidebar?(
        <div className='flex flex-col w-80 transition-all'>
          <div className='flex flex-col items-start h-screen transition-all shadow-2xl border'>
            <div className='flex flex-col bg-white w-full shadow-xl pr-10 pl-3 pt-10 border transition-all items-start'>
              <h1 className='font-bold text-red-600'>Filter By Cateories</h1>
              <div className='pl-3'>
                <h1 onClick={filterByElectronicsCategory} className='hover:cursor-pointer font-bold'>Electronics</h1>
                <ul className={electronicsHovered ? 'hover:flex flex-col' : 'hidden'}>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={() => setCurrentCategoryQueryState('laptops')}><p>{'> '}</p>Laptops</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={() => setCurrentCategoryQueryState('smartphones')}><p>{'> '}</p>Smart Phones</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={() => setCurrentCategoryQueryState('smartwatches')}><p>{'> '}</p>Smart Watches</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={() => setCurrentCategoryQueryState('headphones')}><p>{'> '}</p>Headphones</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={() => setCurrentCategoryQueryState('moniters')}><p>{'> '}</p>Moniters</li>
                  <li className='flex flex-row ml-3 hover:cursor-pointer' onClick={() => setCurrentCategoryQueryState('tablets')}><p>{'> '}</p>Tablets</li>
                </ul>
              </div>

              <div className='pl-3'>
                <h1 onClick={() => setFashionHovered(!fashionHovered)} className='hover:cursor-pointer font-bold'>Fashion</h1>
                <ul className={fashionHovered ? 'hover:flex flex-col' : 'hidden'}>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/jewelry'}>jewelry</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/mens ware'}>Mens Ware</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/womens ware'}>Womens Ware</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/shoes'}>Shoes</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/fashion/watches'}>Watches</Link></li>
                </ul>
              </div>

              <div className='pl-3'>
                <h1 onClick={() => setAutomotivesHovered(!automotivesHovered)} className='hover:cursor-pointer font-bold'>Automotives</h1>
                <ul className={automotivesHovered ? 'hover:flex flex-col' : 'hidden'}>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/automotive/bikeaccessories'}>Bike Accessories</Link></li>
                  <li className='flex flex-row ml-3'><p>{'> '}</p><Link href={'categories/automotive/caraccessories'}>Car Accessories</Link></li>
                </ul>
              </div>
            </div>

            <div className='bg-white w-full shadow-xl pr-10 pt-10 pl-3 pb-10 border mt-10'>
              <div className='flex flex-col items-start'>
                <h1 className='font-bold text-red-600'>Filter By Price</h1>
                <div className='flex flex-row items-center'>
                  <input type='text' value={minimumPrice} onChange={(e) => setMinimumPrice(e.target.value)} placeholder='Minimum' className='text-center border-2 mr-2 mt-2 ml-2 border-gray-400 h-9 w-1/2' />
                  <input type='text' value={maximumPrice} onChange={(e) => setMaximumPrice(e.target.value)} placeholder='Maximum' className='text-center border-2 mt-2 border-gray-400 h-9 w-1/2' />
                </div>
              </div>
            </div>

            <div>
              <SliderComponent/>
            </div>

            <div>
              <div>
                <h1>Brand</h1>
                <div className='flex flex-col items-start ml-2'>
                  <br className='bg-black border-2'></br>
                  {electronicsHovered ? (
                    <>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Apple</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Acer</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Asus</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Dell</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>HP</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Lenevo</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Samsung</h1></label>
                    </>
                  ) : ('')}
                  {fashionHovered ? (
                    <>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Vans</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Converse</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Disel</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Young LA</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Row Gear</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Gymshark</h1></label>
                    </>
                  ) : ('')}
                  {automotivesHovered ? (
                    <>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Yamaha</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Honda</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Toyota</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>BMW</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Mercedes</h1></label>
                      <label className='flex flex-row items-center'><input type='checkbox' className='w-6 h-6 m-1' /><h1 className='ml-1'>Audi</h1></label>
                    </>
                  ) : ('')}
                </div>
              </div>
            </div>

          </div>
        </div>
        ):('')}

        <div className='border-2'>
          <div>
            <div className='flex flex-row  items-center justify-between cursor-pointer'>
              <img 
              src='./icons/burgerrounded.png'
              className='w-10 bg-blend-color-burn' 
              onClick={()=>setSidebar(!sidebar)}
              />
              <div>
                <h1>Sort By</h1>
                <select>
                  <option>Price Low To High</option>
                  <option>Price High To Low</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            {products.length > 0 ? (
              <div className='bg-white grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8'>
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
                            className="absolute object-cover aspect-square top-0 left-0 w-full h-full rounded-md shadow-md"
                          />
                        </div>
                        <div className='p-6'>
                          <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
                          <div className='flex justify-between'>
                            <div className='flex flex-row items-center w-full justify-between'>
                              <div>
                                <p className='text-gray-700 mb-2'>$ {item.price}</p>
                                <p className='text-gray-700 mb-2'>{item.category}</p>
                              </div>
                              <div>
                                <p className='text-gray-700 mb-2'>{item.subcategory}</p>
                                <p className='text-gray-700 mb-2'>{item.brandname}</p>
                              </div>
                            </div>
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
      </div>
    </>
  );
}

export default All;


