import EboardCard from "../components/cards/EboardCard"
import MemberCard from "../components/cards/MemberCard";
import { members, currentMembers, links } from "../Constants"
import { motion } from "framer-motion"

const imagePath = (folder, filename) => `/profile-images/${folder}/${filename}`;

const Team = () => {
  return (
    <main className="flex flex-col flex-1 gap-14 p-8 bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-800 mb-3">Meet the Team</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Our executive board and general members work together to build a thriving computer science community at Morgan State.
        </p>
      </motion.section>

      {/* Executive Board */}
      <motion.section 
        className="bg-white p-6 sm:p-8 rounded-xl shadow-md border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-14">Executive Board</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {members.map((member, index) => (
            <EboardCard 
              key={index} 
              name={member.name} 
              title={member.title} 
              interest={member.interests} 
              linkedIn={member.linkedIn} 
              funFact={member.funFact}
              gitHub={member.github}
              image={imagePath("eboard", member.image)}
            />
          ))}
        </div>
      </motion.section>

      {/* General Members */}
      <motion.section 
        className="bg-white p-6 sm:p-8 rounded-xl shadow-md border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">SACS Members</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {[...currentMembers]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((member, index) => (
    <MemberCard 
      key={index}
      name={member.name} 
      image={member.image} 
      linkedIn={member.linkedIn} 
    />
))}
        </div>
      </motion.section>

      {/* Join Section */}
      <motion.section 
        className="text-center bg-blue-700 text-white py-12 px-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <h3 className="text-3xl font-bold mb-4">Want to be part of the team?</h3>
        <p className="mb-6 text-blue-100 max-w-xl mx-auto">
          We're always looking for new members who are excited about tech, learning, and community. Join us today!
        </p>
        <a href={links.signUp} className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-md shadow hover:shadow-lg transition">Join SACS</a>
      </motion.section>
    </main>
  )
}

export default Team;