import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    const fetchBootcamps = async () => {
      const snapshot = await getDocs(collection(db, "bootcamps"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBootcamps(data);
    };
    fetchBootcamps();
  }, []);

  return (
    <div>
      <h1>Bootcamps Disponibles</h1>
      {bootcamps.map(b => (
        <div key={b.id}>
          <h2>{b.nombre}</h2>
          <p>{b.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
