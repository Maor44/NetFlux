import React from 'react';

export function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button className='modal-close' onClick={handleClose}>
          X
        </button>
      </section>
    </div>
  );
}
