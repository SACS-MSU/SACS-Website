import Card from "../components/Card"
const Team = () => {
  return (
    <main className="flex flex-col h-full gap-4 p-4">
        <h1 className="mt-4 text-3xl font-bold">Meet the team</h1>
        <p>Our team is comprised of dedicated students who are passionate about computer science and technology. We are committed to providing opportunities for our members to grow and develop their skills.</p>
        
        <h2 className="text-2xl font-semibold mx-auto">Executive Board</h2>
        <div className="flex flex-wrap justify-center gap-5  w-full">
            <Card name='Daniel Oluwarotimi' title='President'/>
            <Card name='Ashley Prayor' title='Vice President'/>
            <Card name='Lenny Uwaeme' title='Webmaster'/>
            <Card name='Krystalyn Douglas' title='Secretary'/>
        </div>
    </main>
  )
}

export default Team