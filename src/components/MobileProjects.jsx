import pic1 from "../assets/Onechanged.png";
import pic2 from "../assets/zeweter.png";
import pic3 from "../assets/my.png";
import pic4 from "../assets/strongroot.png";
function Project() {
  return (
    <div className="w-full flex flex-col justify-start items-center px-8  pb-8 md:hidden sm:flex">
      <div
        onClick={() => window.open("https://www.onechangedlife.org/", "_blank")}
        className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-6 w-full cursor-pointer hover:scale-110 ease-in duration-200"
      >
        {/* Heading */}
        <img src={pic1} alt="" className="mb-4 w-full h-auto rounded-md" />
        <span className="text-teal-200 text-lg font-light mb-5">
          One changed life organization webpage
        </span>
        <div className="flex flex-row justify-evenly space-x-4">
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-2 pr-2">
            WordPress
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            HTML
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            CSS
          </span>
        </div>
      </div>

      {/* my portfolio */}
      <div
        onClick={() => window.open("https://www.strongrootstree.com", "_blank")}
        className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-6 w-full cursor-pointer hover:scale-110 ease-in duration-200"
      >
        {/* Heading */}
        <img src={pic4} alt="" className="mb-4 w-full h-auto rounded-md" />
        <span className="text-teal-200 text-lg font-light mb-5">
          One changed life organization webpage
        </span>
        <div className="flex flex-row justify-evenly space-x-4">
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-2 pr-2">
            Wordpress
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            HTML
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            CSS
          </span>
        </div>
      </div>

      {/* Zeweter */}
      <div
        onClick={() =>
          window.open(
            "https://github.com/minak777/Zeweter-podcast.git",
            "_blank"
          )
        }
        className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-6 w-full cursor-pointer hover:scale-110 ease-in duration-200"
      >
        {/* Heading */}
        <img src={pic2} alt="" className="mb-4 w-full h-auto rounded-md" />
        <span className="text-teal-200 text-lg font-light mb-5">
          One changed life organization webpage
        </span>
        <div className="flex flex-row justify-evenly space-x-4">
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-2 pr-2">
            React JS
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            CSS
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            Tailwind
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            HTML
          </span>
        </div>
      </div>

      {/* my portfolio */}
      <div
        onClick={() => {}}
        className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 m-6 w-full cursor-pointer hover:scale-110 ease-in duration-200"
      >
        {/* Heading */}
        <img src={pic3} alt="" className="mb-4 w-full h-auto rounded-md" />
        <span className="text-teal-200 text-lg font-light mb-5">
          One changed life organization webpage
        </span>
        <div className="flex flex-row justify-evenly space-x-4">
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-2 pr-2">
            React JS
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            CSS
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            Tailwind
          </span>
          <span className="text-sm text-black bg-gray-500 rounded-full p-1 pl-4 pr-4">
            HTML
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
