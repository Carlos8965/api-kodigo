import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Bootcampcard from "../components/Bootcampcard";

function Home() {
  const [bootcamps, setBootcamps] = useState([]);

  const fetchBootcamps = async () => {
    const snapshot = await getDocs(collection(db, "bootcamps"));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBootcamps(data);
  };

  useEffect(() => {
    fetchBootcamps();
  }, []);

  const agregarBootcamp = async () => {
    try {
      await addDoc(collection(db, "bootcamps"), {
        nombre: "Bootcamp React",
        descripcion: "Aprende React desde cero",
        imagen: "https://url-imagen.com/bootcamp.png"
      });
      alert("Bootcamp agregado!");
      fetchBootcamps(); // Actualiza la lista después de agregar
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h1>Bootcamps Disponibles</h1>
      <button onClick={agregarBootcamp}>Agregar Bootcamp de Prueba</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bootcamps.map(b => (
          <Bootcampcard
            key={b.id}
            title={b.nombre}
            description={b.descripcion}
            image={b.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
