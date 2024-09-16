import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../components/Button"
import { about } from "../Constants"
import { faStar } from "@fortawesome/free-regular-svg-icons"

const About = () => {

  return (
    <main className="flex  flex-1 flex-col gap-5 p-4">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>{about.Mission}</p>
      <div>
        <h2 className="text-2xl font-bold">Goals</h2>
        <ul className="grid grid-cols gap-2 sm:grid-cols-2 md:grid-cols-3" >
          {about.Goals.map((goal, index) => (
            <li key={index} className="p-2 "><FontAwesomeIcon icon={faStar} className="mr-1 text-blue-700"/>{goal}</li>
          ))}
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold">Vision</h2>
      <p>{about.Vision}</p>
      <span className="flex flex-row gap-3">
        <form action="">
          <Button text='Become a member'/>
        </form>
      </span>
    </main>
  )
}

export default About