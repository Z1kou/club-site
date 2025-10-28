"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Welcome() {
  return (<div className=" bg-gradient-to-r from-[#2C0C3D] via-[#4E176B] to-[#2C0C3D] ">

    <motion.div className="flex flex-col justify-center h-screen items-center py-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <h1 className="text-3xl text-white">Welcome to AI Geeks</h1>
        <div>
            <Image src="/Logo_white.png" width={256} height={256} alt="logo" />
        </div>
        <div className="my-6">
            <h1 className="text-xl text-white px-2">
            <TypeAnimation
              sequence={[
                "Unraveling Insights",
                1000,
                "Empowering Tomorrow",
                1000,
                "Where Big Data Meets AI",
                1000,
                "Unraveling Insights, Empowering Tomorrow: Where Big Data Meets AI",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </h1>
        </div>
        <Link href="/">
            <Button className="bg-[#ff71ce] cursor-pointer text-white text-xl rounded-xl">
                Join us Today
            </Button>
        </Link>
        
    </motion.div>
  </div>)
}