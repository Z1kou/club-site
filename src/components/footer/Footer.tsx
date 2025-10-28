import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center bg-[#24182e] text-white py-10 space-y-4">
        <div>
            <Image src="/Logo_white.png" width={128} height={128} alt="logo" />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <Link href="">
                <span className="cursor-pointer hover:border-b-2 hover:border-white ">Privacy Policy</span>
            </Link>
            <Link href="">
                <span className="cursor-pointer hover:border-b-2 hover:border-white ">Terms of use</span>
            </Link>    
        </div>
        <h3> &copy; 2024 AI Geeks. All rights reserved.</h3>
    </div>
  )
}