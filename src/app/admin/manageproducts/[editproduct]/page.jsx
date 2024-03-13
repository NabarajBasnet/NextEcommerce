'use client'


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"



const EditProducts = (props) =>
{
    const productId = props.params.editproduct;

    const[edited, setEdited] = useState(false);

    const[name, setName] = useState()
    const[description, setDescription] = useState()
    const[price, setPrice] = useState()
    const[category, setCategory] = useState()
    const[stocks, setStocks] = useState()
    const[image, setImage] = useState()
    const[toggle, setToggle] = useState(false)

  // Get method when reload
  useEffect(()=>
  {
    getProductsWithReload()
  },[]);
  const getProductsWithReload = async()=>
  {
    const res = await fetch(`http://localhost:3000/api/products/${productId}`)
    const data = await res.json();
    setName(data.result[0].name)
    setDescription(data.result[0].description)
    setPrice(data.result[0].price)
    setCategory(data.result[0].category)
    setStocks(data.result[0].stocks)
  }

  const router = useRouter()

  // function to submit the product image
  const uploadImage = async(e)=>
  {
    e.preventDefault();
    const data = new FormData();
    data.set('image', image);
    await fetch('api/products',{
      method:'POST',
      body:data
    })
  }

  // function to submit the product details
  const handleSubmit = async(e)=>
  {
    try{
      if(!name && !description && !price && !category && !stocks && !image)
      {
        alert('Empty fields')
      }
      else{
  
      await fetch(`http://localhost:3000/api/products/${productId}`,{
        method:'PUT',
        body:JSON.stringify({name, description, price, category, stocks})
      })
      // uploadImage(e);
      setTimeout(()=>{
        setToggle(false)
      },1500);
      setToggle(true);
      setName(''), setDescription(''), setPrice(''), setCategory(''), setStocks('');
     router.push('/admin/allproducts')
    }
    }
    catch(error){
      alert(error);
    }

  }

    return (
      <div className="flex flex-col items-center">
        {toggle?(
          <p className="text-sky-500">Update Changed</p>
        ):('')}
        <form className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 rounded">
          <input className='border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Product name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <textarea className="border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Product description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <input className='border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Product price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          <input className='border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Product category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
          <input className='border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Stokcs" value={stocks} onChange={(e)=>setStocks(e.target.value)}/>
          <input className='border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type="file" name="file" onChange={(e)=>setImage(e.target.files?.[0])} />
        </form>
        <button className='border border-cyan-600 rounded w-36 py-2 px-4 text-center text-white bg-cyan-500 hover:bg-cyan-700' onClick={handleSubmit}>Confirm Change</button>
      </div>
    )
  }
  
  export default EditProducts