import { Link } from "react-router-dom";
import home from "../assets/home-pic.png";

const Home = () => {
  return (
    <div className="w-full font-kode p-2 mb-10 lg:mb-0">
      <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center">
        <div>
          <img src={home} alt="Broski" className="lg:w-96"/>
        </div>
        <div className="text-center lg:text-start">
          <h1 className="text-black underline decoration-customYellow text-3xl font-bold lg:text-6xl mb-20">
            Welcome to Broski!
          </h1>
          <div className="mt-5">
            <h2 className="font-bold mb-2">Join Broski</h2>
            <p className="mb-4">
              Register to connect with your best friends and lovers.
            </p>
            <Link className="" to="/register">
              <button className="bg-customYellow p-2 rounded-md hover:text-white">
                Register
              </button>
            </Link>
          </div>
          <div className="mt-5">
            <h2 className="font-bold">Already a member?</h2>
            <p className="mb-4">
              Login to start chatting and sharing with your loved ones.
            </p>
            <Link to="/login">
              <button className="bg-customYellow p-2 rounded-md hover:text-white">
                Login
              </button>
            </Link>
          </div>
          <div className="mt-5">
            <h2 className="font-bold mb-2">Stay Connected</h2>
            <p>Enjoy seamless chatting experiences with your close circle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
