import { TopBar } from "./components/TopBar"
import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero"


function App() {



  return (
    <>
      <header>
        <TopBar />
        <NavBar />
      </header>

      <main >
        <div className="flex justify-center h-screen  w-full">
          <Hero />
        </div>
      </main>

    </>
  )
}

export default App
