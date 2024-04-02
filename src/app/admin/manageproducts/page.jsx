'use client'

import { useState } from "react"



const ManageProducts = () => {
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  const [stocks, setStocks] = useState()
  const [toggle, setToggle] = useState(false)
  const [emptyField, setEmptyField] = useState(false);
  const [image, setImage] = useState(null)
  const [imageurl, setImgUrl] = useState()
  const [wait, setWait] = useState(false);
  console.log(imageurl);

  // Function to upload image 


  let cld_obj = {
    CLOUD_NAME: 'dhur2ubp8',
    API_KEY: '414511992419123',
    API_SECRET: 'oigXwOx-X-ziEtvbMDo55k2QGnY',
  }

  const handleUploadImage = async (type) => {
    const data = new FormData();
    data.append('file', type === 'image' ? image : null);
    data.append('upload_preset', type === "image" ? 'image_preset' : 'image_preset');

    const resourceType = type === 'image' ? 'image' : null
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cld_obj.CLOUD_NAME}/${resourceType}/upload`, {
      method: 'POST',
      body: data
    })
    const result = await res.json();
    setImgUrl(String(result.secure_url));
    if (!imageurl) {
      setWait(true);
    }
    else {
      setWait(false);
    }
  }


  const prevent = (e) => {
    e.preventDefault();
    handleUploadImage('image')
  }

  // function to submit the product details
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const ImgUrl = handleUploadImage('image');
    try {
      if (!name || !description || !price || !category || !stocks) {
        setTimeout(() => {
          setEmptyField(false);
        }, 1500);
        setEmptyField(true)
      }
      else {
        if (image) {
          await fetch('http://localhost:3000/api/products', {
            method: 'POST',
            body: JSON.stringify({ name, description, price, category, stocks, imageurl })
          })
          console.log(imageurl)
          console.log(name)

        }
        else {
          console.log('Wait...');
        }
        setTimeout(() => {
          setToggle(false)
        }, 1500)
        setToggle(true)
        setName(''), setDescription(''), setPrice(''), setCategory(''), setStocks(''), setImage(null);

      }
    }
    catch (error) {
      alert(error);
    }

  }

  return (
    <div className="flex flex-col items-center">
      {toggle ? (
        <p className="text-green-500 font-sans font-xs">Product Added.</p>
      ) : ('')}
      {emptyField ? (<p className="flex justify-center text-red-600 font-sans font-xs"><b> Empty fields can't prooceed ahed! </b></p>) : ('')}

      <form className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 rounded">
        <div className="flex flex-row items-center">
          <input className='flex flex-row items-center border rounded border-black m-3 px-3 py-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-500' type="file" name="file" onChange={(e) => setImage(e.target.files?.[0])} />
          <button className="bg-black text-white w-28 h-12 rounded-lg hover:bg-gray-700" onClick={(e) => prevent(e)}>Set Image</button>
        </div>

        <input className='border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Product name" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea className="border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Product description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
        <input className='border rounded   border-black m-3' type="text" placeholder="Product price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <div class="border-2 rounded-lg border-black flex items-center justify-center w-64">
          <select class="appearance-none bg-transparent border-none w-full py-2 px-4 leading-tight focus:outline-none" onChange={(e)=>setCategory(e.target.value)}>
            <option value="electronics">Electronics</option>
            <option value="mens clothing">Mens Clothing</option>
            <option value="womens clothing">Womens Clothing</option>
            <option value="gadgets">Gadgets</option>
            <option value="bags">Bags</option>
            <option value="watches">Watches</option>
            <option value="supplements">Supplements</option>
            <option value="bike accessories">Bike Accessories</option>
            <option value="car accessories">Car Accessories</option>
          </select>
        </div>

        <input className='border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="If other category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input className='border rounded border-black m-3 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Stokcs" value={stocks} onChange={(e) => setStocks(e.target.value)} />
      </form>
      <button className='border border-black rounded w-36 py-2 px-4 text-center text-white bg-black hover:bg-gray-700' onClick={handleSubmit}>Add Product</button>
      <img src={imageurl} alt="Image Preview will show here..." width={400} height={400} />
    </div>
  )
}

export default ManageProducts