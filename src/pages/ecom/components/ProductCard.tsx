import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <Card className="w-96">
            <CardHeader color="blue" className="relative h-56">
                <img
                    src={`${product.image}`}
                    alt={`${product.name}`}
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {product.title}
                </Typography>
                <Typography variant="h6">
                    Price: ${product.price}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-center py-3">
                <Button>Add to Cart</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
