'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '@/components/redux/action';
import Link from 'next/link';

const Product = (props) => {
  // Current Product Id
  const productId = props.params.product;

  // Redux
  const cartItems = useSelector(state => state.cartItems);
  var index = cartItems.length
  const dispatch = useDispatch();




  // States
  const [_id, set_id] = useState();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageurl, setImageUrl] = useState('')
  const [rendered, setRendered] = useState(false);
  const [inCart, setInCart] = useState(false);

  const productObj = { _id, name, description, price, category, imageurl };

  const addProductsToCart = async()=>
  {
    await fetch(`http://localhost:3000/api/cartitems`,{
      method:'POST',
      body: JSON.stringify(cartItems[Number(index)])
    })
  }
  // Handle Click add to cart button
  const handleClickAddToCart = (product) => {
    // Dispatch the AddToCart action with the product details as payload
    dispatch(AddToCart(product));
    addProductsToCart()
    setTimeout(() => {
      setInCart(false);
    }, 3000)
    setInCart(true); // Update inCart state for UI feedback (optional)

  };

  useEffect(() => {
    try {
      getSingleProductDetails();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getSingleProductDetails = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${productId}`);
      const data = await res.json();
      set_id(data.result[0]._id);
      setImageUrl(data.result[0].imageurl);
      // console.log('Image url: ',data.result[0].imageurl);
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
        <div className="container mx-auto pl-8 pr-8 bg-white shadow-md rounded-md justify-around">
          <div className=" lg:flex justify-around">

            <div className='flex flex-row items-center h-screen justify-around'>
              <div className="flex flex-row justify-around lg:w-1/2 pr-8">
                <img
                  src={imageurl}
                  width={500}
                  height={500}
                  alt="Image Loading..."
                  className=" rounded-xl shadow-md "
                />
              </div>
              <div className="lg:w-1/2">
                {rendered ? (
                  <div>
                    <h1 className="text-3xl font-bold mb-4">{name}</h1>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <p className="text-lg font-semibold mb-4">$ {price}</p>
                    <p className="text-gray-600 mb-4">Category: {category}</p>
                    {inCart ? (
                      <div className='flex justify-center items-center hover:underline text-cyan-500 '>
                        <Link href={'/cart'}>View Cart</Link>
                      </div>
                    ) : ('')}
                    <button
                      className="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-md md:w-1/2 lg:w-1/3 h-16"
                      onClick={() => handleClickAddToCart(productObj)}>
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
      </div>
    </>
  );
};

export default Product;
