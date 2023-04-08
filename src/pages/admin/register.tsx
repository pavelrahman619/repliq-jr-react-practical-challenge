import { useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { Button } from "@material-tailwind/react";


export default function Register() {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        password: '',
    })

    const router = useRouter();
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Perform registration logic here
        // Extract phone number and password from form data
        const { phoneNumber, password } = formData;

        // Create an object to store the registration data
        const registrationData = {
            phoneNumber: phoneNumber,
            password: password
        };

        // Store the registration data in sessionStorage
        sessionStorage.setItem('registrationData', JSON.stringify(registrationData));

        // Store the registration data in localStorage. This one is more permanent
        // localStorage.setItem('registrationData', JSON.stringify(registrationData));

        // Handle successful submission
        // e.g., show success message to user, navigate to next page, etc.
        setSuccessMessage('Registration Successful')

        // Navigate to /login page after a delay of 2 seconds
        setTimeout(() => {
            router.push('/admin/login');
        }, 2000);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="max-w-md w-full mx-auto p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block font-medium mb-1">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Register
                    </Button>
                </form>

                <h4 className="text-center">or</h4>

                <Link href="/admin/login" >
                    <Button className="w-full">Admin Login</Button>
                </Link>
            </div>
            {successMessage && <h2 className="text-blue-600">{successMessage}</h2>}


        </div>
    )
}
