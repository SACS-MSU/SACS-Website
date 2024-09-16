import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { socials } from "../Constants"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
const Contact = () => {
  return (
    <main className="flex flex-col gap-4 p-5">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Contact us</h1>
        <p>We&apos;d love to hear from you! Whether you have a question about our organization, want to join us, or just want to say hello, feel free to reach out.</p>
        <p className="flex gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
        E-mail
        </p>

      </section>
      
      <section className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">Connect with us</h3>
        <p>Follow us on social media to stay up-to-date with our events and activities.</p>
        <span className="flex gap-4 items-center">
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram}  className="text-2xl"/> Instagram</a>
          <a href=""> <FontAwesomeIcon icon={faLinkedin}  className="text-2xl"/> Linkedin</a>
          <a href={socials.groupMe} target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faUserGroup} className="text-2xl"/>GroupMe</a>
        </span>
      </section>

      <p className="text-3xl font-semibold mt-auto mx-auto sm:text-6xl">#SACSSetstheStandard</p>
    </main>
  )
}

export default Contact