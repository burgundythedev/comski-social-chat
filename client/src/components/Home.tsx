import { Link } from "react-router-dom";
import home from "../assets/home-pic.png";

const Home = () => {
  return (
    <div className="font-kode sm:p-4 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <img src={home} alt="Broski" className="w-full h-auto max-w-xs mx-auto lg:max-w-lg" />
        </div>
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-8xl font-bold text-customYellow my-8 ">
            Welcome to Broski
          </h1>
          <div className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold">Join Broski</h2>
            <p className="text-gray-700 text-sm lg:text-base">
              Register to connect with your best friends and lovers.
            </p>
            <Link className="mb-5" to="/register">
              <button className="bg-customYellow hover:bg-blue-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                Register
              </button>
            </Link>
          </div>
          <div className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold">Already a member?</h2>
            <p className="text-gray-700 text-sm lg:text-base">
              Login to start chatting and sharing with your loved ones.
            </p>
            <Link to="/login">
              <button className="bg-customYellow hover:bg-blue-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                Login
              </button>
            </Link>
          </div>

          <div className="mb-4 hidden sm:block">
            <h2 className="text-xl lg:text-2xl font-semibold">Stay Connected</h2>
            <p className="text-gray-700 text-sm lg:text-base py-2">
              Enjoy seamless chatting experiences with your close circle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Home;
