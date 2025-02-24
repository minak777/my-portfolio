import DesktopProjects from "./DesktopProjects";
import MobileProjects from "./MobileProjects";

function Project() {
  return (
    <div className="h-auto w-full flex flex-col justify-start bg-gradient-to-r from-gray-950 to-gray-800 pt-28">
      <span
        id="projects"
        className="flex justify-center text-5xl font-thin text-white"
      >
        Projects
      </span>

      {/* Desktop Projects */}
      <DesktopProjects />

      {/* Mobile Projects */}
      <MobileProjects />
    </div>
  );
}

export default Project;
