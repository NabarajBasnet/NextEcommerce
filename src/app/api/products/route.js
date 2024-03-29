import connectionStr from "@/app/lib/DB"
import Product from "@/app/lib/productsSchema/productSchema";
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET = async () => {
    await mongoose.connect(connectionStr);
    const data = await Product.find();
    return NextResponse.json({ result: data, success: true })
}

export const POST = async (req) => {
    const payload = await req.json();
    const product = await new Product(payload);
    const data = product.save();
    return NextResponse.json({ result: data, success: true })
}

