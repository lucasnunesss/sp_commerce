import { User } from "@/lib/models/item"
import { connectDB } from "@/lib/utils"
import { NextRequest, NextResponse } from "next/server"

export async function GET(){
  connectDB()

  try {
    const users = await User.find({});
    
    return NextResponse.json(users)
  } catch (error) {
    console.log(error)
  }
  return Response.json({message: "Hello"})
}

export async function POST(req: NextRequest){
  connectDB()
  try {
    const reqBody = await req.json()
    const {title,  img, category, description, price} = reqBody

    const user = new User({
      title: title,
      img: img,
      category: category,
      description: description,
      price: price
    }) 
    
    await user.save();
  } catch (error) {
    console.log(error)
  }

  return Response.json({message: "Hello"})
}


