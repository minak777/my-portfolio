import Nav from "./components/Nav";
import Home from "./components/Home";
import bg4 from "./assets/bg4.jpg";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div
        className="h-full w-full bg-cover bg-center  overflow-x-hidden"
        style={{
          backgroundImage: `url(${bg4})`,
        }}
      >
        <Nav />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
