'use client'

import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "@/components/redux/action";
import { useEffect, useState } from "react";



const CartPage = ()=>
{
    const[cartProducts, setCartProducts] = useState([]);
    const reducerProducts = useSelector(state => state.cartItems);
    
    console.log(cartProducts)

    useEffect(()=>
    {
        handleSetCartItemsInCart()
    },[]);

    const handleSetCartItemsInCart = async()=>
    {
        const res = await reducerProducts;
        setCartProducts(res);
        console.log(res)
    }
    return(
        <>
        <div className="flex justify-center flex-col text-center items-center">
            <h1 className="mt-20">Cart Page</h1>

            {cartProducts.map((val, i)=>(
                <div key={i} className="flex mt-20">
                    <ul>
                    <img
                        src="https://via.placeholder.com/200x200"
                        alt="Product Image"
                        className="w-full h-auto rounded-md shadow-md md:w-64"
                    />
                        <li>{val.name}</li>
                        <li>{val.price}</li>
                        <li>{val.category}</li>
                    </ul>
                </div>
            ))}
        </div>
        </>
    )
}


export default CartPage;