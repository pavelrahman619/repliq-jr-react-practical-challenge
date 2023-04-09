import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Input, Typography } from "@material-tailwind/react";

type Customer = {
    id: number;
    name: string;
    email: string;
    totalSpent: number;
    // Add other properties as needed
};

const CustomersList = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [newCustomer, setNewCustomer] = useState<Customer>({
        id: 0,
        name: "",
        email: "",
        totalSpent: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
    };

    const handleAddCustomer = () => {
        // Generate a unique ID for the new customer
        const customerId = Math.max(0, ...customers.map((customer) => customer.id)) + 1;
        setNewCustomer((prevCustomer) => ({ ...prevCustomer, id: customerId }));
        setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    };

    const router = useRouter();

    const handleCustomerDetailsClick = (customerId: number, customerName: string, customerEmail: string, customerTotalSpent: number) => {
        router.push(`/admin/customer-details/${customerId}`);
        router.push({
            pathname: `/admin/customer-details/${customerId}`,
            query: { customerId: customerId, customerName: customerName, customerEmail: customerEmail, customerTotalSpent: customerTotalSpent } // Pass the product details as query parameters
        });
    };

    // Load customers list from session storage on component mount
    useEffect(() => {
        const savedCustomers = sessionStorage.getItem("customers");
        if (savedCustomers) {
            setCustomers(JSON.parse(savedCustomers));
        }
    }, []);

    // Save customers list to session storage whenever it changes
    useEffect(() => {
        sessionStorage.setItem("customers", JSON.stringify(customers));
    }, [customers]);

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold mb-4">Admin Customers List</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleAddCustomer();
                    }}
                >
                    <Typography className="block mb-2">
                        Name:
                        <Input
                            type="text"
                            name="name"
                            value={newCustomer.name}
                            onChange={handleInputChange}
                            className="block w-full mt-1"
                        />
                    </Typography>
                    <Typography className="block mb-2">
                        Email:
                        <Input
                            type="email"
                            name="email"
                            value={newCustomer.email}
                            onChange={handleInputChange}
                            className="block w-full mt-1"
                        />
                    </Typography>
                    {/* Add other customer fields as needed */}
                    <Button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 mt-4"
                    >
                        Add Customer
                    </Button>
                </form>
                <h2 className="text-xl font-bold mt-8 mb-4">Customer List</h2>
                {customers.length > 0 ? (
                    <ul>
                        {customers.map((customer) => (
                            <li key={customer.id}>
                                <p>Id: {customer.id}</p>
                                <p>Name: {customer.name}</p>
                                {/* Add other customer details as needed */}
                                <Button
                                    onClick={() => handleCustomerDetailsClick(customer.id, customer.name, customer.email, customer.totalSpent)}
                                    className="bg-blue-500 text-white px-4 py-2 mt-2"
                                >
                                    Customer Details
                                </Button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No customers found.</p>
                )}
            </div>
        </>
    );
};

export default CustomersList;
