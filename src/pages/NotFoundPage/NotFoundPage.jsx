import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="main">
      <h2>Страница не найдена</h2>
      <Link to="/" className="nav-item nav-item-primary">
        На главную
      </Link>
    </div>
  );
}
