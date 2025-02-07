
"use server";

// Import Stripe SDK
import Stripe from "stripe";

export async function createPaymentIntent() {
 
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia", 
  });

  try {
  
    const amount = 2000; // USD 20.00

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // Return the client secret for client-side use
    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    // Handle errors (log and rethrow)
    console.error(error);
    throw error;
  }
}


















