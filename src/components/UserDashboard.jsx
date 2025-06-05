import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  // Estado local para estudios y direcciones
  const [estudios, setEstudios] = useState([
    "Ingeniería en Software",
    "Licenciatura en Sistemas",
    "Máster en Inteligencia Artificial",
  ]);
  const [direcciones, setDirecciones] = useState([
    "San Miguel de Tucumán",
    "Yerba Buena",
  ]);

  const [nuevoEstudio, setNuevoEstudio] = useState("");
  const [nuevaDireccion, setNuevaDireccion] = useState("");

  const [editEstudio, setEditEstudio] = useState("");
  const [editEstudioIndex, setEditEstudioIndex] = useState(null);

  const [editDireccion, setEditDireccion] = useState("");
  const [editDireccionIndex, setEditDireccionIndex] = useState(null);

  const agregarEstudio = () => {
    if (!nuevoEstudio.trim()) return;
    setEstudios([...estudios, nuevoEstudio.trim()]);
    setNuevoEstudio("");
  };
  const editarEstudio = (index) => {
    setEditEstudioIndex(index);
    setEditEstudio(estudios[index]);
  };

  const eliminarEstudio = (index) => {
    setEstudios(estudios.filter((_, i) => i !== index));
  };

  const agregarDireccion = () => {
    if (!nuevaDireccion.trim()) return;
    setDirecciones([...direcciones, nuevaDireccion.trim()]);
    setNuevaDireccion("");
  };

  const editarDireccion = (index) => {
    setEditDireccionIndex(index);
    setEditDireccion(direcciones[index]);
  };

  const eliminarDireccion = (index) => {
    setDirecciones(direcciones.filter((_, i) => i !== index));
  };

  const guardarEstudioEditado = () => {
    const nuevos = [...estudios];
    nuevos[editEstudioIndex] = editEstudio;
    setEstudios(nuevos);
    setEditEstudio("");
    setEditEstudioIndex(null);
  };

  const guardarDireccionEditada = () => {
    const nuevos = [...direcciones];
    nuevos[editDireccionIndex] = editDireccion;
    setDirecciones(nuevos);
    setEditDireccion("");
    setEditDireccionIndex(null);
  };

  return (
    <div className="space-y-8">
      <section>
        {/* <h2 className="text-xl font-semibold mb-4">Mi Perfil</h2> */}
        <p>
          <strong>Nombre:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">📚 Estudios</h3>
        <ul className="space-y-2">
          {estudios.map((e, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-gray-100 p-2 rounded-xl"
            >
              {editEstudioIndex === i ? (
                <>
                  <input
                    className="input mr-2"
                    value={editEstudio}
                    onChange={(e) => setEditEstudio(e.target.value)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={guardarEstudioEditado}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  {e}
                  <div className="space-x-2">
                    <button
                      className="cursor-pointer"
                      onClick={() => editarEstudio(i)}
                    >
                      ✏️
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => eliminarEstudio(i)}
                    >
                      ❌
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="flex space-x-2 mt-3">
          <input
            className="input flex-1"
            value={nuevoEstudio}
            onChange={(e) => setNuevoEstudio(e.target.value)}
            placeholder="Nuevo estudio"
          />
          <button className="btn btn-primary" onClick={agregarEstudio}>
            Agregar
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">🏠 Direcciones</h3>
        <ul className="space-y-2">
          {direcciones.map((d, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-gray-100 p-2 rounded-xl"
            >
              {editDireccionIndex === i ? (
                <>
                  <input
                    className="input mr-2"
                    value={editDireccion}
                    onChange={(e) => setEditDireccion(e.target.value)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={guardarDireccionEditada}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  {d}
                  <div className="space-x-2">
                    <button
                      className="cursor-pointer"
                      onClick={() => editarDireccion(i)}
                    >
                      ✏️
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => eliminarDireccion(i)}
                    >
                      ❌
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="flex space-x-2 mt-3">
          <input
            className="input flex-1"
            value={nuevaDireccion}
            onChange={(e) => setNuevaDireccion(e.target.value)}
            placeholder="Nueva dirección"
          />
          <button className="btn btn-primary" onClick={agregarDireccion}>
            Agregar
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
