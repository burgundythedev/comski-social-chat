import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Header from "./components/Header";
import Home from "./components/Home";

const RedirectToChatOrLogin = () => {
  const isLoggedIn = !!localStorage.getItem("userInfo");

  return isLoggedIn ? <Navigate to="/chat" replace /> : <Home />;
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RedirectToChatOrLogin />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
