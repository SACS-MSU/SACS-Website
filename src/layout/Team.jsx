import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import Card from "../components/Card"
import { members } from "../Constants"
import { about } from "../Constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Team = () => {
  return (
    <main className="flex flex-col flex-1 gap-8 p-8 bg-gradient-to-br from-blue-50 to-white">
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Team</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our team is comprised of dedicated students who are passionate about computer science and technology. 
            We are committed to providing opportunities for our members to grow and develop their skills.
          </p>
        </div>
        
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">Executive Board</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <Card 
                key={index} 
                name={member.name} 
                title={member.title} 
                interest={member.interests} 
                linkedIn={member.linkedIn} 
                gitHub={member.gitHb}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">E-Board Responsibilities</h2>
          
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700">
                <FontAwesomeIcon icon={faUserCircle} className="text-blue-600"/>
                President
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {about.OfficersResponsibilities.President.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700">
                <FontAwesomeIcon icon={faUserCircle} className="text-blue-600"/>
                Vice-President
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {about.OfficersResponsibilities.VicePresident.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700">
                <FontAwesomeIcon icon={faUserCircle} className="text-blue-600"/>
                Secretary
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {about.OfficersResponsibilities.Secretary.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700">
                <FontAwesomeIcon icon={faUserCircle} className="text-blue-600"/>
                Tech Lead
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {about.OfficersResponsibilities.TechLead.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700">
                <FontAwesomeIcon icon={faUserCircle} className="text-blue-600"/>
                Treasurer
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {about.OfficersResponsibilities.Treasurer.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Team;