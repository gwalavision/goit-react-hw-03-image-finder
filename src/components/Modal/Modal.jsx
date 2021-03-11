import s from "./Modal.module.css";
import { createPortal } from "react-dom";
import React, { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ picture, toggleModal, onBackdropClick }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return createPortal(
    <div className={s.Overlay} onClick={onBackdropClick}>
      <div className={s.Modal}>
        <img src={picture.largeImageURL} alt={picture.tags} />;
      </div>
      <button type="button"></button>
    </div>,
    modalRoot
  );
};

export default Modal;
