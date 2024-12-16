import { useState } from "react";
import { AiOutlineProject } from "react-icons/ai";
import { IoHome, IoPerson, IoMail, IoMenu, IoClose } from "react-icons/io5";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" ">
      {/* Menu Icon */}
      {nav ? (
        <IoClose
          size={30}
          onClick={handleNav}
          className="fixed top-5 right-5  z-[99] md:hidden text-teal-400 cursor-pointer"
        />
      ) : (
        <IoMenu
          size={30}
          onClick={handleNav}
          className="fixed top-5 right-5 z-[99] md:hidden text-teal-400 cursor-pointer"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 w-[80%] h-screen bg-gradient-to-r from-gray-950 to-gray-800 flex flex-col justify-center items-center z-20 transition-transform ease-in-out duration-300 transform ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#home"
          onClick={handleNav} // Close the menu when clicked
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-black m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          <IoHome size={20} className="text-teal-400" />
          <span className="pl-4 text-teal-400 font-medium">Home</span>
        </a>
        <a
          href="#about"
          onClick={handleNav} // Close the menu when clicked
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-black m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          <IoPerson size={20} className="text-teal-400" />
          <span className="pl-4 text-teal-400 font-medium">About Me</span>
        </a>
        <a
          href="#projects"
          onClick={handleNav} // Close the menu when clicked
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg  shadow-black m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          <AiOutlineProject size={20} className="text-teal-400" />
          <span className="pl-4 text-teal-400 font-medium">Projects</span>
        </a>
        <a
          href="#contact"
          onClick={handleNav} // Close the menu when clicked
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg shadow-black m-5 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          <IoMail size={20} className="text-teal-400" />
          <span className="pl-4 text-teal-400">Contact</span>
        </a>
      </div>

      {/* Desktop Sidebar */}
      <div className="md:block hidden fixed top-[25%] z-10 m-2 p-4">
        <div className="flex flex-col">
          <a
            href="#home"
            className="border-gray-950 border-2 rounded-full shadow-sm shadow-teal-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <IoHome size={20} className="text-teal-300" />
          </a>
          <a
            href="#about"
            className="border-gray-900 border-2 rounded-full shadow-sm shadow-teal-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <IoPerson size={20} className="text-teal-300" />
          </a>
          <a
            href="#projects"
            className="border-gray-900 border-2 rounded-full shadow-sm shadow-teal-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} className="text-teal-300" />
          </a>
          <a
            href="#contact"
            className="border-gray-900 border-2 rounded-full shadow-sm shadow-teal-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <IoMail size={20} className="text-teal-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
