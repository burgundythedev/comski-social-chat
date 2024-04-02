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
    <div className=" flex justify-between items-center py-10 w-full font-kode">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo-company" className="h-10 mr-10 rounded-md" />
        <span className="font-semibold text-3xl font-kode">BROSKI SOCIAL</span>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <li className="text-gray-700 text-2xl">
                Welcome, {userInfo.name}
              </li>
              <li
                className="text-gray-700 hover:text-gray-900 text-2xl cursor-pointer bg-customYellow"
                onClick={handleLogout}
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <Link
                to="register"
                className="text-gray-700 hover:text-gray-900 text-2xl"
              >
                Register
              </Link>
              <Link
                to="login"
                className="text-gray-700 hover:text-gray-900 text-2xl"
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
