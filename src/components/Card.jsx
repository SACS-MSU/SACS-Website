import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({name,title,interest,linkedIn,gitHub}) => {
  return (
    <div className="flex flex-col  w-80 sm:w-64 lg:w-80 gap-2 p-4 rounded-md bg-white shadow-md shadow-slate-300">
        <img src="https://scontent-lga3-1.xx.fbcdn.net/o1/v/t0/f1/m258/upload_img_683780_09_09_2024_07_34_08_497418_6799251227241172891.jpeg?_nc_ht=scontent-lga3-1.xx.fbcdn.net&_nc_cat=111&ccb=9-4&oh=00_AYCNZJe-GROuoK3epDcVb4a2Y_NzAg21BvhPU-_l8IDA-A&oe=66E0EF19&_nc_sid=5b3566" alt="placeholder" className="h-52 w-56 rounded"/>
        <h2 className="text-base font-medium">{name}</h2>
        <p className="text-sm">{title}</p>
        <details>
          <summary className="text-xs">Interests</summary>
          <ul className="list-disc pl-5">
            {interest.map((item, index) => (
              <li key={index} className="text-sm p-1">{item}</li>
            ))}
          </ul>
        </details>

        <span className="flex gap-2">
          <a className="text-base" href={linkedIn} target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
          <a className="text-base" href={gitHub} target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
        </span>
    </div>
  )
}

export default Card