import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bienvenida from "./pages/Bienvenida";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UsuarioDetalle from "./pages/UsuarioDetalle";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/usuario-detalle"
          element={
            <PrivateRoute>
              <UsuarioDetalle />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
