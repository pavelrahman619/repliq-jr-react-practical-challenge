import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Link from "next/link";
import router from "next/router";
import React from 'react';

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    // Add other properties as needed
};

type ProductCardProps = {
    product: Product | undefined; // Make product prop optional and allow undefined
    handleAddToCart: (product: Product) => void;
    handleProductDetails: (product: Product) => void;
};

const ProductCard = ({ product, handleAddToCart }: ProductCardProps) => {
    // Add error handling for undefined product prop
    if (!product) {
        return <div>Error: Product not found</div>;
    }

    const handleProductDetailsClick = () => {
        // Use router to navigate to product-details page with product as query parameter
        router.push({
            pathname: '/ecom/product-details',
            query: { productId: product.id, productTitle: product.title, productDescription: product.description } // Pass the product details as query parameters
        });
    };

    return (
        <Card key={product.id} className="w-96">
            <CardHeader color="blue" className="relative h-56">
                <img
                    src={`${product.image}`}
                    alt={`${product.title}`}
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {product.id}: {product.title}
                </Typography>
                <Typography variant="h6">
                    Price: ${product.price}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-center py-3">
                <Link href="/ecom/product-details">
                    <Button className="mr-2" onClick={handleProductDetailsClick}>Product Details</Button>
                </Link>

                <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
