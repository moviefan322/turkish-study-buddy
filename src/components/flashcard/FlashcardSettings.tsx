import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import styles from "./Settings.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FlashcardSettings = ({ isOpen, onClose }: ModalProps) => {

  const handleSave = () => {
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
