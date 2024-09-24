import Card from "../components/Card"
import { members } from "../Constants"
import { about } from "../Constants"
const Team = () => {
  return (
    <main className="flex flex-col flex-1 gap-4 p-4 bg-gradient-to-br from-blue-50 to-white">
        <section>
          <h1 className="mt-4  text-3xl sm:text-4xl font-bold">Meet the team</h1>
          <p>Our team is comprised of dedicated students who are passionate about computer science and technology. We are committed to providing opportunities for our members to grow and develop their skills.</p>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mx-auto">Executive Board</h2>
            <div className="flex flex-wrap justify-center lg:justify-between gap-5 my-3  w-full">
              {members.map((member, index) => (
                <Card key={index} name={member.name} title={member.title} interest={member.interests} linkedIn={member.linkedIn} gitHub={member.gitHb}/>
              ))}
            </div>
          </div>
        </section>
        <section className="">
          <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-sm border">
            <h1 className="text-2xl font-semibold">E-Board Responciblities</h1>
            <div className="container">
              <h2 className='text-lg font-semibold'>President</h2>
              {about.OfficersResponsibilities.President.map((responcibilty,index)=>(
                <li key={index}>{responcibilty}</li>
              ))}
            </div>
            
            <div className="container">
              <h2 className='text-lg font-semibold'>Vice-President</h2>
              {about.OfficersResponsibilities.VicePresident.map((responcibilty,index)=>(
                <li key={index}>{responcibilty}</li>
              ))}
            </div>
            
            <div className="container">
              <h2 className='text-lg font-semibold'>Secretary</h2>
              {about.OfficersResponsibilities.Secretary.map((responcibilty,index)=>(
                <li key={index}>{responcibilty}</li>
              ))}
            </div>

            <div className="container">
              <h2 className='text-lg font-semibold'>Tech Lead</h2>
              {about.OfficersResponsibilities.TechLead.map((responcibilty,index)=>(
                <li key={index}>{responcibilty}</li>
              ))}
            </div>

            <div className="container">
              <h2 className='text-lg font-semibold'>Treasurer</h2>
              {about.OfficersResponsibilities.Treasurer.map((responcibilty,index)=>(
                <li key={index}>{responcibilty}</li>
              ))}
            </div>
          </div>
        </section>
    </main>
  )
}

export default Team