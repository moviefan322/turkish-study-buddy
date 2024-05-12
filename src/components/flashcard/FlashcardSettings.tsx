import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { daysOfTheWeek } from "../../data/vocab/daysOfWeek";
import { food } from "../../data/vocab/food";
import { months } from "../../data/vocab/months";
import { verbs } from "../../data/vocab/verbs";
import { nouns } from "../../data/vocab/nouns";
import { adjectives } from "@/data/vocab/adjectives";
import { animals } from "@/data/vocab/animals";
import { classVocab } from "@/data/vocab/classVocab";
import { numbers } from "@/data/vocab/numbers";
import { okuyorum1 } from "@/data/vocab/okuyorum1";
import { okuyorum2 } from "@/data/vocab/okuyorum2";
import { okuyorum3 } from "@/data/vocab/okuyorum3";
import styles from "./FlashcardSettings.module.css";

enum Mode {
  Random = "random",
  Smart = "smart",
}

interface Flashcard {
  turkish: string;
  english: string;
  pos: string;
}

interface ModalProps {
  isOpen: boolean;
  shuffle: boolean;
  shuffleDeck: any;
  mode: Mode;
  onClose: () => void;
  setMode: Dispatch<SetStateAction<Mode>>;
  resetState: () => void;
  setFlashcards: Dispatch<SetStateAction<Flashcard[]>>;
  setShuffle: Dispatch<SetStateAction<boolean>>;
  setInputMode: Dispatch<SetStateAction<boolean>>;
  inputMode: boolean;
  setTopLanguage: Dispatch<SetStateAction<string>>;
  topLanguage: string;
  setBottomLanguage: Dispatch<SetStateAction<string>>;
}

const FlashcardSettings = ({
  isOpen,
  onClose,
  setMode,
  resetState,
  setFlashcards,
  shuffle,
  setShuffle,
  shuffleDeck,
  mode,
  setInputMode,
  inputMode,
  setTopLanguage,
  topLanguage,
  setBottomLanguage,
}: ModalProps) => {
  const [selectedMode, setSelectedMode] = useState(Mode.Random);
  const [selectedVocab, setSelectedVocab] = useState("verbs");
  const [subset, setSubset] = useState(0);

  const vocabSets = {
    verbs,
    daysOfTheWeek,
    months,
    food,
    nouns,
    adjectives,
    animals,
    classVocab,
    numbers,
    okuyorum1,
    okuyorum2,
    okuyorum3,
  };

  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMode(event.target.value as Mode);
  };

  const handleVocabChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVocab(event.target.value);
  };

  const handleDisplayLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "turkish") {
      setTopLanguage("turkish");
      setBottomLanguage("english");
    } else {
      setTopLanguage("english");
      setBottomLanguage("turkish");
    }
  };

  const randomizeSubsetSelection = () => {
    if (subset > vocabSets[selectedVocab as keyof typeof vocabSets].length) {
      return vocabSets[selectedVocab as keyof typeof vocabSets];
    }
    let flashcardSubset = [] as Flashcard[];

    for (let i = 0; i < subset; i++) {
      let randomIndex = Math.floor(Math.random() * vocabSets[selectedVocab as keyof typeof vocabSets].length);
      if (flashcardSubset.includes(vocabSets[selectedVocab as keyof typeof vocabSets][randomIndex])) {
        i--;
        continue;
      }
      flashcardSubset.push(vocabSets[selectedVocab as keyof typeof vocabSets][randomIndex]);
    }

    return flashcardSubset;
  };

  const handleSave = () => {
    setMode(selectedMode);
    let newFlashcards = [] as Flashcard[];
    if (subset > 0) {
      newFlashcards = randomizeSubsetSelection();
    } else {
      newFlashcards = vocabSets[selectedVocab as keyof typeof vocabSets];
    }
    if (shuffle) {
      newFlashcards = shuffleDeck(newFlashcards);
    }
    setFlashcards(newFlashcards);
    resetState();
    onClose();
  };

  useEffect(() => {
    console.log(mode); // Check the current value of mode when it changes
  }, [mode]);

  return (
    <>
      {isOpen && (
        <div className={`${styles.modalBackdrop}`}>
          <div className={`${styles.modal} px-4`}>
            <button className={`${styles.modalCloseButton}`} onClick={() => onClose()}>
              <FaXmark />
            </button>
            <br />
            <div>
              <h6>Flashcard Settings</h6>
              <div className="d-flex flex-column justify-content-center align-items-start">
                <form action="">
                  <label htmlFor="mode" className="me-2">
                    Select Vocab:
                  </label>
                  <select name="vocabSet" id="vocabSet" value={selectedVocab} onChange={handleVocabChange}>
                    <option value={"classVocab"}>Class Vocab</option>
                    <option value={"verbs"}>Verbs</option>
                    <option value={"nouns"}>Nouns</option>
                    <option value={"adjectives"}>Adjectives</option>
                    <option value={"animals"}>Animals</option>
                    <option value={"food"}>Food</option>
                    <option value={"daysOfTheWeek"}>Days</option>
                    <option value={"months"}>Months</option>
                    <option value={"numbers"}>Numbers</option>
                    <option value={"okuyorum1"}>Okuyorum 1</option>
                    <option value={"okuyorum2"}>Okuyorum 2</option>
                    <option value={"okuyorum3"}>Okuyorum 3</option>
                  </select>
                </form>
                <form action="">
                  <label htmlFor="mode" className="me-2">
                    Select Mode:
                  </label>
                  <select name="mode" id="mode" value={selectedMode} onChange={handleModeChange}>
                    <option value={Mode.Random}>Random</option>
                    <option value={Mode.Smart}>Smart</option>
                  </select>
                </form>
                <form action="">
                  <label htmlFor="displayLanguage" className="me-2">
                    Display Language:
                  </label>
                  <select
                    name="displayLanguage"
                    id="displayLanguage"
                    value={topLanguage}
                    onChange={handleDisplayLanguageChange}
                  >
                    <option value="turkish">Turkish</option>
                    <option value="english">English</option>
                  </select>
                </form>
                <form action="">
                  <label htmlFor="displayLanguage" className="me-2">
                    Select Subset:
                  </label>
                  <select
                    name="displayLanguage"
                    id="displayLanguage"
                    value={subset}
                    onChange={(e) => setSubset(parseInt(e.target.value))}
                  >
                    <option value="0">N/A</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </form>
                <div>
                  <input
                    type="checkbox"
                    checked={shuffle}
                    onChange={(e) => setShuffle(e.target.checked)}
                    disabled={selectedMode === Mode.Random}
                  />{" "}
                  Shuffle Cards
                </div>
                <div>
                  <input type="checkbox" checked={inputMode} onChange={(e) => setInputMode(e.target.checked)} /> Text
                  Input
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <button className="btn btn-sm btn-info text-light" onClick={() => handleSave()}>
                Save
              </button>
              <div className={styles.filler}></div>
              <button className="btn btn-sm btn-dark text-light" onClick={() => onClose()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlashcardSettings;
