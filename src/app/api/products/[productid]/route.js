import connectionStr from "@/app/lib/DB";
import Product from "@/app/lib/productsSchema/productSchema";
import mongoose, { connect } from "mongoose";
import { NextResponse } from "next/server"



export const GET = async(req, content)=>
{
    await mongoose.connect(connectionStr);
    const productId = content.params.productid;
    const filter = {_id: productId};
    const data = await Product.find(filter);
    return NextResponse.json({result: data, success: true})
}

export const PUT = async(req, content)=>
{
    await mongoose.connect(connectionStr)
    const productId = content.params.productid;
    const filter = {_id: productId};
    const payload = await req.json();
    const data = await Product.findOneAndUpdate(filter, payload);
    return NextResponse.json({result: data, success: true})
}


export const DELETE = async(req, content)=>
{
    await mongoose.connect(connectionStr);
    const productId = content.params.productid;
    const data = await Product.findByIdAndDelete(productId);
    return NextResponse.json({result: data, success: true});
}


