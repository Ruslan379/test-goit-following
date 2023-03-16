import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import css from 'components/ModalNullBalance/ModalNullBalance.module.css' 




const modalRoot = document.querySelector('#modal-root');


export function ModalNullBalance({ children, onClose }) {

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]); 


  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };



    return createPortal(
      <div
        className={css.Overlay1}
        onClick={handleBackdropClick}
      >
          <div className={css.Modal}>
          {children}
          </div>
      </div>,
      modalRoot,
    );
  }


ModalNullBalance.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

