"use client"

import {useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const abouts = [
    {
        icon: <IoPersonCircleOutline className="w-24 h-24" /> ,
        title: "Officers"
    },
    {
        icon: <FaPeopleGroup className="w-24 h-24" /> ,
        title: "Members"
    },
    {
        icon: <FaCalendarAlt className="w-24 h-24 -ml-1" /> ,
        title: "Events"
    },
    {
        icon: <MdOutlineMail className="w-24 h-24 ml-8" /> ,
        title: "Emails/Newsletters"
    },

]
export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="text-center flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-20 h-auto">
        {abouts.map((about, key)=>(
            <motion.div 
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: key * 0.4 }}
                ref={ref} key={key} className="flex flex-col h-auto text-lg">
                <span> {about.icon} </span>
                <span> {about.title} </span>
            </motion.div>
        ))}
        
    </div>
  )
}