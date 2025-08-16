// src/pages/Register.jsx
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      alert("Usuario registrado correctamente");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.card}>
        <h2 className={styles.title}>Registrarse</h2>
        <input {...register("email")} placeholder="Email" className={styles.input} />
        <input {...register("password")} type="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Registrarse</button>
      </form>
    </div>
  );
}

export default Register;