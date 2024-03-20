'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AddToCart, RemoveFromCart } from "@/components/redux/action";

const CartPage = ()=>
{
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const [totalItems, setTotalItems] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(()=>
    {
        setTotalItems(cartItems.reduce((acc, item) => acc + item.quantity, 0))
        setSubTotal(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0))
    },[cartItems]);

    const reducerProducts = useSelector(state => state.cartItems);

    useEffect(()=>
    {

    },[totalItems,subTotal])

    const router = useRouter()
    const handleContinueShoppingRoute = ()=>
    {
        router.push('/all')
    } 
    return(
        <>
        {totalItems <= 0?(
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl">Your cart is empty! 😩</h1>
                <Link href="/all" className="text-blue-500 hover:underline">Buy something...😢</Link>
            </div>

        ):(
            <div className="flex justify-center flex-col text-center items-center">

            {reducerProducts.map((val, i)=>(
                <div key={i} className="flex flex-row mt-20">
                    <div className="flex flex-col lg:justify-between items-center justify-between">
                    <img
                        src={val.imageurl}
                        alt="Product Image"
                        className="w-1/2 h-auto rounded-md shadow-md md:w-40"
                        width={350}
                        height={350}
                    />
                        <ul>
                            <li>{val.name}</li>
                            <li>$ {val.price}</li>
                            <li>{val.category}</li>
                            <li><p>Qty: {val.quantity}</p></li>
                        </ul>
                        <div className="flex flex-row justify-between mt-3">
                            <button onClick={()=>dispatch(AddToCart())} className="m-2 bg-red-600 p-2  hover:scale-105 border rounded-lg text-white font-bold"><h1>Decrease</h1></button>
                            <input className=" flex items-center text-center  border border-gray-400 outline-none rounded-lg" type="text" value={val.quantity}/>
                            <button className="m-2 bg-green-600 p-2 hover:scale-105 border rounded-lg text-white font-bold "><h1>Increase</h1></button>                            
                        </div>

                    </div>

                </div>
            ))}
            
            <div className="flex flex-col lg:flex-row justify-between items-center text-center mx-auto lg:w-3/4 lg:px-4 my-16 bg-gray-100 rounded-lg shadow-lg p-8">
                <h1 className="font-bold text-3xl lg:text-4xl font-serif mb-4 lg:mb-0">Your Sub Total: $ {subTotal}</h1>
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-x-4 lg:space-y-0">
                    <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Check Out</button>
                    <button onClick={handleContinueShoppingRoute} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Continue Shopping</button>
                </div>
            </div>

        </div>
        )}

        </>
    )
}


export default CartPage;