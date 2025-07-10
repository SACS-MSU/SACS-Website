import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const MemberCard = ({ name, image, linkedIn }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center p-4 rounded-lg bg-blue-50 shadow hover:shadow-lg transition-shadow"
    >
      <img 
              src={image ?? "/Placeholder.png" }
              alt={name}
              onError={(e) => { e.target.onerror = null; e.target.src = "/Placeholder.png"; }}
        className="w-20 h-20 rounded-full mb-2 object-cover border-2 border-blue-500"
      />
      <h4 className="text-md font-semibold text-blue-800 mb-1">{name}</h4>
      {linkedIn && (
        <a 
          href={linkedIn} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
        </a>
      )}
    </motion.div>
  );
};

export default MemberCard;
