'use client'

import { useState } from "react";


const Deleter = (props)=>
{
    const productId = props.id;

    const[deleteflag, setDeleteFlag] = useState(false)
    const handleDeleteProduct = async()=>
    {
        try{
            const res = await fetch(`http://localhost:3000/api/products/${productId}`,{
                method:'DELETE',
            })
            let data = await res.json()
            if(data.success){
                setTimeout(()=>
                {
                    setDeleteFlag(false);
                },1000)
                setDeleteFlag(true);
            }
        }
        catch(error){
            alert(error)
        }

    }
    return(
        <>
        <div>
            {deleteflag?(<p>Product Deleted !</p>):('')}
            <button onClick={handleDeleteProduct}>Delete</button>
        </div>
        </>
    )
}

export default Deleter;