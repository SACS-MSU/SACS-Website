import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({name,title,interest,linkedIn,gitHub}) => {
  return (
    <div className="flex flex-col  w-80 sm:w-64 lg:w-80  gap-2 p-4 rounded-md bg-white shadow-md shadow-slate-300">
        <img src="src\assets\Placeholder.png" alt="placeholder" className="h-52 w-full rounded aspect-video	"/>
        <h2 className="text-base font-medium">{name}</h2>
        <p className="text-sm">{title}</p>
        <details>
          <summary className="text-xs">Interests</summary>
          <ul className="list-disc pl-5">
            {interest.map((item, index) => (
              <li key={index} className="text-sm p-1">{item}</li>
            ))}
          </ul>
        </details>

        <span className="flex gap-2">
          <a className="text-base" href={linkedIn} target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
          <a className="text-base" href={gitHub} target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
        </span>
    </div>
  )
}

export default Card