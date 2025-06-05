import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="btn bg-red-500 text-white hover:bg-red-600 px-4 py-2"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
