import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    // Add other properties as needed
};

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { id, title, price, image } = product;
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>Product Details</h1>
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
        <Button onClick={handleBack}>Back</Button>
      </Card>
    </div>
  );
};

export default ProductDetails;
