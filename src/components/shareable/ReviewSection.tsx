
// interface Review{
//   _id?:string,
//   name:string,
//   comment: string;
//   date:string,
//   rating:number
// }


// interface ReviewSectionProps{
//   productId:string
// }



// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';


// const ReviewSection:React.FC<ReviewSectionProps> = ({productId}) => {


//   const [reviews,setReviews]=useState<Review[]>([]);
//   const [reviewText,setReviewText]=useState('');
//   const [reviewName,setReviewName]=useState("")
//   const [rating,setRating]=useState(0)


// useEffect(()=>{

// const fetchReviews=async ()=>{
//   const response=await fetch(`/api/reviewSubmit?productId=${productId}`);
//   const data=await response.json();

//   if (response.ok){
//     setReviews(data.reviews)
//   }else{
//     toast.error("Failed to load Reviews")
//   }
// };
// fetchReviews()



// },[productId])


// const handleSubmitReview=async ()=>{
//   if (reviewName && reviewText && rating){
//     const newReview={
//       name:reviewName,
//       comment:reviewText,
//       productId,
//       rating,
//     date:new Date().toISOString()
//     };


//     setReviews([newReview, ...reviews]);

//     try{
//       const response=await fetch('api/ReviewSubit',{
//         method:"POST",
//         headers:{
//           "Content-Type":"application/json",


//         },
//         body:JSON.stringify(newReview)

        
//       });

//       const data=await response.json();
//       if (response.ok){
//         setReviewName(""),
//         setReviewText(""),
//         setRating(0)
//         toast.success("Review Submitted succesfully")
//       }else {
//         toast.error(data.message || "Error in submitting the review")
//       }
//     }catch(error){
//       toast.error("There was an error submitting your review.");
//     }
//   }else {
//     toast.error("Please fill in all fields (name, comment, and rating)!");
//   }
// }


//   return (
//   <section className='mt-12'>

// <h2 className='text-2xl font-e=semibold'>Reviews</h2>
// <input type="text"
// placeholder='Your Name'
// value={reviewName}
// onChange={(e)=>setReviewName(e.target.value)}
// className='border my-2 p-2 w-full'



// />

// <textarea 
// placeholder='Your Review'
// value={reviewText}
// onChange={(e)=>setReviewText(e.target.value)}
// className='border my-2 p-2 w-full'
// />
// <div className='flex items-center my-2'>

// <span className='mr-2'>Rating:</span>
// {[1,2,3,4,5].map((Star)=>(
//   <button key={Star}
//   onClick={()=>setRating(Star)}
//   className={`text-xl ${rating >= Star ? "text-yellow-500" : "text-gray-400"}`}
  
//   > ★</button>


// ))
// }

// </div>
// <button onClick={handleSubmitReview} className='px-6 py-2 mt-2 bg-indigo-700 rounded-sm text-white w-full'>Submit Review</button>

// <div className='mt-8'>

// <h2 className='text-2xl font-semibold '>Reviews</h2>
// <div className='space-y-4'>
// {Array.isArray(reviews)&& reviews.length>0 ?(

// reviews.map((review)=>(
//   <div key={review._id}>


// <p className='text-lg font-semibold'>{review.name}</p>
// <p className='text-gray-600'>{review.comment}</p>
// <p className='text-sm text-gray-500'>{new Date(review.date).toLocaleDateString()}</p>

// <div className="flex items-center">                   {[1, 2, 3, 4, 5].map((star) => (
//                     <span
//                       key={star}
//                       className={`text-4xl ${review.rating >= star ? "text-yellow-500" : "text-gray-400"}`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>

//   </div>

 

// ))

// ):(
//   <p>No reviews yet. Be the first to leave a review!</p>
// )}



// </div>


// </div>


//   </section>
//   )
// }

// export default ReviewSection



 import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface Review {
  _id?: string;
  name: string;
  comment: string;
  date: string;
  rating: number;
}

interface ReviewSectionProps {
  productId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(`/api/reviewSubmit?productId=${productId}`);
      const data = await response.json();
      if (response.ok) {
        setReviews(data.reviews);
      } else {
        toast.error("Failed to load reviews");
      }
    };

    fetchReviews();
  }, [productId]);

  const handleSubmitReview = async () => {
    if (reviewName && reviewText && rating) {
      const newReview = {
        name: reviewName,
        comment: reviewText,
        productId,
        rating,
        date: new Date().toISOString(), 
      };

    
      setReviews([newReview, ...reviews]); 

      try {
        const response = await fetch("/api/ReviewSubmit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        });

        const data = await response.json();
        if (response.ok) {
          setReviewName(""); // Reset the form fields
          setReviewText("");
          setRating(0); // Reset the rating
          toast.success("Review submitted successfully!");
        } else {
          toast.error(data.message || "Error submitting review.");
        }
      } catch (error) {
        toast.error("There was an error submitting your review.",);
        console.log(error);
        
      }
    } else {
      toast.error("Please fill in all fields (name, comment, and rating)!");
    }
  };

  return (
    <div className="mt-8">
      {/* Review Form */}
      <h2 className="text-2xl font-semibold">Leave a Review</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={reviewName}
        onChange={(e) => setReviewName(e.target.value)}
        className="border p-2 w-full my-2"
      />
      <textarea
        placeholder="Your Review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        className="border p-2 w-full my-2"
      />
      <div className="flex items-center my-2">
        <span className="mr-2">Rating:</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-xl ${rating >= star ? "text-yellow-500 " : "text-gray-400 text-2xl"}`}
          >
            ★
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmitReview}
        className="w-full py-3 px-6 bg-indigo-800 text-white font-semibold rounded-md"
      >
        Submit Review
      </button>

    
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <div className="space-y-4">
         
          {Array.isArray(reviews) && reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review._id} className="border p-4 rounded-lg">
                <p className="text-lg font-semibold">{review.name}</p>
                <p className="text-gray-600">{review.comment}</p>
                <p className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-4xl ${review.rating >= star ? "text-yellow-500 text-2xl" : "text-gray-400"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to leave a review!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;



































