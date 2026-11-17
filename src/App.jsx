import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import TeachersLoadPage from "./pages/TeachersLoadPage/TeachersLoadPage";
import HandbooksPage from "./pages/HandbooksPage/HandbooksPage";
import DocsPage from "./pages/DocsPage/DocsPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const pages = [
  { name: "Главная", path: "/", Component: HomePage },
  { name: "Расписание", path: "/schedule", Component: SchedulePage },
  { name: "Нагрузка", path: "/teachers-load", Component: TeachersLoadPage },
  { name: "Хэндбуки", path: "/handbooks", Component: HandbooksPage },
  { name: "Документация", path: "/docs", Component: DocsPage },
  { name: "Админка", path: "/admin", Component: AdminPage },
];

function App() {
  return (
    <div className="main-container">
      {/* Хедер */}
      <Header pages={pages} />

      {/* Основной контент страницы */}
      <div className="main-content">
        <Routes>
          {pages.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
}

export default App;
