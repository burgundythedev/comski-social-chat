import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
const Footer = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 text-gray-800 font-kode">
      <p className="text-lg">Broski</p>

      <div className="flex items-center justify-center">
        <Link
          to="https://www.linkedin.com/in/olivier-bourgogne/"
          className="mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="broski"
            className="w-10 h-10"
          />
        </Link>
        <p className="text-lg">@broski by Olivier Bourgogne</p>
        <Link
          to="https://github.com/burgundythedev"
          className="ml-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="broski"
            className="w-10 h-10"
          />
        </Link>
      </div>

      <p className="text-lg">Broski</p>
    </div>
  );
};

export default Footer;