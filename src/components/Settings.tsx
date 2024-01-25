import { useState } from "react";
import {
  conjugateTurkishVerb,
  conjugateTurkishVerbInterrogative,
  conjugateTurkishVerbNegative,
  conjugateTurkishVerbNegativeInterrogative,
} from "@/utils/presentContinuous";
import { FaXmark } from "react-icons/fa6";
import styles from "./Settings.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  conjugationFunctions: Function[] | null;
  setConjugationFunctions: Function;
}

const Settings = ({ isOpen, onClose, setConjugationFunctions, conjugationFunctions }: ModalProps) => {
  const [checkboxState, setCheckboxState] = useState({
    presentContinuous: false,
    presentContinuousNegative: false,
    presentContinuousQuestion: false,
    presentContinuousQuestionNegative: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSave = () => {
    const functions = [];
    if (checkboxState.presentContinuous) {
      functions.push(conjugateTurkishVerb);
    }
    if (checkboxState.presentContinuousNegative) {
      functions.push(conjugateTurkishVerbNegative);
    }
    if (checkboxState.presentContinuousQuestion) {
      functions.push(conjugateTurkishVerbInterrogative);
    }
    if (checkboxState.presentContinuousQuestionNegative) {
      functions.push(conjugateTurkishVerbNegativeInterrogative);
    }
    setConjugationFunctions(functions);
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
              <h6>Select Forms</h6>
              <div className="d-flex flex-column justify-content-center align-items-start">
                <label>
                  <input
                    type="checkbox"
                    name="presentContinuous"
                    checked={checkboxState.presentContinuous}
                    onChange={handleCheckboxChange}
                  />{" "}
                  Standard
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="presentContinuousNegative"
                    checked={checkboxState.presentContinuousNegative}
                    onChange={handleCheckboxChange}
                  />{" "}
                  Negative
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="presentContinuousQuestion"
                    checked={checkboxState.presentContinuousQuestion}
                    onChange={handleCheckboxChange}
                  />{" "}
                  Interrogative
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="presentContinuousQuestionNegative"
                    checked={checkboxState.presentContinuousQuestionNegative}
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
