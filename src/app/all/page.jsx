'use client'


import Link from "next/link";
import { useEffect, useState } from "react";

function All() { // Functional component
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);


  const getProducts = async () =>
  {
    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json();
    setProducts(data.result);
  };

  return (
    <>
      <div className='bg-slate-300 cursor-pointer grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
        {products.map((item, i) => (
          <div key={i} className="border border-black rounded m-2.5 text-center mt-20">
            <ul>
                <Link href={`all/${item._id}`}>
                    <li><h2>{item.name}</h2></li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                </Link>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default All;
