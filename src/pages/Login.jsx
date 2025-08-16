import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

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
  <div className={styles.background}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.card}>
      <h2 className={styles.title}>Iniciar Sesión</h2>
      <input {...register("email")} placeholder="Email" className={styles.input} />
      <input {...register("password")} type="password" placeholder="Password" className={styles.input} />
      <button type="submit" className={styles.button}>Ingresar</button>
    </form>
  </div>
  );
}

export default Login;
