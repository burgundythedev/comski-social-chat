import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./components/Home";
import ChatBox from "./pages/Chat/ChatBox";
import useResponsive from "./hooks/useResponsive";

const RedirectToChatOrLogin = () => {
  const isLoggedIn = !!localStorage.getItem("userInfo");
  return isLoggedIn ? <Navigate to="/chat" replace /> : <Home />;
};
function App() {
  const isWide = useResponsive(728);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RedirectToChatOrLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
        {isWide ? (
          <Route path="/chat" element={<Chat />}>
            <Route path=":chatId" element={<ChatBox />} />
          </Route>
        ) : (
          <>
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:chatId" element={<ChatBox />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}

export default App;
