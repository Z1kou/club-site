import Member from "./Member"

export default function Members() {
  return (
    <div className="bg-[#7a708b] space-y-4 py-10">
        <h1 className="text-3xl text-white text-center">Welcome to AI Geeks</h1>
        <div className="flex flex-col justify-center items-center space-y-4">
            <Member members={amembers} className="w-3/4 space-x-4" />
            <Member members={bmembers} className="w-3/4 space-x-4" />
            <Member members={cmembers} className="w-3/8 space-x-2" />
        </div>

    </div>
  )
}
const amembers = [
    {
        index: 1,
        title: "President",
        image: "/zak.jpg"
    },
    {
        index: 2,
        title: "Vice President",
        image: "/yassine.jpg"
    },
    {
        index: 3,
        title: "General Secretary",
        image: "/Fatima.jpg"
    },
    {
        index: 4,
        title: "Treasurer",
        image: "/salah.jpg"
    },
    
]
const bmembers = [
    {
        index: 5,
        title: "HR Manager",
        image: "/louba.jpg"
    },
    {
        index: 6,
        title: "R&D Manager",
        image: "/driss.jpg"
    },
    {
        index: 7,
        title: "Event Manager",
        image: "/mana.jpg"
    },
    {
        index: 8,
        title: "Design Manager",
        image: "/kawtar.jpg"
    },
    
]
const cmembers = [
    {
        index: 8,
        title: "Media Manager",
        image: "/mediam.jpg"
    },
    {
        index: 9,
        title: "Sponsoring Manager",
        image: "/lamia.jpg"
    }
]