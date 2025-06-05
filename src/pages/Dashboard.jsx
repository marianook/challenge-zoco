import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import AdminDashboard from "../components/AdminDashboard";
import UserDashboard from "../components/UserDashboard";
import Layout from "../components/Layout";

const Dashboard = () => {
  const { role } = useContext(AuthContext);
  const title = role === "admin" ? "Panel de Administración" : "Mi Perfil";

  return (
    <Layout title={title}>
      {role === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </Layout>
  );
};

export default Dashboard;
