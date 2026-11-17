import "./button.css";

/**
 * Универсальный компонент кнопки
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Содержимое кнопки (текст, иконка или JSX)
 * @param {"primary" | "secondary" | "success" | "danger"} [props.variant="primary"] - Вариант оформления кнопки
 * @param {"small" | "medium" | "large"} [props.size="medium"] - Размер кнопки
 * @param {string} [props.action="click"] - Модификатор действия для CSS-класса
 * @param {string} [props.btnRefName] - Дополнительный CSS-класс кнопки
 * @param {(event: any) => void} [props.onClick] - Колбек нажатия на кнопку
 * @param {boolean} [props.disabled=false] - Отключена ли кнопка
 * @param {"button" | "submit" | "reset"} [props.type="button"] - HTML-тип кнопки
 */
export default function Button({
  children,
  variant = "primary",
  size = "medium",
  action = "click",
  btnRefName = null,
  onClick,
  disabled = false,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} btn--${action} ${btnRefName ?? ""}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
