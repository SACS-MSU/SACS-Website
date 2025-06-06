import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { about } from "../Constants"
import { links } from "../Constants"
import { faBullseye } from "@fortawesome/free-solid-svg-icons"

const About = () => {

  return (
    <main className="flex  flex-1 flex-col gap-5 p-6 bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-3xl sm:text-4xl font-bold mt-4">About Us</h1>
      <p>{about.Mission}</p>
      <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in">
        <h2 className="text-2xl font-bold my-2">Goals</h2>
        <ul className=" grid grid-cols gap-4  sm:grid-cols-2 md:grid-cols-3" >
          {about.Goals.map((goal, index) => (
            <li key={index} className="flex flex-col gap-2 items-center text-center p-4 rounded-md text-slate-600"><FontAwesomeIcon icon={faBullseye} className="mr-1 p-2 bg-blue-700 rounded-xl text-white h-10 w-10"/>{goal}</li>
          ))}
        </ul>
      </div>
      
      <div className="bg-blue-700 flex flex-col gap-2 px-6 py-12 rounded-xl">
        <div className="">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Vision</h2>
          <p className="text-blue-100 my-4">{about.Vision}</p>
        </div>
        
        <a className="p-2 bg-white w-28 col-span-1 text-blue-700 rounded-md text-2xl font-semibold text-center" href={links.signUp} target="_blank">Join us</a>
      </div>

      <div className="flex flex-col h-72 gap-4 p-4 rounded-xl shadow-md border">
          <h1 className="text-3xl font-bold">Membership Requirements</h1>
          {about.MembershipRequirements.map((req,index)=>(
            <li key={index}>{req}</li>
          ))}
          
      </div>
    </main>
  )
}

export default About