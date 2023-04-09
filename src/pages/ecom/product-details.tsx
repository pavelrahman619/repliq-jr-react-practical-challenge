import React from 'react';
import { useRouter } from 'next/router';

const ProductDetailsPage = () => {
    const router = useRouter();
    const { productId, productTitle, productDescription } = router.query; // Access the query parameters

    // Render the product details using the received data
    return (
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {productId}</p>
            <p>Product Title: {productTitle}</p>
            <p>Product Description: {productDescription}</p>
            {/* Render other product details using the received data */}
        </div>
    );
};

export default ProductDetailsPage;
