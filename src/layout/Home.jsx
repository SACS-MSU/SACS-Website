import { LinkButton } from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";
import { links } from "../Constants";

const Home = () => {
  const subTitle = "Morgan State's premier computer science organization";
  
  return (
    <main className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] xl:min-h-[calc(100vh-6rem)] bg-blue-700 text-white">
      <div className="h-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 3xl:py-24">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="w-full max-w-4xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
            <span className="block">
              <p className="inline-block bg-white px-3 py-1 text-blue-700 text-sm sm:text-base font-medium rounded">
                SACS
              </p>
            </span>
            
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl 3xl:text-7xl font-semibold leading-tight">
                The Society for the Advancement of Computer Science
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl 3xl:text-3xl text-blue-100">
                {subTitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-left">
              <form action="" className="w-full sm:w-auto">
                <LinkButton text="Become a member" link={links.signUp} />
              </form>
              <div className="w-full sm:w-auto">
                <SecondaryButton text="Sponsor us" link={links.sponsorship} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;