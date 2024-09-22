import Card from "../components/Card"
import { members } from "../Constants"
const Team = () => {
  return (
    <main className="flex flex-col flex-1 gap-4 p-4 bg-gradient-to-br from-blue-50 to-white">
        <h1 className="mt-4  text-3xl sm:text-4xl font-bold">Meet the team</h1>
        <p>Our team is comprised of dedicated students who are passionate about computer science and technology. We are committed to providing opportunities for our members to grow and develop their skills.</p>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold mx-auto">Executive Board</h2>
          <div className="flex flex-wrap justify-center sm:justify-between gap-5 my-3  w-full">
            {members.map((member, index) => (
              <Card key={index} name={member.name} title={member.title} interest={member.interests} linkedIn={member.linkedIn} gitHub={member.gitHb}/>
            ))}
          </div>
        </div>
        
    </main>
  )
}

export default Team