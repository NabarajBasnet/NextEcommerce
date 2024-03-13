'use client'

import { useEffect, useState } from "react";

const Product = (props)=>
{
    const productId = props.params.product;

    const[name, setName] = useState()
    const[description, setDescription] = useState()
    const[price, setPrice] = useState()
    const[category, setCategory] = useState()
    const[rendered, setRendered] = useState(false)
    

    useEffect(()=>
    {
        try{
            getSingleProductDetails();
        }
        catch(error){
            console.log(error)
        }
    },[]);
    const getSingleProductDetails = async()=>
    {
        try{

            const res = await fetch(`http://localhost:3000/api/products/${productId}`);
            const data = await res.json();
            setName(data.result[0].name)
            setDescription(data.result[0].description)
            setPrice(data.result[0].price)
            setCategory(data.result[0].category)
            if(!name){
                setRendered(true)                    
            }
        }
        catch(error){
            alert(error)
        }
    }
    return(
        <>
        Product
        <div className="w-full flex justify-center items-center h-5/6 flex-col mt-20">
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p>
            {rendered?(
                <button className='rounded p-1 bg-teal-400 font-bold text-white'>Add To Cart</button>
            ):('')}
        </div>
        </>
    )
}

export default Product;