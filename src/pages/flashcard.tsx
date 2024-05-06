/* eslint-disable react-hooks/exhaustive-deps */
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
  const [topLanguage, setTopLanguage] = useState("turkish");
  const [bottomLanguage, setBottomLanguage] = useState("english");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDeck, setCurrentDeck] = useState<Flashcard[]>([]);
  const [nextDeck, setNextDeck] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<Mode>(Mode.Random);
  const [shuffle, setShuffle] = useState(true);
  const [inputMode, setInputMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [flashStyle, setFlashStyle] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const resetState = () => {
    setShowAnswer(false);
    setIsModalOpen(false);
    setCurrentIndex(0);
  };

  const shuffleDeck = (deck: Flashcard[]) => {
    if (!shuffle && mode === Mode.Smart) return deck;
    let workingArray = [...deck];
    for (let i = workingArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [workingArray[i], workingArray[j]] = [workingArray[j], workingArray[i]];
    }
    return workingArray;
  };
  const smartModeStrategy: ModeStrategy = {
    initializeDeck: () => {
      setCurrentDeck(shuffleDeck(flashcards));
    },
    handleNext: (correct: boolean) => {
      setShowAnswer(false);
      const isLastCard = currentIndex === currentDeck.length - 1;

      if (correct) {
        setCorrectCount((prev) => prev + 1);
        if (isLastCard) {
          if (nextDeck.length === 0) {
            handleAllCorrect();
          } else {
            setCurrentDeck(shuffleDeck(nextDeck));
          }
          setCurrentIndex(0);
          setNextDeck([]);
        } else {
          setCurrentIndex((prev) => prev + 1);
        }
      } else {
        setIncorrectCount((prev) => prev + 1);
        setNextDeck((prevNextDeck) => [...prevNextDeck, currentDeck[currentIndex]]);
        if (isLastCard) {
          setCurrentDeck([...shuffleDeck(nextDeck), currentDeck[currentIndex]]);
          setCurrentIndex(0);
          setNextDeck([]);
          setCorrectCount(0);
          setIncorrectCount(0);
        } else {
          setCurrentIndex((prev) => prev + 1);
        }
      }
    },
  };

  const randomModeStrategy: ModeStrategy = {
    initializeDeck: () => {
      setCurrentDeck(shuffleDeck(flashcards));
    },
    handleNext: () => {
      setShowAnswer(false);
      setCurrentDeck(shuffleDeck(flashcards));
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
    if (inputMode) {
      if (inputValue.toLowerCase().trim() === currentDeck[currentIndex][topLanguage as keyof Flashcard].toLowerCase()) {
        setCorrect(true);
      } else {
        setIncorrect(true);
      }
      setInputValue("");
    }
    setShowAnswer(true);
  };

  const handleNext = (correct: boolean) => {
    modeStrategy.handleNext(correct);
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Enter" && !event.repeat && !inputMode) {
        event.preventDefault(); // Prevent the default space action (scrolling) for all Spacebar presses
        if (!showAnswer) {
          handleReveal();
        } else {
          handleNext(true);
        }
      }
      if (event.key === "x" && !event.repeat && showAnswer) {
        event.preventDefault(); // Prevent the default space action (scrolling) for all Spacebar presses
        handleNext(false);
      }
    };

    // Attach the event listener
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showAnswer]);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleReveal();
    }
  };

  const handleAllCorrect = () => {
    alert("All correct!");
    setShowFlashcards(false);
  };

  const renderHiddenFlashcard = () => {
    if (inputMode) {
      return (
        <div>
          <input
            className="w-100 text-center"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            autoFocus
          />
        </div>
      );
    } else {
      return "?";
    }
  };

  useEffect(() => {
    // Determine the style based on correctness
    let newStyle;
    if (correct) {
      newStyle = "bg-success";
    } else if (incorrect) {
      newStyle = "bg-danger";
    } else {
      newStyle = "";
    }

    setFlashStyle(newStyle);

    if (correct || incorrect) {
      const timer = setTimeout(() => {
        setFlashStyle("");
        setCorrect(false);
        setIncorrect(false);
        handleNext(correct);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [correct, incorrect]);

  const switchLanguageOrientation = () => {
    setTopLanguage(bottomLanguage);
    setBottomLanguage(topLanguage);
  };

  console.log(topLanguage, bottomLanguage);

  return (
    <Layout>
      <Link href="/">
        <button className="top-left btn btn-sm btn-dark text-light">
          <IoChevronBack />
        </button>
      </Link>
      <h1>Şimşek Kartlar</h1>

      {showFlashcards && mode === Mode.Smart && (
        <div className="d-flex flex-row justify-content-between align-items-center w-25">
          {correctCount > 0 && <p className="fw-bold text-success fs-5">{correctCount}</p>}
          <p className="fw-bold text-center mx-auto">
            {currentIndex + 1}/{currentDeck.length}
          </p>
          {incorrectCount > 0 && <p className="fw-bold text-danger fs-5">{incorrectCount}</p>}
        </div>
      )}

      {!showFlashcards ? (
        <button className="btn btn-lg btn-success border border-1 border-dark" onClick={() => handleShowFlashcards()}>
          Start
        </button>
      ) : (
        <div className={`d-flex flex-column justify-content-center align-items-center w-100`}>
          <div
            className={`${styles.flashcard} justify-self-center align-self-center fs-3 fw-bolder border border-2 border-dark p-5 text-center text-light w-25`}
          >
            {currentDeck[currentIndex][topLanguage as keyof Flashcard]}
          </div>
          <button
            className="my-3 bg-success text-dark border-1 border border-dark"
            onClick={() => switchLanguageOrientation()}
          >
            <MdSwapVert size={50} />
          </button>
          <div
            className={`${styles.flashcard} justify-self-center align-self-center fs-3 fw-bolder border border-2 border-dark p-5 text-center text-light w-25 ${flashStyle}`}
          >
            {showAnswer ? currentDeck[currentIndex][bottomLanguage as keyof Flashcard] : renderHiddenFlashcard()}
          </div>
          <div className="d-flex flex-row justify-content-around align-items-center w-100 mt-4">
            {showAnswer && mode === Mode.Smart && !inputMode && (
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
            {!showAnswer && !inputMode && (
              <button className="btn btn-lg btn-success border border-1 border-dark" onClick={() => handleReveal()}>
                Reveal
              </button>
            )}
            {!showAnswer && inputMode && (
              <button className="btn btn-lg btn-success border border-1 border-dark" onClick={() => handleReveal()}>
                Submit
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
        mode={mode}
        resetState={resetState}
        setFlashcards={setFlashcards}
        shuffle={shuffle}
        setShuffle={setShuffle}
        shuffleDeck={shuffleDeck}
        setInputMode={setInputMode}
        inputMode={inputMode}
        setTopLanguage={setTopLanguage}
        setBottomLanguage={setBottomLanguage}
        topLanguage={topLanguage}
      />
    </Layout>
  );
};

export default Flashcard;
