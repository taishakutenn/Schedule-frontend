import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./header.css";

/**
 * @typedef {Object} PageItem
 * @property {string} name - Название ссылки в меню
 * @property {string} path - Путь маршрута
 * @property {React.ComponentType<any>} Component - Компонент страницы
 */
/**
 * Хедер сайта
 *
 * @param {{ pages: PageItem[] }} props
 */
export default function Header({ pages }) {
  return (
    <div className="header">
      <div className="header-container">
        <NavLink to="/" end className="header-container__logo">
          SCHEDULE
        </NavLink>
        <ul className="header-container__nav">
          {pages.map((page) => (
            <li key={page.path}>
              <NavLink
                to={page.path}
                end={page.path === "/"}
                className={({ isActive }) => `nav-item nav-item-primary${isActive ? " nav-item--active" : ""}`}
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="header-container__user">
          <Button>Войти</Button>
        </div>
      </div>
    </div>
  );
}
