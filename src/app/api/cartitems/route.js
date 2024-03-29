import connectionStr from "@/app/lib/DB"
import CartItem from "@/app/lib/cartItemSchema/cartItemsSchema";
import mongoose from "mongoose"
import { NextResponse } from "next/server";


export const GET = async()=>
{
    await mongoose.connect(connectionStr);
    const cartItems = await CartItem.find();
    return NextResponse.json({reslt: cartItems}); 
}

export const POST = async(req)=>
{
    await mongoose.connect(connectionStr);
    const payload = await req.json();
    const newCartItem = await new CartItem(payload);
    const data = await newCartItem.save();
    return NextResponse.json({result: data, success: true})
}

