'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AddToCart, RemoveFromCart } from "@/components/redux/action";

const CartPage = ()=>
{

    const[cartItemsdb, setCartItemsDb] = useState([]);
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const [totalItems, setTotalItems] = useState(0);
    const [subTotal, setSubTotal] = useState(0);



    useEffect(()=>
    {
        // getCartItemsFromDb()
        setTotalItems(cartItems.reduce((acc, item) => acc + item.quantity, 0))
        setSubTotal(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0))
    },[cartItems]);

    const reducerProducts = useSelector(state => state.cartItems);
    console.log(reducerProducts);

    useEffect(()=>
    {

    },[totalItems,subTotal])

    const router = useRouter()
    const handleContinueShoppingRoute = ()=>
    {
        router.push('/all')
    } 


    // console.log('Cart Data: ',cartItemsdb.length);
    // JSX Code
    return(
        <>
        {reducerProducts <= 0?(
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl">Your cart is empty! 😩</h1>
                <Link href="/all" className="text-blue-500 hover:underline">Buy something...😢</Link>
            </div>

        ):(
            <div className="flex justify-center flex-col text-center items-center">

            {reducerProducts.map((val, i)=>(
                <div key={i} className="flex flex-row mt-20">
                    <div className="flex flex-row w-screen border-2 border-gray rounded items-center justify-around p-4">
                    <Link href={`all/${val._id}`}>
                    <img
                        src={val.imageurl}
                        alt="Product Image"
                        className="w-1/2 h-auto rounded-md shadow-md md:w-40"
                        width={350}
                        height={350}
                    />
                    </Link>

                        <ul className="flex flex-col text-start">
                            <li><Link href={`all/${val._id}`}><b>{val.name} </b></Link></li>
                            <li>{val.category}</li>
                            <div className="flex flex-col">
                                <button><p className="text-3xl text-white bg-black rounded-full">-</p></button>
                                <li className="flex flex-row items-center">
                                <input 
                                    className="placeholder-black placeholder-bold outline-1  text-center rounded-full p-2 text-base font-bold" 
                                    type="text" 
                                    placeholder={val.quantity} 
                                />
                                </li>
                                <button><p className="text-3xl text-white bg-black rounded-full">+</p></button>

                            </div>

                        </ul>
                        <div className="flex flex-col justify-between mt-3">
                            <h1><b>$ {val.price}</b></h1>
                            <button className="m-2 p-2 hover:scale-105 rounded-lg text-gray-700 font-bold "><h1>Remove</h1></button>                            
                        </div>

                    </div>

                </div>
            ))}
            
            <div className="flex flex-col lg:flex-row justify-between items-center text-center mx-auto lg:w-3/4 lg:px-4 my-16 bg-gray-100 rounded-lg shadow-lg p-8">
                <h1 className="font-bold text-3xl lg:text-4xl font-serif mb-4 lg:mb-0">Your Sub Total: $ {subTotal}</h1>
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-x-4 lg:space-y-0">
                    <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Check Out</button>
                    <button onClick={handleContinueShoppingRoute} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Continue Shopping</button>
                </div>
            </div>

        </div>
        )}

        </>
    )
}


export default CartPage;