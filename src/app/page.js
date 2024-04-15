'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function Home() {
  const [products, setProducts] = useState([]);
  const latestProduct = products[products.length - 1]
  console.log(latestProduct)
  const router = useRouter()

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const productsData = await fetch('http://localhost:3000/api/products');
    const finalProducts = await productsData.json();
    setProducts(finalProducts.result);
  };

  // Purchase latest product function
  const purchaseLatestProduct = async()=>
  {
    router.push(`all/${latestProduct._id}`)
  }
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex flex-col w-full h-screen justify-center items-center mt-96">
          <div className="flex justify-around items-center w-full p-44 h-screen">
            <div className="flex flex-col text-7xl items-center m-14">
              <h1 className="text-red-700">Performance</h1>
              <h1 className="text-6xl font-bold">&</h1>
              <h1 className="text-red-700">Design</h1>
            </div>
            <div className="flex flex-row items-end justify-end m-14">
              {
                products
                  .filter((val) => {
                    const productId = '65f9aa3afd4b8d2d7fba09eb';
                    return val._id === productId.toLowerCase();
                  })
                  .map((singleProduct) => (
                    <img key={singleProduct.id} src={singleProduct.imageurl} alt={singleProduct.name} />
                  ))
              }

            </div>
          </div>

          <button onClick={() => router.push('/all')} className="bg-gray-100 border rounded border-red-200 text-red-700 hover:bg-red-700 hover:text-white transition-all hover:scale-105 p-2 w-1/6 mb-52 cursor-pointer">Shop The Products</button>

          <div className="flex flex-col items-center w-full h-screen">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h1 className="text-black mb-10 font-bold text-lg">Electronics</h1>
              <div className="flex flex-row justify-center">
                {
                  products.filter((val) =>
                    val.category === 'electronics'
                  )
                    .map((product) =>
                    (
                      <>
                        <Link href={'all/' + product._id}>
                          <div className="flex flex-col items-start justify-end bg-gray-200 p-6 m-2" >
                            <div>
                              <img src={product.imageurl} className="object-cover" width={100} height={100} />
                            </div>
                            <p>{product.name}</p>
                            <div class="flex items-center">
                              <span class="text-yellow-500">&#9733;</span>
                              <span class="text-yellow-500">&#9733;</span>
                              <span class="text-yellow-500">&#9733;</span>
                              <span class="text-gray-300">&#9733;</span>
                              <span class="text-gray-300">&#9733;</span>
                            </div>
                            <p className="font-bold text-sm font-italic" >${product.price}</p>
                          </div>
                        </Link>
                      </>
                    ))
                }
              </div>
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center mt-20">
              <h1 className="text-black mb-10 font-bold text-lg">Mens Clothing</h1>
              <div className="flex flex-row justify-center">
                {
                  products.filter((val) =>
                    val.category === 'mens clothing'
                  )
                    .map((product) =>
                    (
                      <>
                        <Link href={'all/' + product._id}>
                          <div className="flex flex-col items-start justify-end cursor-pointer bg-gray-200 p-6 m-2" >
                            <div>
                              <img src={product.imageurl} className="object-cover" width={100} height={100} />
                            </div>
                            <p>{product.name}</p>
                            <div class="flex items-center">
                              <span class="text-yellow-500">&#9733;</span>
                              <span class="text-yellow-500">&#9733;</span>
                              <span class="text-yellow-500">&#9733;</span>
                              <span class="text-gray-300">&#9733;</span>
                              <span class="text-gray-300">&#9733;</span>
                            </div>
                            <p className="font-bold text-sm font-italic" >${product.price}</p>
                          </div>
                        </Link>
                      </>
                    ))
                }
              </div>
            </div>

            <div className="flex flex-row items-center w-full h-full justify-center mt-72 mb-24">
              <div className="w-1/3">
                {latestProduct && (
                  <img src={latestProduct.imageurl} alt="image url" width={700} height={700} />
                )}
              </div>

              <div className="flex w-1/2 h-full flex-col items-center justify-between">
                <div className="flex flex-col items-start text-start">
                  <h1 className="text-5xl">New</h1>
                  <h1 className="text-9xl">Arrivals</h1>
                </div>
                <div>{latestProduct && (
                  <>
                  <p>{latestProduct.description}</p>
                  <button onClick={purchaseLatestProduct} className="border-2 border-black p-2 mt-10 hover:bg-black hover:transition-all hover:text-white  rounded-md">Buy {latestProduct.name}</button>
                  </>
                )}</div>
              </div>
            </div>

            <div>
              <div>
                <Link href={'all'}>
                  <img/>
                  <button>All</button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}


