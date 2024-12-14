
function About() {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-gradient-to-r from-gray-950 to-gray-800'>
      <div className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 max-w-3xl w-full">
        
        {/* Heading */}
        <span className='text-teal-200 text-5xl font-semibold mb-4'>About Me</span>
        
        {/* Description */}
        <p className='text-teal-100 text-2xl mb-8'>
          I am a computer science graduate based in Addis Ababa, Ethiopia. Passionate about technology and continuously improving my skills.
        </p>
        
        {/* Skills Heading */}
        <span className='text-teal-200 text-4xl font-semibold mb-4'>Skills</span>
        
        {/* Skills List */}
        <ul className='text-teal-100 text-xl space-y-2'>
          <li>Frontend web development using React.js, HTML, CSS, and WordPress</li>
          <li>Mobile app development using Flutter and Firebase</li>
        </ul>

      </div>
    </div>
  )
}

export default About;
