// Assuming Product type definition
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  // Add other properties as needed
};

// ProductList component
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import router from 'next/router';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]); // Define Product[] as the type of products state
  const [cartItems, setCartItems] = useState<Product[]>([]); // Define Product[] as the type of cartItems state
  const ITEM_LIMIT = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products?limit=${ITEM_LIMIT}`);
        const data = response.data;
        setProducts(data);
        console.log(products)
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle adding product to cart
  const handleAddToCart = (product: Product) => {
    const isItemAlreadyInCart = cartItems.some(cartItem => cartItem.id === product.id);
    if (!isItemAlreadyInCart) {
      const updatedCartItems = [...cartItems, product];
      setCartItems(updatedCartItems);
      sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  const handleProductDetails = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1>Product List</h1>
      <div className='flex flex-row'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} handleProductDetails={() => handleProductDetails(product)} />
        ))}
      </div>
      <br />
      <Link href="/ecom/cart">
        <Button>View Cart</Button>
      </Link>

    </div>
  );
};

export default ProductList;