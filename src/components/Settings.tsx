import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import styles from "./Settings.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  moodList: string[] | null;
  setMoodList: Function;
}

const Settings = ({ isOpen, onClose, moodList, setMoodList }: ModalProps) => {
  const [checkboxState, setCheckboxState] = useState({
    standardMood: false,
    Negative: false,
    Interrogative: false,
    NegativeInterrogative: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSave = () => {
    const moods = [];
    if (checkboxState.standardMood) {
      moods.push("standardMood");
    }
    if (checkboxState.Negative) {
      moods.push("Negative");
    }
    if (checkboxState.Interrogative) {
      moods.push("Interrogative");
    }
    if (checkboxState.NegativeInterrogative) {
      moods.push("NegativeInterrogative");
    }
    setMoodList(moods);
    onClose();
  };

  console.log(moodList);

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
              <h6>Select Forms</h6>
              <div className="d-flex flex-column justify-content-center align-items-start">
                <label>
                  <input
                    type="checkbox"
                    name="standardMood"
                    checked={checkboxState.standardMood}
                    onChange={handleCheckboxChange}
                  />{" "}
                  Standard
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Negative"
                    checked={checkboxState.Negative}
                    onChange={handleCheckboxChange}
                  />{" "}
                  Negative
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Interrogative"
                    checked={checkboxState.Interrogative}
                    onChange={handleCheckboxChange}
                  />{" "}
                  Interrogative
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="NegativeInterrogative"
                    checked={checkboxState.NegativeInterrogative}
                    onChange={handleCheckboxChange}
                  />{" "}
                  Negative Interrogative
                </label>
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

export default Settings;
