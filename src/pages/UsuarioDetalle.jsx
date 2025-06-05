import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { obtenerUsuarioPorToken } from "../api/fakeApi";
//import { usuariosSimulados } from "../data/Users";
import Layout from "../components/Layout";

const UsuarioDetalle = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [nuevoEstudio, setNuevoEstudio] = useState("");
  const [nuevaDireccion, setNuevaDireccion] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("selectedUserToken");
    if (!token) {
      alert("No hay usuario seleccionado. Redirigiendo al dashboard.");
      navigate("/dashboard");
      return;
    }

    const fetchUsuario = async () => {
      try {
        const user = await obtenerUsuarioPorToken(token);
        setUsuario(user);
        setNombre(user.name);
        setEmail(user.email);
      } catch (err) {
        console.error("Error al obtener el usuario:", err);
        alert("Token inválido. Redirigiendo al dashboard.");
        sessionStorage.removeItem("selectedUserToken");
        navigate("/dashboard");
      }
    };
    fetchUsuario();
  }, [navigate]);

  if (!usuario) return <p>Cargando usuario...</p>;

  const agregarEstudio = () => {
    if (nuevoEstudio.trim()) {
      setUsuario((prev) => ({
        ...prev,
        estudios: [...prev.estudios, nuevoEstudio],
      }));
      setNuevoEstudio("");
    }
  };

  const eliminarEstudio = (index) => {
    setUsuario((prev) => ({
      ...prev,
      estudios: prev.estudios.filter((_, i) => i !== index),
    }));
  };

  const agregarDireccion = () => {
    if (nuevaDireccion.trim()) {
      setUsuario((prev) => ({
        ...prev,
        direcciones: [...prev.direcciones, nuevaDireccion],
      }));
      setNuevaDireccion("");
    }
  };

  const eliminarDireccion = (index) => {
    setUsuario((prev) => ({
      ...prev,
      direcciones: prev.direcciones.filter((_, i) => i !== index),
    }));
  };

  const guardarCambiosBasicos = () => {
    setUsuario((prev) => ({
      ...prev,
      name: nombre,
      email: email,
    }));
    alert("Datos básicos actualizados (simulado)");
  };

  if (!usuario) return <p>Cargando...</p>;

  return (
    <Layout title={`👤 Perfil de ${nombre}`}>
      <div className="mb-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="btn btn-primary w-full sm:w-auto"
        >
          ⬅️ Volver
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 my-6 space-y-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-[#2d3035] text-center sm:text-left">
          Modificar usuario
        </h2>

        {/* Datos básicos */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-[#b4c400] focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-[#b4c400] focus:ring-2 focus:outline-none"
            />
          </div>

          <button
            onClick={guardarCambiosBasicos}
            className="btn btn-primary w-full sm:w-auto font-bold shadow-lg hover:bg-[#b4c400] hover:text-white transition duration-200"
          >
            💾 Guardar cambios
          </button>
        </div>

        {/* Estudios */}
        <div>
          <h4 className="text-lg font-semibold text-[#2d3035] mt-6 mb-2">
            📚 Estudios
          </h4>
          <ul className="space-y-2">
            {usuario.estudios.map((e, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg text-sm sm:text-base"
              >
                <span className="truncate">{e}</span>
                <button
                  onClick={() => eliminarEstudio(i)}
                  className="text-red-600 cursor-pointer text-lg"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <input
              type="text"
              value={nuevoEstudio}
              onChange={(e) => setNuevoEstudio(e.target.value)}
              placeholder="Nuevo estudio"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-[#b4c400] focus:ring-2 focus:outline-none"
            />
            <button
              onClick={agregarEstudio}
              className="btn btn-primary w-full sm:w-auto"
            >
              Agregar
            </button>
          </div>
        </div>

        {/* Direcciones */}
        <div>
          <h4 className="text-lg font-semibold text-[#2d3035] mt-6 mb-2">
            🏠 Direcciones
          </h4>
          <ul className="space-y-2">
            {usuario.direcciones.map((d, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg text-sm sm:text-base"
              >
                <span className="truncate">{d}</span>
                <button
                  onClick={() => eliminarDireccion(i)}
                  className="text-red-600 cursor-pointer text-lg"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <input
              type="text"
              value={nuevaDireccion}
              onChange={(e) => setNuevaDireccion(e.target.value)}
              placeholder="Nueva dirección"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-[#b4c400] focus:ring-2 focus:outline-none"
            />
            <button
              onClick={agregarDireccion}
              className="btn btn-primary w-full sm:w-auto"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UsuarioDetalle;
