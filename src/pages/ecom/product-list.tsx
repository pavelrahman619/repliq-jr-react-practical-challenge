// Assuming Product type definition
type Product = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  // Add other properties as needed
};

// ProductList component
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]); // Define Product[] as the type of products state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=3');
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <h1>Product List</h1>
      <div className='flex flex-row'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <br />
      <Button>Checkout</Button>
    </div>
  );
};

export default ProductList;
