
import Nav from './components/Nav'
import Home from './components/Home'
import bg4 from './assets/bg4.jpg'
import About from './components/About'
import Project from './components/Project'

function App() {
  

  return (
    <>
      <div className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg4})`,
        }}
      >
        <Nav />
        <Home/>
        <About/>
        <Project/>
      </div>
    </>
  )
}

export default App
