import { LinkButton } from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";
import { links, qualities } from "../Constants";
import { motion } from "framer-motion";
import logo from "../assets/images/sacs-logo.png";

const gridZones = [
  { top: "5%", left: "55%" },
  { top: "15%", left: "60%" },
  { top: "25%", left: "65%" },
  { top: "35%", left: "70%" },
  { top: "45%", left: "75%" },
  { top: "55%", left: "80%" },
  { top: "65%", left: "85%" },
];

const shuffledZones = [...gridZones].sort(() => Math.random() - 0.5);

const Home = () => {
  const subTitle = "Morgan State's premier computer science organization";

  return (
    <main className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-900 via-blue-700 to-orange-300 text-white overflow-hidden">
      {/* Background logo watermark */}
      <img
        src={logo}
        alt="SACS Logo Watermark"
        className="absolute opacity-50 w-96 sm:w-[650px] top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
      />

      {/* Card layer container */}
      <div className="absolute inset-0 hidden sm:block">
        {qualities.map((text, index) => {
          const position = shuffledZones[index % shuffledZones.length];
          return (
            <motion.div
              key={index}
              className="z-10 group absolute w-60 h-32 bg-white bg-opacity-10 rounded-2xl backdrop-blur-2xl border border-white border-opacity-20 flex items-center justify-center text-white text-xl font-semibold cursor-pointer hover:scale-105 transition-transform"
              style={position}
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 8, repeat: Infinity, delay: index * 0.8 }}
            >
              <span className="relative">
                {text}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-1 text-sm text-white bg-black bg-opacity-70 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {`SACS values ${text.toLowerCase()} in our community`}
                </span>
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center items-start text-left min-h-[calc(100vh-4rem)]">
        <p className="bg-white text-blue-700 font-semibold px-4 py-1 rounded-full text-sm sm:text-base shadow">
          SACS
        </p>

        <motion.h1
          className="z-10 text-4xl sm:text-5xl lg:text-6xl font-bold mt-8 leading-tight max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Society for the Advancement of Computer Science
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {subTitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <LinkButton text="Become a member" link={links.signUp} />
          <SecondaryButton text="Sponsor us" link={links.sponsorship} />
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
