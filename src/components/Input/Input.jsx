import "./input.css";

/**
 * Поле ввода с кнопкой очистки
 *
 * @param {Object} props
 * @param {string} props.value - Текущее значение инпута
 * @param {(event: any) => void} props.onChange - Колбек изменения значения
 * @param {string} [props.placeholder=""] - Плейсхолдер
 * @param {string} [props.type="text"] - Тип поля (text, password, email и др.)
 */
export function Input({ value, onChange, placeholder = "", type = "text", ...props }) {
  // Очистка поля по крестику
  const handleClear = () => {
    onChange({ target: { value: "" } });
  };

  return (
    <div className="input">
      <input
        className="input__field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {value && (
        <button type="button" className="input__clear" onClick={handleClear} aria-label="Очистить">
          ×
        </button>
      )}
    </div>
  );
}
