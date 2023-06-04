
interface HeaderDescription {
  header: string;
  description: string;
}

const SmallHero: React.FC<HeaderDescription> = ({ header, description }) => {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          { /* TODO: Fix proper placement */}
          <div className="absolute inset-x-0 -z-20 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /* style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" */></div>
          </div>
  
          { /* Title, description, and buttons */ }
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-6xl">{ header }</h1>
              <p className="mt-16 lg:px-18 text-lg leading-8 text-gray-600">{ description }</p>
            </div>
          </div>
  
          { /* TODO: Fix proper placement */}
          <div className="absolute inset-x-0 top-0 -z-20 transform-gpu overflow-hidden blur-3xl sm:top-0" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" /* style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" */></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallHero;