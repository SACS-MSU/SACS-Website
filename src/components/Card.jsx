import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({name, title, interest, linkedIn, gitHub}) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border overflow-hidden">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img 
          src="/Placeholder.png" 
          alt={`${name}'s profile`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col flex-1 p-2.5 space-y-1.5">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">{name}</h2>
          <p className="text-xs text-gray-600">{title}</p>
        </div>

        <details className="group text-xs">
          <summary className="font-medium cursor-pointer hover:text-blue-600 transition-colors">
            Interests
          </summary>
          <ul className="mt-1 list-disc pl-4 text-gray-600">
            {interest.map((item, index) => (
              <li key={index} className="text-xs py-0.5">{item}</li>
            ))}
          </ul>
        </details>

        <div className="flex gap-2 mt-auto pt-1.5">
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-xs" />
            LinkedIn
          </a>
          <a 
            href={gitHub} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xs" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card;