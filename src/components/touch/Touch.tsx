import Link from "next/link";
import { Button } from "../ui/button";

export default function Touch() {
  return (
    <div className=" bgimage h-screen text-white flex flex-col justify-center items-center space-y-10 pt-10">
        <h3 className="text-xl font-bold">Have a question?</h3>
        <Link href="/">
            <Button className="bg-[#ff71ce] cursor-pointer text-white text-xl rounded-xl">
                Get in Touch
            </Button>
        </Link>
    </div>
  )
}