import { CardSign } from "@/components/sign/CardSign";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="">
        <div className="w-full bg-[#817898]">
            <Link href="/">
                <Image src="/Logo_white.png" width={128} height={128} alt="logo"/>
            </Link>
        </div>
        <div className="sign flex justify-center items-center md:-pt-4 md:h-screen p-2">
            <CardSign />
        </div>
    </div>
  )
}