import connectionStr from "@/app/lib/DB"
import Product from "@/app/lib/productsSchema/productSchema";
import mongoose from "mongoose"
import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises'

export const GET = async()=>
{
    await mongoose.connect(connectionStr);
    const data = await Product.find();
    return NextResponse.json({result: data, success: true})
}

export const POST =  async(req)=>
{

    // // 
    // const imageData = await req.formData();
    // const image = imageData.get('image');
    // if(!image){
    //     return NextResponse.json({'message':'image nout found',success: false})
    // }
    // const byteData = await image.arrayBuffer();
    // const buffer = Buffer.from(byteData);
    // const path = `./public/productsimage/${image.name}`;
    // await writeFile(path, buffer);
    // // 

    const payload = await req.json();
    const product = await new Product(payload);
    const data = product.save();
    return NextResponse.json({result: data, success: true})
}

