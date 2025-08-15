import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido, {user.email}</p>
    </div>
  );
}

export default Dashboard;
