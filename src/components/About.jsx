function About() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-gray-950 to-gray-800 p-6">
      <div className="flex flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 max-w-5xl w-full space-y-8">
        {/* Heading */}
        <h1 className="text-teal-200 text-4xl md:text-5xl font-bold text-center">
          About Me
        </h1>

        {/* Description */}
        <p className="text-teal-100 text-base md:text-lg lg:text-xl text-center leading-relaxed max-w-3xl">
          I am a computer science graduate based in Addis Ababa, Ethiopia.
          Passionate about technology and continuously improving my skills.
        </p>

        {/* Skills Section */}
        <div className="w-full">
          <h2 className="text-teal-200 text-2xl md:text-3xl font-semibold text-center mb-6">
            Skills
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Development */}
            <div className="flex flex-col items-center">
              <h3 className="text-teal-300 text-lg md:text-xl font-semibold mb-2">
                Frontend Development
              </h3>
              <ul className="text-teal-100 text-sm md:text-base space-y-1 text-center">
                <li>React.JS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>WordPress</li>
              </ul>
            </div>

            {/* Mobile App Development */}
            <div className="flex flex-col items-center">
              <h3 className="text-teal-300 text-lg md:text-xl font-semibold mb-2">
                Mobile App Development
              </h3>
              <ul className="text-teal-100 text-sm md:text-base space-y-1 text-center">
                <li>Flutter</li>
                <li>Firebase</li>
              </ul>
            </div>

            {/* Version Control */}
            <div className="flex flex-col items-center">
              <h3 className="text-teal-300 text-lg md:text-xl font-semibold mb-2">
                Version Control
              </h3>
              <ul className="text-teal-100 text-sm md:text-base space-y-1 text-center">
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
