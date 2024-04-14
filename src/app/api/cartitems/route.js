import connectionStr from "@/app/lib/DB"
import CartItem from "@/app/lib/cartItemSchema/cartItemsSchema";
import mongoose from "mongoose"
import { NextResponse } from "next/server";


export const GET = async () => {
    await mongoose.connect(connectionStr);
    const cartItems = await CartItem.find();
    return NextResponse.json({ reslt: cartItems });
}


export const POST = async (req) => {
    try {
        await mongoose.connect(connectionStr);
        const productPayload = await req.json();
        console.log(productPayload);
        const newCartItem = await new CartItem(productPayload)
        const savedCartItem = newCartItem.save()
        return NextResponse.json({ result: savedCartItem, success: true })
    }
    catch (error) {
        console.error(error)
    }
}