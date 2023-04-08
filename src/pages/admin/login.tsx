import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        phoneNumber: '',
        password: '',
    })

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

        // Store the registration data in sessionStorage
        const registrationData = sessionStorage.getItem('registrationData');

        // Check if registration data exists in sessionStorage
        if (registrationData) {
            const parsedRegistrationData = JSON.parse(registrationData);

            // Compare form data with registration data
            if (phoneNumber === parsedRegistrationData.phoneNumber && password === parsedRegistrationData.password) {
                setSuccessMessage('Login Successful. Redirecting to Dashboard')

                // Handle successful login
                // Route to /dashboard page
                setTimeout(() => {
                    router.push('/admin/dashboard');
                }, 2000);
            } else {
                // Handle invalid login
                // Show error message to user
                setErrorMessage('Invalid phone number or password');
            }
        } else {
            // Handle invalid login
            // Show error message to user
            setErrorMessage('No registration data found. Please register first.');
        }



    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="max-w-md w-full mx-auto p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
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
                        Login
                    </Button>
                </form>
            </div>
            {successMessage && <h2 className="text-blue-600">{successMessage}</h2>}
            {errorMessage && <h2 className="text-blue-600">{errorMessage}</h2>}
        </div>
    )
}
