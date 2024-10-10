import { LinkButton } from "../components/Button"
import SecondaryButton from "../components/SecondaryButton"
// import { ReactComponent as Logo } from "../assets/SACS Logo Bold Text Vertical.svg";
import { links } from "../Constants"
const Home = () => {
  const subTitle = "Morgan State's premier computer science organization"
  return (
    <main className="flex flex-col gap-2 p-4 bg-blue-700 text-white flex-1">
      <p className="bg-white p-1 mt-5 text-blue-700 w-14 rounded text-center">SACS</p>
      <h1 className=" text-2xl font-semibold sm:text-4xl">The Society for the Advancement of Computer Science</h1>
      {/* <Logo className="w-10 h-10"/> */}
      <p>{subTitle}</p>
      <span className="flex flex-row gap-3">
        <form action="">
          <LinkButton text="Become a member" link={links.signUp}/>
        </form>
        
        <SecondaryButton text='Sponsor us' link={links.sponsorship}/>
      </span>
    </main>
  )
}

export default Home

