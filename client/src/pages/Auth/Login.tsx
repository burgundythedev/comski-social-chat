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
    <div className="min-h-screen flex items-center justify-center font-kode">
      <div className="px-10 text-left rounded-xl">
        <h1 className="text-4xl p-10 font-bold text-center">
          Login
        </h1>
        {message && <p className="mb-3 text-sm text-green-500">{message}</p>}
        {loginError && <p className="mb-3 text-sm text-red-500">{loginError}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mt-10">
            <div className="mb-4">
              <label className="block mb-3 text-md font-semibold" htmlFor="email">
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
              <label className="block mb-3 text-md font-semibold" htmlFor="password">
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
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 mt-10 w-full bg-customYellow rounded-lg hover:border border-gray-300"
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
