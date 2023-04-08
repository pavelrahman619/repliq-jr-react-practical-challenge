import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

export default function Dashboard() {
    const router = useRouter();

    const handleLogout = () => {
        // Clear session storage data
        sessionStorage.removeItem('registrationData');
        // Route to home page
        router.push('/');
    }

    return (
        <div>
            <h1>Dashboard page</h1>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}
