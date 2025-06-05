import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200">
        <h1 className="text-xl sm:text-3xl font-bold text-center text-[#2d3035] mb-2">
          SPA REACT - ZOCO
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Inicia sesión para continuar
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="label">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="ejemplo@correo.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
          </div>

          <div>
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full py-2">
            Ingresar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          ¿No tenés cuenta?{" "}
          <a href="#" className="text-[#2d3035] font-medium hover:underline">
            Registrate
          </a>
        </div>
      </div>
    </div>
  );
}
