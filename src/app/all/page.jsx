'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



function All() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);




  useEffect(() => {
    getProducts();
  }, [currentPage]);

  const getProducts = async () => {
    const limit = 6; // Set the number of products per page
    const res = await fetch(`http://localhost:3000/api/products?page=${currentPage}&limit=${limit}`);
    const data = await res.json();
    setProducts(data.result);
    setTotalPages(data.totalPages);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className='bg-slate-300 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8 '>
        {products.map((item, i) => (
          <Link href={`/all/${item._id}`} key={i}>
          <div
            key={i}
            className='cursor-pointer'
          >
            <div className='mt-10 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105'>
            <img
              src={item.imageurl}
              alt="Product Image"
              className="w-full h-auto object-cover rounded-md shadow-md md:w-64"
              width={350}
              height={350}
            />
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
      <div className='flex justify-center mt-4'>
        <button
          className='bg-gray-300 px-4 py-2 mr-2'
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className='bg-gray-300 px-4 py-2'
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default All;
