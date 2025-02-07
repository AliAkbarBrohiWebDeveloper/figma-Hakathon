import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";


interface CartItem{
  id:string,
  name:string,
  quantity:number,
  price:number,
  image:string

}

interface RequestBody{
  firstName:string,
  lastName:string,
  email:string,
  Address:string,
  Phone:number,
  cartItems:CartItem[],
  totalPrice:string
}



export async function   POST(req:NextRequest){

try{

  const {firstName,lastName,email,Address,Phone,cartItems,totalPrice}:RequestBody=await req.json()

  const customerDoc=await client.create({
    _type:"customer",
    firstName,
    lastName,
    email,
    Address,
    Phone


  })

  const orderDoc=await client.create({
    _type:"order",
    orderNumber:`ORD-${Date.now()}`,
    customer:{
      _type:"reference",
      _ref :customerDoc._id
    },
    orderItems:cartItems.map(item=>({
      _type:"reference",
      _ref:item.id
    })),
    totalPrice:parseFloat(totalPrice),
    orderStatus:"pending"

  });
    return NextResponse.json({
      maessage:("order ande customer related succesfully"),
      orderDoc,
      customerDoc
    });




}catch(error){
  console.error("Erroe creating documents", error);
  return NextResponse.json({
    error: error instanceof Error ? error.message : 'An unknown error occurred',

  },{status:500})

  

}

}


export async function GET(){
  return NextResponse.json({
    message:"Method Not Allowed"
  },{status:405})
}
















