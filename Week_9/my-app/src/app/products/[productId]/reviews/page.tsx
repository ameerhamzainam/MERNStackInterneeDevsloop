import React from 'react'

const Reviews = async ({ params }:{params : Promise<{productId:string, reviewId:string}>} ) => {

  const productId = (await params).productId;
  // const productReviews = (await params).reviewId;




  return (
    <div>
          <h1>Reviews of this Product {productId} are:</h1>

          <ul>Best</ul>
          <ul>I like this Product</ul>
          <ul>Good</ul>

    </div>
  )
}

export default Reviews