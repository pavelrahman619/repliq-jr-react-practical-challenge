import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Link from "next/link";
import React from 'react';

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    // Add other properties as needed
};

type ProductCardProps = {
    product: Product;
    handleAddToCart: (product: Product) => void;
    handleProductDetails: (product: Product) => void;
};

const ProductCard = ({ product, handleAddToCart }: ProductCardProps) => {
    const { id, title, price, image } = product


    return (
        <Card key={id} className="w-96">
            <CardHeader color="blue" className="relative h-56">
                <img
                    src={`${image}`}
                    alt={`${title}`}
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {title}
                </Typography>
                <Typography variant="h6">
                    Price: ${price}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-center py-3">
                <Link href="/ecom/product-details">
                    <Button className="mr-2">Product Details</Button>
                </Link>

                <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
