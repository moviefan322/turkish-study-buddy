import React, { useState } from "react";
import Layout from "@/components/Layout";
import { verbs } from "@/data/vocab/verbs";
import styles from "./flashcard.module.css";
import { MdOutlineSwapCalls } from "react-icons/md";

interface Flashcard {
  turkish: string;
  english: string;
}

const Flashcard = () => {
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [flashcards, setFlashcards] = useState([...verbs]);
  const [randomCard, setRandomCard] = useState<Flashcard>({ turkish: "", english: "" });
  const [showAnswer, setShowAnswer] = useState(false);
  const [englishOnTop, setEnglishOnTop] = useState(false);

  const shuffleDeck = () => {
    let workingArray = [...flashcards];
    for (let i = flashcards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = flashcards[i];
      workingArray[i] = workingArray[j];
      workingArray[j] = temp;
      setFlashcards(workingArray);
    }
  };

  const randomFlashcard = () => {
    let randomIndex = Math.floor(Math.random() * flashcards.length);
    return flashcards[randomIndex];
  };

  const randomizeCard = () => {
    setRandomCard(randomFlashcard());
  };

  const handleShowFlashcards = () => {
    shuffleDeck();
    randomizeCard();
    setShowFlashcards(true);
  };

  const handleReveal = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    setShowAnswer(false);
    randomizeCard();
  };

  console.log(flashcards);

  return (
    <Layout>
      <h1>Şimşek Kartlar</h1>
      {!showFlashcards ? (
        <button className="btn btn-lg btn-dark text-light" onClick={() => handleShowFlashcards()}>
          Begin
        </button>
      ) : (
        <div className={`d-flex flex-column justify-content-center align-items-center w-100`}>
          <div
            className={`${styles.flashcard} justify-self-center align-self-center fs-5 fw-bolder border border-2 border-dark p-5 text-center bg-dark text-light`}
          >
            {englishOnTop ? randomCard.english : randomCard.turkish}
          </div>
          <button className={styles.swapButton} onClick={() => setEnglishOnTop((prev) => !prev)}>
            <MdOutlineSwapCalls />
          </button>
          <div
            className={`${styles.flashcard} justify-self-center align-self-center fs-5 fw-bolder border border-2 border-dark p-5 text-center bg-dark text-light`}
          >
            {showAnswer ? (englishOnTop ? randomCard.turkish : randomCard.english) : "?"}
          </div>
          <div className="d-flex flex-row justify-content-around align-items-center w-100 mt-4">
            {showAnswer ? (
              <button className="btn btn-lg btn-info" onClick={() => handleNext()}>
                Next
              </button>
            ) : (
              <button className="btn btn-lg btn-success" onClick={() => handleReveal()}>
                Reveal
              </button>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Flashcard;
