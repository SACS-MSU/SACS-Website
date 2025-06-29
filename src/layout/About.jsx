import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { about, links, testimonials, sponsors, conciseGoals, faqs } from "../Constants";
import { faBullseye, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import banner from "../assets/images/sacs-banner.png";
import { Helmet } from "react-helmet";

const ScrollFadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <main className="flex flex-col gap-24 p-6 sm:p-12 bg-gradient-to-tr from-white via-blue-50 to-blue-100">
      <Helmet>
        <title>About SACS – Morgan State CS Club</title>
        <meta
          name="description"
          content="Learn about the Society for the Advancement of Computer Science at Morgan State University – our mission, goals, membership, and testimonials."
        />
        <meta name="keywords" content="Morgan State, SACS, CS club, computer science, student organization, MSU tech, SACS goals, SACS vision" />
        <meta property="og:title" content="About SACS – Morgan State CS Club" />
        <meta property="og:description" content="Discover the mission and vision of SACS, Morgan State University's premier computer science club. Read student testimonials, FAQs, and more." />
        <meta property="og:image" content="https://morganstatesacs.org/sacs-logo-vertical.svg" />
      </Helmet>

      <header
        className="h-[350px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center 45%",
        }}
      />

      <ScrollFadeIn>
        <section className="text-center max-w-4xl mx-auto" aria-labelledby="about-heading">
          <motion.h1 id="about-heading" className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-lg">
            🚀 About SACS
          </motion.h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            {about.Mission}
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center" aria-labelledby="goals-heading">
          <div className="flex flex-col gap-4">
            <h2 id="goals-heading" className="text-4xl font-bold text-blue-800">🌟 Our Goals</h2>
            <p className="text-gray-700 text-lg">
              At SACS, we equip our students to lead, build, and thrive through these core goals:
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {conciseGoals.map((goal, index) => (
              <motion.li
                key={index}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl shadow-lg bg-white border border-blue-100 hover:shadow-2xl transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="text-white bg-blue-700 p-3 rounded-full w-10 h-10 shadow"
                />
                <span className="text-gray-700 font-semibold text-sm">
                  {goal}
                </span>
              </motion.li>
            ))}
          </ul>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="max-w-5xl mx-auto bg-gradient-to-br from-white via-blue-50 to-blue-100 p-10 sm:p-14 rounded-3xl shadow-2xl text-center border border-blue-200" aria-labelledby="vision-heading">
          <h2 id="vision-heading" className="text-4xl font-bold text-blue-800 mb-4">
            🔭 Our Vision
          </h2>
          <p className="text-lg text-gray-700 mb-6">{about.Vision}</p>
          <a
            href={links.signUp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl"
          >
            ✨ Become a Member
          </a>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-blue-100" aria-labelledby="requirements-heading">
          <h2 id="requirements-heading" className="text-3xl font-bold text-blue-800 mb-4">
            📝 Membership Requirements
          </h2>
          <ul className="space-y-3 text-gray-700 text-base list-disc list-inside">
            {about.MembershipRequirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="max-w-5xl mx-auto text-center" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-blue-800 mb-6">
            💬 Student Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md border border-blue-100 transition-all hover:shadow-xl hover:bg-blue-50"
              >
                <p className="text-gray-700 italic mb-3">"{t.text}"</p>
                <p className="font-bold text-blue-800">- {t.name}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="max-w-6xl mx-auto py-16 text-center space-y-10 overflow-hidden" aria-labelledby="sponsors-heading">
          <h2 id="sponsors-heading" className="text-3xl font-bold text-blue-800">
            🤝 Past Partners & Sponsors
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee gap-20 whitespace-nowrap">
              {[...sponsors, ...sponsors].map((name, i) => {
                const logoPath = `/logos/sponsors/${name
                  .toLowerCase()
                  .replace(/\s/g, "-")}.png`;
                return (
                  <img
                    key={i}
                    src={logoPath}
                    alt={name}
                    className="h-16 w-auto object-contain flex-shrink-0 grayscale hover:grayscale-0 transition duration-300"
                  />
                );
              })}
            </div>
          </div>
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 mt-10">
              Interested in partnering with us?
            </h3>
            <a
              href={links.sponsorship}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              🌟 Become a Sponsor
            </a>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="max-w-4xl mx-auto text-left py-10" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-3xl font-bold text-blue-800 mb-6 text-center">
            ❓ Frequently Asked Questions
          </h2>
          <Accordion.Root type="multiple" className="space-y-4 w-full">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow border border-blue-100 transition-all duration-300 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex justify-between items-center text-left font-semibold text-blue-700 px-4 py-3 focus:outline-none hover:bg-blue-50 transition-colors">
                    <span>{faq.question}</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-2 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-4 py-3 text-gray-600 text-sm data-[state=closed]:animate-accordionUp data-[state=open]:animate-accordionDown">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </section>
      </ScrollFadeIn>
    </main>
  );
};

export default About;
