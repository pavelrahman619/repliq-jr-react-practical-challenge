import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1>Ecommerce Home Page</h1>
      <Link href="/admin/register">
        <Button>Admin Register</Button>
      </Link>
    </div>
  )
}
