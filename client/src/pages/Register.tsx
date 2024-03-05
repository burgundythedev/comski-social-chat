import { useState } from "react";
import { useRegisterUserMutation } from "../services/apiSlice";
import { RegisterInfo } from "../models";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const registerInfo: RegisterInfo = {
        name,
        email,
        password,
      };

      const result = await registerUser(registerInfo).unwrap();
      localStorage.setItem("userInfo", JSON.stringify({ ...result }));

      setMessage("Registration successful! Redirecting to login...");

      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.error("Registration error:", err);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-20 py-20 mt-4 text-left bg-white shadow-lg w-1/2">
        <form onSubmit={handleSubmit}>
          {message && (
            <div className="mb-3 text-sm customYellow">{message}</div>
          )}
          {error && <div className="mb-3 text-sm text-red-500">{error}</div>}

          <div className="mt-10">
            <div className="mb-4">
              <label
                className="block mb-3 font-concert text-2xl"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                className="px-6 py-2 mt-10 font-concert bg-customYellow rounded-lg hover:border border-gray-300"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
