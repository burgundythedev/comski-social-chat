import { useState } from "react";
import { useRegisterUserMutation } from "../../services/apiSlice";
import { BackendError, RegisterInfo } from "../../models";
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
        typeToken: "registration",
      };

      const result = await registerUser(registerInfo).unwrap();
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ ...result, type: "registration" })
      );

      setMessage("Registration successful! Redirecting to login...");

      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      const typedError = err as BackendError;

      const errorMessage =
        typeof typedError.data === "string"
          ? typedError.data
          : "An error occurred during registration. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center font-kode">
      <div className="px-5  text-left  rounded-xl">
        <h1 className="text-4xl p-4 font-bold text-center">Register</h1>
        {message && <p className="mb-3 text-sm text-red-500">{message}</p>}
        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mt-10">
            <div className="mb-4">
              <label
                className="block mb-3  text-md font-semibold"
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
                className="block mb-3  text-md font-semibold"
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
                className="block mb-3  text-md font-semibold"
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
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 mt-10 w-full  bg-customYellow rounded-lg hover:border border-gray-300"
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
