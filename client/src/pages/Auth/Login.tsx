import React, { useState } from "react";
import { useLoginUserMutation } from "../../services/apiSlice";
import { useNavigate } from "react-router-dom";
import { BackendError } from "../../models";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [message, setMessage] = useState("");
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoginError("");
    try {
      const response = await loginUser({ email, password }).unwrap();

      const { _id, name, email: userEmail, token } = response;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({ _id, name, email: userEmail, token, type: "login" })
      );
      setMessage("Logged In! Redirecting to your Social Media...");

      setTimeout(() => {}, 5000);
      navigate("/chat");
    } catch (err) {
      const typedError = err as BackendError;

      const errorMessage =
        typeof typedError.data === "string"
          ? typedError.data
          : "Login failed. Please try again.";
      setLoginError(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="px-20 py-20 mt-4 text-left bg-white shadow-lg w-3/4">
        {message && (
          <div className="mb-3 text-sm text-red-500 font-concert">
            {message}
          </div>
        )}
        {loginError && (
          <div className="mb-3 text-sm text-red-500 font-concert">
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mt-10">
            <div className="mb-4">
              <label
                className="block mb-3 font-concert text-2xl"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-3 font-concert text-2xl"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="mt-10 px-6 py-2 font-concert bg-customYellow rounded-lg hover:border border-gray-300"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
