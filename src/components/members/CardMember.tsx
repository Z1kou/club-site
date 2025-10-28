"use client"

import {useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import { cn } from "@/lib/utils"


export type MemberType = {
    index: number,
    title: string,
    image: string
}


export function CardMember({member}: {member: MemberType}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0, x: 200*member.index},
    animate: { y: 0, opacity: 1, x: 0 },
  };
  return (
    <Card ref={ref} className={cn("w-[280px] h-[220px]  flex flex-col justify-center bg-white box-content",
            member.title === "President" || "R&D Manager" ? "ml-3" : "md:mx-0"
    )}>
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 , delay: member.index * 0.4 }}
        >
      
      <CardContent className="flex flex-col justify-center items-center">
        <div>
            <Image src={member.image} width={128} height={128} alt="member" />
        </div>
        <div>
            <span className="text-lg">{member.title} </span>
        </div>
      </CardContent>
      </motion.div>
    </Card>
  )
}
