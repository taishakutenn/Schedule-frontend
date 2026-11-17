import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

import "./modal.css";

/**
 * Модальное окно
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Флаг, обозначающий, открыто ли модальное окно
 * @param {() => void} props.onClose - Колбек-функция для закрытия окна
 * @param {React.ReactNode} props.children - Содержимое модального окна
 * @param {"small" | "medium" | "large"} [props.size="medium"] - Размер модального окна
 * @param {string} [props.title="Модальное окно"] - Заголовок в модальном окне
 */
export function Modal({ isOpen, onClose, children, size = "medium", title = "Модальное окно" }) {
  const modalRef = useRef(null);

  // Клик вне окна закрывает модалку
  useClickOutside(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className={`modal__window modal__window--${size}`} ref={modalRef}>
        <div className="modal__header">
          <span className="modal__title">{title}</span>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Закрыть">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
