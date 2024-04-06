'use client';

import Deleter from "@/components/deleteProduct/Deleter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const queryWord = useSelector(state => state.searchedWord);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json();
    setProducts(data.result);
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {products.filter((product)=>
        {
          if(queryWord==='')
          {
            return true;
          }
          else
          {
           return product.name.toLowerCase().includes(queryWord.toLowerCase())
          }
        }).map((item, i) => (
          <div key={i} className="border border-black rounded p-4">
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">{item.description}</p>

            <div className="flex flex-row items-center justify-between">

              <div>
                <p className="font-bold text-gray-700 mb-2"><span className="text-blue-500">Price: </span> ${item.price}</p>
                <p className="font-bold text-gray-700 mb-2"><span className="text-blue-500">Stock: </span>{item.stocks}</p>
                <p className="font-bold text-gray-700 mb-2"><span className="text-blue-500">Category: </span>{item.category}</p>
                <p className="font-bold text-gray-700 mb-2"><span className="text-blue-500">Sub Category: </span>{item.subcategory}</p>
                <p className="font-bold text-gray-700 mb-2"><span className="text-blue-500">Brand Name: </span>{item.brandname}</p>
                <Link href={'/admin/manageproducts/' + item._id}>
                  <div className="text-red-500 hover:underline cursor-pointer mr-2">
                    Edit Product Details
                  </div>
                </Link>
                <div className="text-red-500">
                  <Deleter id={item._id} />
                </div>
              </div>

              <div>
                <img src={item.imageurl} alt="Image Loading..." width={150} height={150} />
              </div>
            </div>

            {/* <img className="w-full h-48 object-cover mt-4" src={item.image} alt={item.name} /> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default AllProducts;