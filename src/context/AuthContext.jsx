import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const isAuthenticated = !!token;
  const role = user?.role || null;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedUser = sessionStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // Siempre terminamos de cargar, con o sin sesión
  }, []);

  const login = async (email, password) => {
    // email usuario: "eve.holt@reqres.in"
    // contraseña correcta de usuario: "cityslicka"
    // email administrador: "admin@correo.com"
    // contraseña correcta de administrador: "admin123"

    if (email === "admin@correo.com" && password !== "admin123") {
      alert("Contraseña incorrecta para el administrador");
    } else if (email === "admin@correo.com" && password === "admin123") {
      alert("Administrador autenticado");
      // Admin login simulation
      const user = {
        token: "admin-token-123",
        id: 1,
        name: "Administrador",
        email,
        role: "admin",
      };

      setToken(user.token);
      setUser(user);
      sessionStorage.setItem("token", user.token);
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      try {
        const res = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!res.ok) throw new Error("Credenciales inválidas");
        const data = await res.json();
        console.log("Login exitoso:", data);

        // Simular el usuario con base en el email
        const user = {
          token: data.token,
          id: 1,
          name: "Usuario",
          email,
          role: "user",
        };

        setToken(data.token);
        setUser(user);
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.log("Error al iniciar sesión:", error);
      }
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("selectedUserToken");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, role, isAuthenticated, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
