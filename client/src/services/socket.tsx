import io from "socket.io-client";

const SOCKET_URL = "https://broski-social-chat-server.onrender.com";
const socket = io(SOCKET_URL);

export default socket;