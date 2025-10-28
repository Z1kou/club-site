import { CardMember } from "./CardMember"

export default function Member({members, className}: {members: MembersType, className: string}) {
  return (
    <div className={` flex flex-col md:flex-row space-y-4 md:space-y-0  items-center  ${className} `}  >
        {members.map((member, key)=>(
            <CardMember key={key} member={member} />
        ))}
    </div>
  )
}
export type MembersType = {
    index: number,
    title: string,
    image: string
}[]