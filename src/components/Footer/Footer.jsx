import "./footer.css";

/**
 * Футер сайта
 */
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <ul className="footer-container__developers">
          <li className="nav-item nav-item-secondary">Protocol 418:</li>
          <li className="nav-item nav-item-secondary">taishakutenn</li>
          <li className="nav-item nav-item-secondary">cy-neck</li>
        </ul>
        <div className="footer-container__info-block">
          <div>ОГТИ: 2026</div>
          <div>Хелло, Юрий Иванович!</div>
        </div>
      </div>
    </div>
  );
}
