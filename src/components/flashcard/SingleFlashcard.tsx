import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./SingleFlashcard.module.css";

interface singleFlashcardProps {
  sideUp: string;
  flashcards: Flashcard[];
}

interface Flashcard {
  english: string;
  turkish: string;
}

function SingleFlashcard({ sideUp, flashcards }: singleFlashcardProps) {
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showSide, setShowSide] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [customStyle, setCustomStyle] = useState({
    backgroundColor: "rgb(23, 23, 23)",
  });

  useEffect(() => {
    if (sideUp === "turkish") {
      setShowSide(flashcards[currentFlashcard].turkish);
      setCorrectAnswer(flashcards[currentFlashcard].english);
    } else {
      setShowSide(flashcards[currentFlashcard].english);
      setCorrectAnswer(flashcards[currentFlashcard].turkish);
    }
  }, [currentFlashcard, sideUp, flashcards]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const checkAnswer = () => {
    setIsSubmitted(true);
    if (correctAnswer.toLowerCase().includes(userInput.toLowerCase())) {
      setCustomStyle({ backgroundColor: "green" });
      setTimeout(() => {
        setCustomStyle({ backgroundColor: "rgb(23, 23, 23)" });
        setUserInput("");
        setIsSubmitted(false);
        if (currentFlashcard < flashcards.length - 1) {
          setCurrentFlashcard((prev) => prev + 1);
        } else {
          setCurrentFlashcard(0);
        }
      }, 2000);
    } else {
      setCustomStyle({ backgroundColor: "red" });
      setTimeout(() => {
        setCustomStyle({ backgroundColor: "rgb(23, 23, 23)" });
        setUserInput("");
        setIsSubmitted(false);
        if (currentFlashcard < flashcards.length - 1) {
          setCurrentFlashcard((prev) => prev + 1);
        } else {
          setCurrentFlashcard(0);
        }
      }, 2000);
    }
  };

  return (
    <div className={styles.singleFlashcard}>

    </div>
  );
}

export default SingleFlashcard;
