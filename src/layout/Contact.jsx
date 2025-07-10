import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { socials } from "../Constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <main className="flex flex-col gap-16 p-10 bg-gradient-to-br from-blue-50 to-white flex-1">
      {/* Hero Section */}
      <motion.section 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Get in Touch</h1>
        <p className="text-gray-700 text-lg">
          Questions? Ideas? Want to collaborate? Reach out to us through any of the options below. We’d love to connect with you!
        </p>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Email</h3>
          <a href={socials.email} target="_blank" className="flex items-center gap-3 text-blue-600 hover:underline">
            <FontAwesomeIcon icon={faEnvelope} /> msu.sacs64@gmail.com
          </a>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Socials</h3>
          <div className="flex flex-col gap-3">
            <a href={socials.instagram} target="_blank" className="flex items-center gap-3 text-pink-600 hover:underline">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href={socials.linkedIn} className="flex items-center gap-3 text-blue-700 hover:underline">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href={socials.groupMe} target="_blank" className="flex items-center gap-3 text-green-700 hover:underline">
              <FontAwesomeIcon icon={faUserGroup} /> GroupMe
            </a>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Location</h3>
          <p className="text-gray-700">Morgan State University<br />Computer Science Department</p>
        </div>
      </motion.section>

      {/* Map */}
      <motion.section 
        className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <iframe
          title="SACS Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.245308312478!2d-76.58302128438228!3d39.34481697951714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c804fa91d93f13%3A0x4a13f3b6a3e29d69!2sMorgan%20State%20University!5e0!3m2!1sen!2sus!4v1681743672174!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.section>

      {/* Tagline */}
      <motion.p 
        className="text-4xl font-extrabold mt-16 text-center text-blue-900 sm:text-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        #SACSSetstheStandard
      </motion.p>
    </main>
  )
}

export default Contact