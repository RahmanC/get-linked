import { Modal } from "@/types/types";

const Modal = ({ showModal, children, onClose }: Modal) => {
  if (!showModal) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50   bg-[rgba(21,14,40,0.93)] mx-3   transition-all duration-500">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="max-w-[600px] w-full border border-tertiary bg-rgba(255,255,255,0.01)] rounded-[0.3rem] p-3 py-6 md:py-8 md:px-7 lg:px-16  transition-all duration-300  delay-200">
        {children}
      </div>
    </div>
  );
};

export default Modal;
