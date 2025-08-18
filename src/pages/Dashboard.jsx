import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import BootcampsList from "../components/BootcampsList";

function Dashboard() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido, {user.email}</p>
      <BootcampsList />
    </div>
  );
}

export default Dashboard;
