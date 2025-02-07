
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, comment, productId, rating } = await request.json();

    
    if (!name || !comment || !productId || !rating) {
      return NextResponse.json(
        { message: "Please fill in all fields (name, comment, rating)." },
        { status: 400 }
      );
    }

  
    const newReview = {
      _type: "review",
      name,
      comment,
      product: { _ref: productId },
      rating,
    };

    await client.create(newReview);

  
    return NextResponse.json(
      { message: "Review submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting review:", error);
    return NextResponse.json(
      { message: "Error submitting review. Please try again later." },
      { status: 500 }
    );
  }
}
