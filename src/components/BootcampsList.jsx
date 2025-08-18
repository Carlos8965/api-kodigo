import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Bootcampcard from "../components/Bootcampcard";

const BootcampsList = () => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    const fetchBootcamps = async () => {
      const querySnapshot = await getDocs(collection(db, "bootcamps"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBootcamps(data);
    };
    fetchBootcamps();
  }, []);

  return (
    <div>
      <h2>Bootcamps</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {bootcamps.map(bc => (
          <Bootcampcard
            key={bc.id}
            title={bc.title || "Sin título"}
            description={bc.description || "Sin descripción"}
            image={bc.image || "https://via.placeholder.com/150"}
            content={bc.content || []}
          />
        ))}
      </div>
    </div>
  );
};

export default BootcampsList;
