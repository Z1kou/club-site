"use client"

import {useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type BenefitType = {
    icon: React.ReactNode,
    title: string,
    text: string,
    id: number
}

export function Benefit({benefit}: {benefit: BenefitType}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0, x: 200*benefit.id},
    animate: { y: 0, opacity: 1, x: 0 },
  };
  return (
    <Card className=" w-full md:w-1/3 flex flex-col justify-center bg-white   box-content overflow-x-hidden md:h-[350px] ">
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: benefit.id * 0.4 }}
            ref={ref}
        >
      <CardHeader>
        <CardTitle className="flex items-center justify-center text-[#4E176B]"> {benefit.icon} </CardTitle>
        <CardDescription className="text-center"> {benefit.title} </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <span className="text-[#666666] text-center"> {benefit.text} </span>
      </CardContent>
      </motion.div>
    </Card>
  )
}
