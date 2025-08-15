// src/pages/Register.jsx
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Register;