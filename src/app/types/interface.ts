


  export interface Iproduct{
    _id:string,
    productName:string
    category:string
    price:number
    inventory:number
    colors:string[]
    status:string
    image:string,
    description:string
}

  export interface CartItem2 {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  inventory: number;
}



export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}


export interface CartItem1 extends CartItem {
  _id: string; 
}


export interface IProduct {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  image: string,
  description: string;
}


   export interface CartItem1 {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; // Assuming it's a URL string
}

  export interface FormData {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  postalCode: string;
  locality: string;
  state: string;
  country: string;
  email: string;
  phoneNumber: string;
  pan: string;
}


