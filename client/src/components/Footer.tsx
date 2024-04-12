import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
const Footer = () => {
  return (
    <div className="font-kode p-5">
      <p className="hidden">Broski</p>
      <div className="flex flex-row justify-between items-center">
        <Link
          to="https://www.linkedin.com/in/olivier-bourgogne/"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
        </Link>
        <p className="">
          @broskisocialchat <span className="hidden">by Olivier Bourgogne</span>
        </p>
        <Link
          to="https://github.com/burgundythedev"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="w-5 h-5" />
        </Link>
      </div>

      <p className="hidden">Broski</p>
    </div>
  );
};

export default Footer;
