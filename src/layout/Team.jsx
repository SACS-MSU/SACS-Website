import Card from "../components/Card"
import { members } from "../Constants"
const Team = () => {
  return (
    <main className="flex flex-col flex-1 gap-4 p-4">
        <h1 className="mt-4 text-3xl font-bold">Meet the team</h1>
        <p>Our team is comprised of dedicated students who are passionate about computer science and technology. We are committed to providing opportunities for our members to grow and develop their skills.</p>
        
        <h2 className="text-2xl font-semibold mx-auto">Executive Board</h2>
        <div className="flex flex-wrap justify-center gap-5  w-full">
           {members.map((member, index) => (
            <Card key={index} name={member.name} title={member.title} interest={member.interests}/>
           ))}
        </div>
    </main>
  )
}

export default Team