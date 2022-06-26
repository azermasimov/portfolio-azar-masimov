import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "285px",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(10, 4, 60, 0.8)",
  padding: "50px",
  zIndex: 1000,
  borderRadius: "10px",
  boxShadow: "0 0 24px 0 rgba(0, 0, 0, 0.75)",
};

const ICON_STYLE = {
  fontSize: "35px",
  color: "#fff",
  cursor: "pointer",
  position: "absolute",
  top: "10px",
  right: "20px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
};

function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <i className="bi bi-x" style={ICON_STYLE} onClick={onClose}></i>
        {children}
        <Navbar />
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
