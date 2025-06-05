import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuariosSimulados } from "../data/Users";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const crearUsuario = () => {
    if (!nombre || !email) {
      alert("Por favor completá ambos campos.");
      return;
    }
    const nuevoUsuario = {
      token: Math.random().toString(36).substr(2, 16), // Simulación de token
      role: "user", // Asignamos un rol por defecto
      id: usuariosSimulados.length + 1,
      name: nombre,
      email: email,
      estudios: [],
      direcciones: [],
    };
    usuariosSimulados.push(nuevoUsuario);
    setNombre("");
    setEmail("");
    alert("Usuario creado exitosamente");
  };

  const verUsuario = (usuario) => {
    sessionStorage.setItem("selectedUserToken", usuario.token); // Guardamos solo el token
    navigate("/admin/usuario-detalle");
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">➕ Crear nuevo usuario</h2>
        <div className="space-y-3">
          <input
            className="input"
            placeholder="Nombre y Apellido"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            className="input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn btn-primary w-full p-2 uppercase font-bold"
            onClick={crearUsuario}
          >
            Crear usuario
          </button>
        </div>
      </section>

      {/* <hr /> */}

      <section>
        <h2 className="text-xl font-semibold mb-4">👥 Lista de usuarios</h2>
        <ul className="space-y-2">
          {usuariosSimulados.map((usuario) => (
            <li
              key={usuario.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-xl"
            >
              <div>
                <strong>{usuario.name}</strong> ({usuario.email})
              </div>
              <button
                className="btn btn-primary px-3 py-1"
                onClick={() => verUsuario(usuario)}
              >
                👁 Modificar
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
