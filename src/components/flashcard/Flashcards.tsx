import { useState } from "react";
import styles from "./flashcards.module.css";
// @ts-ignore
import SingleFlashcard from "./singleFlashcard";
import Layout from "../Layout";
import { verbs } from "@/data/vocab/verbs";

function Flashcards() {
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [sideUp, setSideUp] = useState("");

  const flashcards = [...verbs];

  const setTurkishUpHandler = () => {
    setSideUp("turkish");
    setShowFlashcards(true);
  };

  const setEnglishUpHandler = () => {
    setSideUp("english");
    setShowFlashcards(true);
  };

  return (
    <Layout>
      <h1>Flashcards</h1>
    </Layout>
  );
}

export default Flashcards;
