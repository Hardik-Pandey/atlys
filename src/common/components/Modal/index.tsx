import React, { ReactNode } from 'react';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-3px bg-black bg-opacity-50 z-50">
      <div className="rounded-lg shadow-lg relative">
        <div className="w-8 h-8 flex justify-center absolute top-4 right-4 bg-[var(--primaryDark)] rounded-full cursor-pointer" onClick={onClose}>
          <button
            className="text-lg mt-[-3px] text-white rounded-full"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
