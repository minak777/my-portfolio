function Home() {
  return (
    <div
      id="home"
      className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-gray-950 to-gray-800"
    >
      <div className="max-w-4xl rounded-lg shadow-2xl shadow-black p-10 text-center space-y-6 mx-5">
        {/* Welcome Text */}
        <h1 className="text-5xl font text-white tracking-tight">
          Welcome to My Space
        </h1>

        {/* Introduction Text */}
        <p className="text-lg text-gray-300 leading-relaxed font-light">
          Hi, I’m <span className="text-teal-400 font-semibold">Minase</span>, a
          passionate developer and creative mind dedicated to building
          captivating user experiences.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 transition-all duration-300 shadow-md"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border-2 border-teal-500 text-teal-500 font-medium hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-md"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
