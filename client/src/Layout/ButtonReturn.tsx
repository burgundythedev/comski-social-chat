import { useNavigate } from "react-router-dom";
import back from "../assets/back.png";
const ButtonReturn = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/chat");
  };

  return (
    <button
      onClick={handleGoBack}
      className="bg-customYellow p-2 rounded-xl flex flex-row items-center"
    >
      <img
        src={back}
        className="w-3
       h-3"
      />
      <p className="ml-4 font-kode text-sm font-bold">Chat list</p>
    </button>
  );
};

export default ButtonReturn;
