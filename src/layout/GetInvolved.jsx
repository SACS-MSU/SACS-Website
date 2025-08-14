import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { links } from "../Constants";

const GetInvolved = () => {
  return (
    <main className="flex flex-col gap-16 p-10 bg-gradient-to-br from-blue-50 to-white flex-1">
      {/* Hero Section */}
      <motion.section 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Get Involved</h1>
        <p className="text-gray-700 text-lg">
          SACS is more than just a club — it's a community. Whether you're a student, alumni, faculty member, or industry partner, there are many ways to get involved.
        </p>
      </motion.section>

      {/* Opportunities Section */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-3">Join SACS</h3>
          <p className="text-gray-700 mb-4">
            Become a member to gain access to workshops, mentoring, career support, and a vibrant network of CS students.
          </p>
          <Link to={links.signUp} className="text-blue-600 hover:underline font-semibold">Become a Member</Link>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-3">Volunteer or Mentor</h3>
          <p className="text-gray-700 mb-4">
            Are you an alum or a professional in tech? Help guide the next generation by offering your time and expertise.
          </p>
          <a href="mailto:msu.sacs64@gmail.com" className="text-blue-600 hover:underline font-semibold">Contact Us</a>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-3">Sponsor Us</h3>
          <p className="text-gray-700 mb-4">
            Partner with us to support student growth through workshops, scholarships, and networking opportunities.
          </p>
          <a href="/sponsorship" className="text-blue-600 hover:underline font-semibold">View Sponsorship Info</a>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-3">Collaborate</h3>
          <p className="text-gray-700 mb-4">
            Have a great event or project idea? We're open to collaborations that benefit students and the CS community.
          </p>
          <a href="mailto:msu.sacs64@gmail.com" className="text-blue-600 hover:underline font-semibold">Let's Collaborate</a>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-xl text-blue-700 font-semibold mb-4">Still not sure how you can contribute?</p>
        <a href="mailto:msu.sacs64@gmail.com" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-800 transition">Reach Out</a>
      </motion.div>
    </main>
  );
};

export default GetInvolved; 