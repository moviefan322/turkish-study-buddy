import { Dispatch, SetStateAction, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import styles from "./FlashcardSettings.module.css";

enum Mode {
  Random = "random",
  Smart = "smart",
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setMode: Dispatch<SetStateAction<Mode>>;
  resetState: () => void;
}

const FlashcardSettings = ({ isOpen, onClose, setMode, resetState }: ModalProps) => {
  const [selectedMode, setSelectedMode] = useState(Mode.Random);

  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMode(event.target.value as Mode);
  };

  const handleSave = () => {
    setMode(selectedMode);
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
