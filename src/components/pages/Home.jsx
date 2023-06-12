import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import MainContent from "./MainContent";

import {
  getFirestore,
  collection,
  getDocs,
  getDocsFromCache,
} from "firebase/firestore";
import { firebaseConfig } from "../../config";
import { initializeApp } from "firebase/app";
import { ProjectsContext } from "./Contexts";
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default function Home() {
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query) {
    console.log(query);
    setSearchQuery(query);
  }


  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getDocs(collection(db, "projects")).then((querySnapshot) => {
      console.log(querySnapshot.docs);
      const data = querySnapshot.docs.map((doc) => doc.getId());
      setData(data);
    });
  }, []);

  return (
    <ProjectsContext.Provider
      value={{ data, db, searchQuery, filteredData, handleSearch }}
    >
      <Navbar />
      <MainContent />
    </ProjectsContext.Provider>
  );
}
