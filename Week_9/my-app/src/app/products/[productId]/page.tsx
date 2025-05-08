import React from 'react';

const Product = async ({ params }: { params: Promise<{ productId: string }> }) => {
    const  productId  = (await params).productId;

    console.log("getId", productId);

    return (
        <div>Details About Product {productId}</div>
    );
};

export default Product;
