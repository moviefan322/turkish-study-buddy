import { Dispatch, SetStateAction, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { daysOfTheWeek } from "../../data/vocab/daysOfWeek";
import { food } from "../../data/vocab/food";
import { months } from "../../data/vocab/months";
import { verbs } from "../../data/vocab/verbs";
import { nouns } from "../../data/vocab/nouns";
import { adjectives } from "@/data/vocab/adjectives";
import { numbers } from "@/data/vocab/numbers";
import styles from "./FlashcardSettings.module.css";

enum Mode {
  Random = "random",
  Smart = "smart",
}

interface Flashcard {
  turkish: string;
  english: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setMode: Dispatch<SetStateAction<Mode>>;
  resetState: () => void;
  setFlashcards: Dispatch<SetStateAction<Flashcard[]>>;
}

const FlashcardSettings = ({ isOpen, onClose, setMode, resetState, setFlashcards }: ModalProps) => {
  const [selectedMode, setSelectedMode] = useState(Mode.Random);
  const [selectedVocab, setSelectedVocab] = useState("verbs");

  const vocabSets = {
    verbs,
    daysOfTheWeek,
    months,
    food,
    nouns,
    adjectives,
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
                  <select name="mode" id="mode" value={selectedVocab} onChange={handleVocabChange}>
                    <option value={"verbs"}>Verbs</option>
                    <option value={"nouns"}>Nouns</option>
                    <option value={"adjectives"}>Adjectives</option>
                    <option value={"food"}>Food</option>
                    <option value={"daysOfTheWeek"}>Days</option>
                    <option value={"months"}>Months</option>
                    <option value={"numbers"}>Numbers</option>
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
