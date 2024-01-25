import { useState } from "react";
import styles from "./flashcardMain.module.css";
// @ts-ignore
import SingleFlashcard from "./singleFlashcard";
import Layout from "../Layout";
import { verbs } from "@/data/vocab/verbs";

function FlashcardMain() {
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
      <div className={styles.cardContainer}>
        {/* {!showFlashcards ? (
        <>
          <div>
            <button onClick={setTurkishUpHandler}>Turkish Up</button>
          </div>
          <div>
            <button onClick={setEnglishUpHandler}>English Up</button>
          </div>
        </>
      ) : (
        <SingleFlashcard sideUp={sideUp} flashcards={flashcards} />
      )} */}
      </div>
    </Layout>
  );
}

export default FlashcardMain;
