import React from "react";

const Home = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Broski</h1>
      
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Join Broski</h2>
          <p className="text-gray-700 text-base">
            Register to connect with your best friends and lovers.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
            Register
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Already a member?</h2>
          <p className="text-gray-700 text-base">
            Login to start chatting and sharing with your loved ones.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
            Login
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Stay Connected</h2>
          <p className="text-gray-700 text-base">
            Enjoy seamless chatting experiences with your close circle.
          </p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
            Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
