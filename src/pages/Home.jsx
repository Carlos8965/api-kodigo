import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Bootcampcard from "../components/Bootcampcard";

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
