'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '@/components/redux/action';
import Link from 'next/link';
import Loading from './loading';

const Product = (props) => {
  // JS code
  const productId = props.params.product;   // Current Product Id

  // Redux
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();
  console.log('Cart Items: ',cartItems.length)
  // States
  const [_id, set_id] = useState();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageurl, setImageUrl] = useState('')
  const [rendered, setRendered] = useState(false);
  const [inCart, setInCart] = useState(false);

  const [cartItemsLength, setCartItemsLength] = useState(0)
  useEffect(() => {
      setCartItemsLength(cartItems.reduce((acc, item) => acc + item.quantity, 0))
  }, [cartItems])
  useEffect(() => {
  }, [cartItemsLength]);

  const productObj = { _id, name, description, price, category, imageurl };
  console.log(_id, name, description)
  const addProductsToCart = async () => {
    await fetch('http://localhost:3000/api/cartitems', {
      method: 'POST',
      body: JSON.stringify(productObj)
    })
  }

  const handleClickAddToCart = (product) => {     // Handle Click add to cart button
    // Dispatch the AddToCart action with the product details as payload
    dispatch(AddToCart(product));
    setTimeout(() => {
      addProductsToCart()
    }, 3000)
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

  // JSX code
  return (
    <>
      {rendered ? (

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
                    <div className='flex w-40 flex-row items-center h-16'>
                      <input type='text' placeholder={cartItemsLength} value={cartItemsLength} onChange={(e)=>setCartItemsLength(e.target.value)} className='text-center text-gray-500 border mr-1 w-1/2 border-gray-500 rounded-md h-full'/>
                      <button
                        className="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-md md:w-1/2 lg:w-full h-16"
                        onClick={() => handleClickAddToCart(productObj)}>
                        Add To Cart
                      </button>
                    </div>
                    <div class="flex items-center">
                      <input type="radio" id="star5" name="rating" value="5" class="hidden" />
                      <label for="star5" class="text-yellow-500">&#9733;</label>
                      <input type="radio" id="star4" name="rating" value="4" class="hidden" />
                      <label for="star4" class="text-yellow-500">&#9733;</label>
                      <input type="radio" id="star3" name="rating" value="3" class="hidden" />
                      <label for="star3" class="text-yellow-500">&#9733;</label>
                      <input type="radio" id="star2" name="rating" value="2" class="hidden" />
                      <label for="star2" class="text-yellow-500">&#9733;</label>
                      <input type="radio" id="star1" name="rating" value="1" class="hidden" />
                      <label for="star1" class="text-yellow-500">&#9733;</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      ) : (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Loading />
        </div>
      )}
    </>
  );
};

export default Product;
