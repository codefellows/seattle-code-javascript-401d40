import React from 'react';
import './modal.scss';

function Modal({ show, children, onClose }) {

  if (show) {
    return (
      <div className="modal-background">
        <div className="modal">
          <section>
            <h2>Modal Menu</h2>
            <button onClick={onClose}>X</button>
          </section>
          <section className="modal-main">
            {children}
          </section>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default Modal;
