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
    <div className="flex justify-between items-center py-5 w-full font-kode">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="logo-company"
          className="h-8 sm:h-10 mr-4 sm:mr-10 rounded-md"
        />
        <span className="font-semibold text-2xl sm:text-3xl font-kode hidden sm:block">
          BROSKI SOCIAL
        </span>
      </Link>
      <nav>
        <ul className="flex space-x-2 sm:space-x-4">
          {isLoggedIn ? (
            <>
              <li className="text-lg sm:text-xl lg:text-2xl font-bold">
                Welcome,
                <span className="text-blue-500 underline ml-2">{userInfo.name}</span>
              </li>
              <li
                className=" sm:text-xl lg:text-xl flex items-center font-bold cursor-pointer px-3 sm:px-4 py-1 lg:py-2 bg-customYellow rounded-md"
                onClick={handleLogout}
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <Link to="register" className="text-xl sm:text-2xl">
                Register
              </Link>
              <Link to="login" className="text-xl sm:text-2xl">
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
