import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/comski.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  const isLoggedIn = userInfo.token && userInfo.type === "login";


  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="container mx-auto flex justify-between items-center py-10">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo-company" className="h-10 mr-10 rounded-md" />
        <span className="font-semibold text-3xl font-kode">BROSKI SOCIAL</span>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <li className="text-gray-700 font-kode text-2xl ml-4">
                Welcome, {userInfo.name}
              </li>
              <li
                className="text-gray-700 hover:text-gray-900 font-kode text-2xl ml-4 cursor-pointer bg-customYellow"
                onClick={handleLogout}
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <Link
                to="register"
                className="text-gray-700 hover:text-gray-900 font-kode text-2xl ml-4"
              >
                Register
              </Link>
              <Link
                to="login"
                className="text-gray-700 hover:text-gray-900 font-kode text-2xl ml-4"
              >
                Login
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
