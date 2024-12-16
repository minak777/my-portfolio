import Nav from "./components/Nav";
import Home from "./components/Home";

import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-cover bg-center scroll-smooth overflow-x-hidden">
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
