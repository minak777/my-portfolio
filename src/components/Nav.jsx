import  {useState} from 'react';
import {AiOutlineProject,} from 'react-icons/ai'
import {IoHome,IoPerson,IoMail,IoMenu} from "react-icons/io5";




function Nav() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div>
      <IoMenu size={25} onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden text-teal-400'/>
      {
        nav?(
            <div className='fixed w-full h-screen bg-gray-900 flex flex-col justify-center items-center z-20'>
                <a href="#main"  className='w-[75%] flex justify-center items-center  rounded-full shadow-lg bg-gray-800 shadow-teal-600 m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <IoHome size={20} className='text-teal-400'/>
                    <span className='pl-4 text-teal-400'>Home</span>
                </a>
                <a href="#main"  className='w-[75%] flex justify-center items-center  rounded-full shadow-lg bg-gray-800 shadow-teal-600 m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <IoPerson size={20} className='text-teal-400'/>
                    <span className='pl-4 text-teal-400'>About Me</span>
                </a>
                <a href="#main"  className='w-[75%] flex justify-center items-center  rounded-full shadow-lg bg-gray-800 shadow-teal-600 m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20} className='text-teal-400'/>
                    <span className='pl-4 text-teal-400'>Projects</span>
                </a>
                <a href="#main"  className='w-[75%] flex justify-center items-center  rounded-full shadow-lg bg-gray-800 shadow-teal-600 m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <IoMail  size={20} className='text-teal-400'/>
                    <span className='pl-4 text-teal-400'>Contact</span>
                </a>
            </div>
        )
        :
        (
            <div></div>
        )
      }

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className=' border-gray-950 border-2  rounded-full shadow-sm shadow-teal-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            
          >
            <IoHome size={20} className='text-teal-300' />
          </a>

          {/*About*/}
         <a href="#main" className=' border-gray-900 border-2  rounded-full shadow-sm shadow-teal-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            
          >
            <IoPerson size={20} className='text-teal-300' />
          </a>

          {/*project*/}
         <a href="#main" className=' border-gray-900 border-2  rounded-full shadow-sm shadow-teal-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            
          >
            <AiOutlineProject size={20} className='text-teal-300' />
          </a>

         {/*Contact*/}
         <a href="#main" className=' border-gray-900 border-2  rounded-full shadow-sm shadow-teal-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            
          >
            <IoMail size={20} className='text-teal-300' />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Nav
