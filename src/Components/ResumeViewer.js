import React from 'react';
import '../styles/ResumeViewer.css';

function ResumeViewer({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="resume-overlay">
      <div className="resume-content">
        <button className="resume-close-btn" onClick={onClose}>
          &times;
        </button>
        <iframe
          src="resume.pdf"
          title="Resume"
          className="resume-iframe"
        ></iframe>
      </div>
    </div>
  );
}

export default ResumeViewer;
