import { getHandbookLabel } from "../HandbookTable/tableConfig";
import "./handbookMenu.css";

/**
 * Меню выбора хендбука
 *
 * @param {Object} props
 * @param {string[]} props.handbooks - Список имён хендбуков
 * @param {string} props.selectedHandbook - Текущий выбранный хендбук
 * @param {(name: string) => void} props.onSelect - Обработчик выбора хендбука
 */
export function HandbookMenu({ handbooks, selectedHandbook, onSelect }) {
  return (
    <nav className="handbook-menu">
      <ul className="handbook-menu-list">
        {handbooks.map((name) => {
          const label = getHandbookLabel(name);
          const isActive = selectedHandbook === name;
          return (
            <li key={name} className="handbook-menu-list__item">
              <button
                type="button"
                data-text={label}
                className={`handbook-menu-list__button${isActive ? " handbook-menu-list__button--active" : ""}`}
                onClick={() => onSelect(name)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
