import Button from "../components/Button"
import SecondaryButton from "../components/SecondaryButton"
const Home = () => {
  const subTitle = "Morgan State's premier computer science organization"
  return (
    <main className="flex flex-col gap-2 p-4 bg-blue-700 text-white flex-1">
      <p className="bg-white p-1 mt-5 text-blue-700 w-14 rounded text-center">SACS</p>
      <h1 className=" text-4xl font-semibold sm:text-2xl">The Society for the Advancement of Computer Science</h1>
      <p>{subTitle}</p>
      <span className="flex flex-row gap-3">
        <form action="">
          <Button  text='Become a member'/>
        </form>
        
        <SecondaryButton text='Sponsor us'/>
      </span>
    </main>
  )
}

export default Home

