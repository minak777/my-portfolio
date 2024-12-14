import { useState } from "react";
import {
  IoPerson,
  IoMail,
  IoLocationSharp,
  IoCopy,
  IoLogoGithub,
} from "react-icons/io5";
import { BsFillTelephoneFill, BsTelegram } from "react-icons/bs";

function Contact() {
  const [copiedText, setCopiedText] = useState(""); // For tracking the copied text
  const [showNotification, setShowNotification] = useState(false); // For showing the custom notification

  // Function to handle copying text to clipboard
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text); // Update the copied text
        setShowNotification(true); // Show the notification
        setTimeout(() => setShowNotification(false), 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-gray-950 to-gray-800 relative">
      {/* Custom Notification */}
      {showNotification && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-teal-500 text-black px-4 py-2 rounded-lg shadow-lg z-50">
          Copied: <span className="font-bold">{copiedText}</span>
        </div>
      )}

      <div className="flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg shadow-black p-8 max-w-3xl w-full">
        {/* Heading */}
        <span className="text-teal-400 text-5xl font-semibold mb-4 font-body">
          Contact Me
        </span>

        {/* Contact List */}
        <div className="text-teal-100 text-xl space-y-4">
          <div className="flex flex-row items-center">
            <IoPerson className="m-1" />
            <span>: Minase Kibebew</span>
          </div>

          <div className="flex flex-row items-center">
            <BsFillTelephoneFill className="m-1" />
            <span>: +251960373226</span>
            <IoCopy
              className="ml-5 cursor-pointer"
              onClick={() => handleCopy("+251960373226")}
            />
          </div>

          <div className="flex flex-row items-center">
            <BsTelegram className="m-1" />
            <span>: @Minase7777</span>
            <IoCopy
              className="ml-5 cursor-pointer"
              onClick={() => handleCopy("@Minase7777")}
            />
          </div>

          <div className="flex flex-row items-center">
            <IoMail className="m-1" />
            <span>: Minasek005@gmail.com</span>
            <IoCopy
              className="ml-5 cursor-pointer"
              onClick={() => handleCopy("Minasek005@gmail.com")}
            />
          </div>

          <div className="flex flex-row items-center">
            <IoLogoGithub className="m-1" />
            <span>:&nbsp;</span>
            <a
              href="https://github.com/minak777"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-200 hover:text-teal-400"
            >
              https://github.com/minak777
            </a>
          </div>

          <div className="flex flex-row items-center">
            <IoLocationSharp className="m-1" />
            <span>: Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
