'use client'

import { useEffect } from "react";
import { useSelector} from "react-redux";


const CartPage = ()=>
{


    const reducerProducts = useSelector(state => state.cartItems);
    const subTotal = useSelector(state => state.subTotal);

    useEffect(()=>
    {

    },[subTotal])

    console.log(reducerProducts)
    return(
        <>
        <div className="flex justify-center flex-col text-center items-center">
            <h1 className="mt-20">Cart Page</h1>

            {reducerProducts.map((val, i)=>(
                <div key={i} className="flex mt-20">
                    <ul>
                    <img
                        src="https://via.placeholder.com/200x200"
                        alt="Product Image"
                        className="w-full h-auto rounded-md shadow-md md:w-64"
                    />
                        <li>{val.name}</li>
                        <li>$ {val.price}</li>
                        <li>{val.category}</li>
                        <li> <b> <p> Qty: {val.quantity}</p></b></li>
                    </ul>
                    <h1>Sub Total: {subTotal}</h1>

                </div>
            ))}
        </div>
        </>
    )
}


export default CartPage;