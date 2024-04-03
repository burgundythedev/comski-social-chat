import { Link } from "react-router-dom";
import home from "../assets/home-pic.png";

const Home = () => {
  return (
    <div className="font-kode ">
      <div className="w-full flex items-center">
        <div className="">
          <img src={home} alt="Broski" className="w-128 h-128" />
        </div>
        <div>
          <h1 className="text-8xl font-bold text-customYellow my-8">
            Welcome to Broski
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Join Broski</h2>
            <p className="text-gray-700 text-base">
              Register to connect with your best friends and lovers.
            </p>
            <Link className="mb-5" to="/register">
              <button className="bg-customYellow hover:bg-blue-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                Register
              </button>
            </Link>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Already a member?</h2>
            <p className="text-gray-700 text-base">
              Login to start chatting and sharing with your loved ones.
            </p>
            <Link to="/login">
              <button className="bg-customYellow hover:bg-blue-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                Login
              </button>
            </Link>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Stay Connected</h2>
            <p className="text-gray-700 text-base py-2">
              Enjoy seamless chatting experiences with your close circle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
