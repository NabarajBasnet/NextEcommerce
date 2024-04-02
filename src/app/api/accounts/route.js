import connectionStr from "@/app/lib/DB"
import User from "@/app/lib/usersSchema/usersSchema"
import mongoose from "mongoose"
import { NextResponse } from "next/server"


export const GET = async()=>
{
    return NextResponse.json({result: true})
} 


export const POST = async(req)=>
{
    await mongoose.connect(connectionStr)
    const payload = await req.json();
    const newData = await new User(payload);
    const savedData = newData.save();
    
    return NextResponse.json({result: savedData, success: true})
}

