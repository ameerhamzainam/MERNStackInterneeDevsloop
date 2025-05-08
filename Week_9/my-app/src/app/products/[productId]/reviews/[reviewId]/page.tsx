import React from 'react'

const Review = async ({params}:{ params : Promise<{productId : string , reviewId:string }>}) => {


const {productId,reviewId} = await params;


  return (
    <div>Reviews {reviewId} for product {productId} </div>
  )
}

export default Review