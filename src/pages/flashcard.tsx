import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import FlashcardSettings from "@/components/flashcard/FlashcardSettings";
import { verbs } from "@/data/vocab/verbs";
import styles from "./flashcard.module.css";
import { MdSwapVert } from "react-icons/md";
import { FaGear, FaXmark } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { IoChevronBack } from "react-icons/io5";

interface Flashcard {
  turkish: string;
  english: string;
}

enum Mode {
  Random = "random",
  Smart = "smart",
}

interface ModeStrategy {
  initializeDeck: () => void;
  handleNext: (correct: boolean) => void;
}

const Flashcard = () => {
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [flashcards, setFlashcards] = useState([...verbs]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [englishOnTop, setEnglishOnTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDeck, setCurrentDeck] = useState<Flashcard[]>([]);
  const [nextDeck, setNextDeck] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<Mode>(Mode.Random);

  const resetState = () => {
    setShowAnswer(false);
    setEnglishOnTop(false);
    setIsModalOpen(false);
    setCurrentIndex(0);
  };

  const shuffleDeck = () => {
    let workingArray = [...flashcards];
    for (let i = workingArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [workingArray[i], workingArray[j]] = [workingArray[j], workingArray[i]];
    }
    setFlashcards(workingArray);
  };
  const smartModeStrategy: ModeStrategy = {
    initializeDeck: () => {
      shuffleDeck();
      setCurrentDeck([...flashcards]);
    },
    handleNext: (correct: boolean) => {
      if (!correct) {
        setNextDeck([...nextDeck, currentDeck[currentIndex]]);
      }
      setShowAnswer(false);
      if (currentIndex === currentDeck.length - 1) {
        if (nextDeck.length === 0) {
          handleAllCorrect();
        } else {
          setCurrentDeck([...nextDeck]);
          setNextDeck([]);
        }
        setCurrentIndex(0);
        return;
      }
      setCurrentIndex((prev) => prev + 1);
    },
  };

  const randomModeStrategy: ModeStrategy = {
    initializeDeck: () => {
      shuffleDeck();
      setCurrentDeck([...flashcards]);
    },
    handleNext: () => {
      setShowAnswer(false);
      shuffleDeck();
      setCurrentDeck([...flashcards]);
    },
  };

  const getModeStrategy = (mode: Mode): ModeStrategy => {
    switch (mode) {
      case Mode.Smart:
        return smartModeStrategy;
      case Mode.Random:
        return randomModeStrategy;
      default:
        return randomModeStrategy;
    }
  };

  const modeStrategy = getModeStrategy(mode);

  const handleShowFlashcards = () => {
    modeStrategy.initializeDeck();
    setShowFlashcards(true);
  };

  useEffect(() => {
    setCurrentDeck([...flashcards]);
  }, [flashcards]);

  const handleReveal = () => {
    setShowAnswer(true);
  };

  const handleAllCorrect = () => {
    alert("All correct!");
    setShowFlashcards(false);
  };

  const handleNext = (correct: boolean) => {
    modeStrategy.handleNext(correct);
  };

  console.log(mode);

  return (
    <Layout>
      <Link href="/">
        <button className="top-left btn btn-sm btn-dark text-light">
          <IoChevronBack />
        </button>
      </Link>
      <h1>Şimşek Kartlar</h1>
      {showFlashcards && mode === Mode.Smart && (
        <p>
          <small>
            {currentIndex + 1}/{currentDeck.length}
          </small>
        </p>
      )}

      {!showFlashcards ? (
        <button className="btn btn-lg btn-success border border-1 border-dark" onClick={() => handleShowFlashcards()}>
          Start
        </button>
      ) : (
        <div className={`d-flex flex-column justify-content-center align-items-center w-100`}>
          <div
            className={`${styles.flashcard} justify-self-center align-self-center fs-3 fw-bolder border border-2 border-dark p-5 text-center text-light`}
          >
            {englishOnTop ? currentDeck[currentIndex].english : currentDeck[currentIndex].turkish}
          </div>
          <button
            className="my-3 bg-success text-dark border-1 border border-dark"
            onClick={() => setEnglishOnTop((prev) => !prev)}
          >
            <MdSwapVert size={50} />
          </button>
          <div
            className={`${styles.flashcard} justify-self-center align-self-center fs-3 fw-bolder border border-2 border-dark p-5 text-center text-light`}
          >
            {showAnswer ? (englishOnTop ? currentDeck[currentIndex].turkish : currentDeck[currentIndex].english) : "?"}
          </div>
          <div className="d-flex flex-row justify-content-around align-items-center w-100 mt-4">
            {showAnswer && mode === Mode.Smart && (
              <div className="d-flex flex-row">
                <button
                  className="my-3 bg-success text-dark border-1 border border-dark mx-3"
                  onClick={() => handleNext(true)}
                >
                  <CiCircleCheck size={50} />
                </button>
                <button
                  className="my-3 bg-danger text-dark border-1 border border-dark mx-3"
                  onClick={() => handleNext(false)}
                >
                  <FaXmark size={50} />
                </button>
              </div>
            )}
            {showAnswer && mode === Mode.Random && (
              <button className="btn btn-lg btn-success border border-1 border-dark" onClick={() => handleNext(true)}>
                Next
              </button>
            )}
            {!showAnswer && (
              <button className="btn btn-lg btn-success border border-1 border-dark" onClick={() => handleReveal()}>
                Reveal
              </button>
            )}
          </div>
        </div>
      )}
      <button
        className="btn btn-info text-white btn-large fs-5 align-self-end justify-self-end bottom-right border border-1 border-dark"
        onClick={() => setIsModalOpen(true)}
      >
        <FaGear />
      </button>
      <FlashcardSettings
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setMode={setMode}
        resetState={resetState}
        setFlashcards={setFlashcards}
      />
    </Layout>
  );
};

export default Flashcard;
