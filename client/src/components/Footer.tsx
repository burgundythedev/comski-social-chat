import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-5 text-gray-800 font-kode text-center sm:text-left">
      <p className=" hidden sm:block text-sm mb-4 sm:mb-0">Broski</p>

      <div className="flex items-center justify-center mb-4 sm:mb-0">
        <Link to="https://www.linkedin.com/in/olivier-bourgogne/" className="mr-2" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-10 h-10 sm:w-3 sm:h-3" />
        </Link>
        <p className="text-s hidden sm:block">@broskisocialchat by Olivier Bourgogne</p>
        <Link to="https://github.com/burgundythedev" className="ml-2" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-10 h-10 " />
        </Link>
      </div>

      <p className="hidden sm:block  text-sm">Broski</p>
    </div>
  );
};

export default Footer;


