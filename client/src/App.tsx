import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./components/Home";
import Layout from "./Layout/Layout";
import ChatBox from "./pages/Chat/ChatBox";

const RedirectToChatOrLogin = () => {
  const isLoggedIn = !!localStorage.getItem("userInfo");
  return isLoggedIn ? <Navigate to="/chat" replace /> : <Home />;
};

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<RedirectToChatOrLogin />} />
      <Route path="/chat" element={<Chat />}>
        <Route path=":chatId" element={<ChatBox />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Layout>
  );
}

export default App;
