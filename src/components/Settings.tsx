import React from "react";
import styles from "./Settings.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings = ({ isOpen, onClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className={`${styles.modalBackdrop}`}>
          <div className={`${styles.modal}`}>
            <button className={`${styles.modalCloseButton}`} onClick={() => onClose()}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
