import { useNavigate } from "react-router-dom";

export default function Bienvenida() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#b4c400] to-[#2d3035] text-white text-center px-4 sm:px-6 py-10">
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight max-w-2xl">
        ¡Bienvenid@ a{" "}
        <span className="text-[#1f2125] bg-white px-3 py-1 rounded-xl shadow-sm">
          Zoco
        </span>
        !
      </h1>

      <p className="text-base sm:text-xl mb-10 max-w-md text-white/90 leading-relaxed">
        Una aplicación diseñada para simplificar y optimizar tus operaciones
        financieras. <br className="hidden sm:block" /> ¿Estás list@?
      </p>

      <button
        onClick={() => navigate("/login")}
        className="bg-white text-[#2d3035] font-bold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#b4c400] hover:text-white transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center space-x-2 w-full sm:w-auto"
      >
        🚀 Iniciar la app
      </button>
    </div>
  );
}
