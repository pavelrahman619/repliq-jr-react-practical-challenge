// Cart.tsx
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type CartItem = {
    id: number;
    title: string;
    price: number;
    image: string;
};

const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const fetchCartItems = () => {
            const items = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
            setCartItems(items);
        };
        fetchCartItems();
    }, []);

    const handleRemoveFromCart = (itemId: number) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <div className='flex flex-col items-center'>
            <h1>Cart</h1>
            {cartItems.map(item => (
                <div key={item.id} className='flex items-center mt-4'>
                    <img src={item.image} alt={item.title} className='w-16 h-16 object-cover mr-4' />
                    <div>
                        <h5>{item.title}</h5>
                        <p>${item.price}</p>
                        <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            className='bg-red-500 text-white px-2 py-1 rounded-md mt-2'
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            {cartItems.length === 0 && (
                <p className='mt-4'>Your cart is empty. Add some items to your cart.</p>
            )}

            <br />
            <Link href="/ecom/product-list">
                <Button>Products List</Button>
            </Link>
            <br />
            <Link href="/ecom/checkout">
                <Button>Checkout</Button>
            </Link>
        </div>
    );
};

export default Cart;
