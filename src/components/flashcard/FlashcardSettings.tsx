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
import styles from "./FlashcardSettings.module.css";

enum Mode {
  Random = "random",
  Smart = "smart",
}

interface Flashcard {
  turkish: string;
  english: string;
  pos?: string;
}

interface ModalProps {
  isOpen: boolean;
  shuffle: boolean;
  mode: Mode;
  onClose: () => void;
  setMode: Dispatch<SetStateAction<Mode>>;
  resetState: () => void;
  setFlashcards: Dispatch<SetStateAction<Flashcard[]>>;
  setShuffle: Dispatch<SetStateAction<boolean>>;
  setInputMode: Dispatch<SetStateAction<boolean>>;
  inputMode: boolean;
}

const FlashcardSettings = ({
  isOpen,
  onClose,
  setMode,
  resetState,
  setFlashcards,
  shuffle,
  setShuffle,
  mode,
  setInputMode,
  inputMode,
}: ModalProps) => {
  const [selectedMode, setSelectedMode] = useState(Mode.Random);
  const [selectedVocab, setSelectedVocab] = useState("verbs");

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
  };

  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMode(event.target.value as Mode);
  };

  const handleVocabChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVocab(event.target.value);
  };
  const handleSave = () => {
    setMode(selectedMode);
    const newFlashcards = vocabSets[selectedVocab as keyof typeof vocabSets];
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
