import Button from "../components/Button"
import SecondaryButton from "../components/SecondaryButton"
const Home = () => {
  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-4xl font-semibold">The Society for the Advancement of Computer Science</h1>
      <p>Morgan State&apos;s premier computer science organization </p>
      <span className="flex flex-row gap-3">
        <Button text='Become a member'/>
        <SecondaryButton text='Sponsor us'/>
      </span>
    </main>
  )
}

export default Home

