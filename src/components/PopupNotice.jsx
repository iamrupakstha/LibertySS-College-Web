import React, { useEffect } from 'react'
import '../styles/PopupNotice.css'
import admissioImage from '../assets/notice/admissionopn.jpg'

const PopupNotice = ({ onClose }) => {
  // Close popup with Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        
        <div className="popup-content">
          <div className="popup-image">
            <img src={admissioImage} alt="" />
          </div>

          <button className="popup-button" onClick={onClose} aria-label="Close">
          Got it!
        </button>      
        </div>
      </div>
    </div>
  )
}

export default PopupNotice