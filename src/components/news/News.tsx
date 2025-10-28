import { FaCalendarAlt } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { FaPeopleCarry } from "react-icons/fa";
import { Benefit } from "./Benefit";


export default function News() {
  return (
    <div className="h-auto md:h-screen bg-gradient-to-r from-[#2C0C3D] via-[#4E176B] to-[#2C0C3D] space-y-6 pb-6  ">
        <h1 className="text-3xl text-white text-center pt-6">Members benefits</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 px-4 md:space-x-4">
            {benefits.map((benefit, key)=>(
                <Benefit key={key} benefit={benefit} />
            ))}
        </div>

    </div>
  )
}
const benefits = [
    {
        id: -1,
        icon: <FaCalendarAlt className="w-16 h-16 -ml-1" />,
        title: "Events & Activities",
        text: `Be the first to know about what we have \n planned and add our group calendar to your schedule`
    },
    {
        id: 0,
        icon: <GrCloudSoftware className="w-16 h-16 -ml-1" /> ,
        title: "Exclusive Resources",
        text: "Get our newsletter and stay in the loop."
    },
    {
        id: 1,
        icon: <FaPeopleCarry className="w-16 h-16 -ml-1" />,
        title: "Connnections",
        text: "Meeting new students with shared interest"
    },
]