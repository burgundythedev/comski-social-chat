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
    <div className="flex flex-row items-center justify-between p-5 font-kode">
      <Link to="/" className="flex flex-row items-center">
        <img
          src={logo}
          alt="logo-company"
          className="w-14 h-14 rounded-lg"
        />
        <span className="hidden">
          BROSKI SOCIAL
        </span>
      </Link>
      <nav>
        <ul className="">
          {isLoggedIn ? (
            <>
              <li className="mb-2">
                Welcome,
                <span className="ml-1 text-blue-700">{userInfo.name}</span>
              </li>
              <li
                className="p-1 bg-customYellow rounded-lg cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <Link to="register" className="p-5">
                Register
              </Link>
              <Link to="login" className="">
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
