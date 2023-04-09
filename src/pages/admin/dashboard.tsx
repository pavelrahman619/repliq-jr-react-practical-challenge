import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated
        const registrationData = sessionStorage.getItem('registrationData');
        if (registrationData) {
            // If registration data exists in sessionStorage, user is authenticated
            setAuthenticated(true);
        } else {
            // If registration data does not exist, user is not authenticated
            setTimeout(() => {
                router.push('/admin/login'); // Redirect to login page
            }, 2000)
        }
    }, []);

    const handleLogout = () => {
        // Clear session storage data
        sessionStorage.removeItem('registrationData');
        // Route to home page
        router.push('/');
    }

    return (
        <div>
            {authenticated ? (
                <div>
                    <h1>Dashboard page</h1>
                    <Link href="/admin/customers-list">
                        <Button>Customer List</Button>
                    </Link>
                    <br />
                    <br />

                    <Button onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            ) :
                (
                    <h2>Not logged in. Log in first. Redirecting to Login Page...</h2>
                )
            }
        </div>
    )
}
