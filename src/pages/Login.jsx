import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Iniciar Sesión</h2>
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
