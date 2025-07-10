import { motion } from "framer-motion"
import gold from "../assets/bronze.png"
import silver from "../assets/bronze.png"
import bronze from "../assets/bronze.png"

const tiers = [
  {
    title: "Gold",
    image: gold,
    price: "$4,000",
    benefits: [
      "4 sponsored events",
      "Advertisement on social media",
      "Access to student resume pool",
      "Job opportunity promotion"
    ],
    style: "from-yellow-300 to-yellow-500"
  },
  {
    title: "Silver",
    image: silver,
    price: "$3,000",
    benefits: [
      "2 sponsored events",
      "Advertisement on our social media platform",
      "Job opportunity promotion"
    ],
    style: "from-gray-300 to-gray-500"
  },
  {
    title: "Bronze",
    image: bronze,
    price: "$2,000",
    benefits: [
      "1 sponsored event",
      "Advertisement on our social media platform",
      "Job opportunity promotion"
    ],
    style: "from-[#cd7f32] to-[#b87333]"
  }
]

const Sponsorship = () => {
  return (
    <main className="flex flex-col items-center gap-16 p-8 bg-gradient-to-br from-blue-50 to-white">
      <motion.section
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-blue-800 mb-4">Sponsorship Details</h1>
        <p className="text-lg text-gray-700">
          Partner with SACS to promote your brand, recruit top talent, and support the next generation of tech leaders.
        </p>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            className={`rounded-xl shadow-xl p-6 bg-gradient-to-br ${tier.style} text-black flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform`}
            whileHover={{ scale: 1.05 }}
          >
            <img src={tier.image} alt={tier.title} className="w-20 h-20 object-contain" />
            <h3 className="text-2xl font-bold">{tier.title} Tier</h3>
            <ul className="space-y-2 text-sm font-medium">
              {tier.benefits.map((b, idx) => (
                <li key={idx} className="border-b border-black/20 pb-1">{b}</li>
              ))}
            </ul>
            <p className="text-xl font-bold mt-2">{tier.price}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        className="bg-white shadow-lg rounded-xl p-8 max-w-4xl border text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Download Our Sponsorship Prospectus</h2>
        <p className="text-gray-700 mb-6">
          Learn more about our impact, audience, and the benefits of sponsoring SACS.
        </p>
        <a
          href="/docs/SACS_Sponsorship_Prospectus.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-white bg-blue-700 rounded-md shadow hover:bg-blue-800 transition"
        >
          View Prospectus
        </a>
      </motion.section>

      <motion.p
        className="text-4xl font-extrabold mt-16 text-center text-blue-900 sm:text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        #SACSSetstheStandard
      </motion.p>
    </main>
  )
}

export default Sponsorship
