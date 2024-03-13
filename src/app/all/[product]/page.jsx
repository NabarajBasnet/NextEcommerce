'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '@/components/redux/action';

const Product = (props) =>
{
  
  // Current Product Id
  const productId = props.params.product;

  // Redux
  const cartItems = useSelector(state=>state.cartItems);
  const dispatch = useDispatch();

  // States
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [rendered, setRendered] = useState(false);

  useEffect(() =>
  {
    try {
      getSingleProductDetails();
    } catch (error) {
      console.log(error);
    }
  },[]);
  

  const getSingleProductDetails = async()=>
  {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${productId}`);
      const data = await res.json();
      setName(data.result[0].name);
      setDescription(data.result[0].description);
      setPrice(data.result[0].price);
      setCategory(data.result[0].category);
      if (!name) {
        setRendered(true);
      }
    }
    catch (error) {
      alert(error);
    }
  };

  return (
    <>
    <div>
      <div className="container mx-auto p-8 bg-white shadow-md rounded-md">
        <div className=" mt-20 lg:flex ">
          <div className="lg:w-1/2 pr-8">
            <img
              src="https://via.placeholder.com/600x600"
              alt="Product Image"
              className="w-full h-auto rounded-md shadow-md md:w-64"
            />
          </div>
          <div className="lg:w-1/2">
            {rendered?(
              <div>
                <h1 className="text-3xl font-bold mb-4">{name}</h1>
                <p className="text-gray-600 mb-4">{description}</p>
                <p className="text-lg font-semibold mb-4">$ {price}</p>
                <p className="text-gray-600 mb-4">Category: {category}</p>
                <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md w-full" 
                  onClick={()=>dispatch(AddToCart)}>
                  Add To Cart
                </button>
              </div>
            )
            :
            ('')}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Product;
