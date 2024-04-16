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
  const handleRedirectToChat = () => {
    navigate("/chat");
  };
  return (
    <div className="flex flex-row items-center justify-between p-5 font-kode">
      <Link to="/home" className="flex flex-row items-center">
        <img src={logo} alt="logo-company" className="w-14 h-14 rounded-lg" />
        <span className="hidden">BROSKI SOCIAL</span>
      </Link>
      <nav>
        <ul className="lg:flex flex-row">
          {isLoggedIn ? (
            <>
              <li className="mb-2 lg:mb-0 mr-2">
                Welcome,
                <span className="ml-1 text-blue-700 font-extrabold">{userInfo.name}</span>
              </li>
              <div className="flex flex-row">
                <li
                  className="p-1 text-sm mr-1 bg-customYellow rounded-lg cursor-pointer w-20 text-center"
                  onClick={handleRedirectToChat}
                >
                  Chats
                </li>
                <li
                  className="p-1 text-sm bg-customYellow rounded-lg cursor-pointer w-20 text-center"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </div>
            </>
          ) : (
            <>
              <Link to="register" className="p-5">
                Register
              </Link>
              <Link to="login" className="p-5">
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
