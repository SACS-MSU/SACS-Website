import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

const EboardCard = ({ name, title, funFact, linkedIn, gitHub, image=null }) => {
  return (
    
    <motion.div 
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.currentTarget.click();
        }
      }}
      className="relative bg-white rounded-2xl shadow-lg border p-4 flex flex-col items-center text-center space-y-4 cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-md -mt-16 bg-white">
        <img 
          src={image ?? "/Placeholder.png" }
          alt={`${name}'s profile`} 
          onError={(e) => { e.target.onerror = null; e.target.src = "/Placeholder.png"; }}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-1">
        <h2 className="text-lg font-bold text-blue-900">{name}</h2>
        <p className="text-sm text-blue-600 italic">{title}</p>
      </div>

      {funFact && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded p-3 shadow-inner">
          <p className="italic">"{funFact}"</p>
        </div>
      )}

      <div className="flex justify-center gap-4">
        {linkedIn && (
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        )}
        {gitHub && (
          <a 
            href={gitHub} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        )}
      </div>
    </motion.div>
    
  )
}

export default EboardCard;