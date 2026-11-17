import { useState, useMemo } from "react";
import { useHandbookData } from "../../hooks/useHandbookData";
import { HandbookTable } from "../HandbookTable/HandbookTable";
import { Modal } from "../Modal/Modal";
import { Input } from "../Input/Input";
import Button from "../Button/Button";

import { getIdFieldName } from "../HandbookTable/tableConfig";

import "./handbookManager.css";

/**
 * Контейнер для управления таблицей хендбука
 *
 * @param {Object} props
 * @param {String} props.handbookName - Название текущего выбранного хендбука
 */
export function HandbookManager({ handbookName }) {
  const nextPageStr = ">";
  const previousPageStr = "<";

  // Инпут
  const [searchQuery, setSearchQuery] = useState("");
  // Пагинация
  const [pagination, setPagination] = useState({ pageIndex: 1, pageSize: 20 });
  // Выделенная строка таблицы в формате TanStack
  const [rowSelection, setRowSelection] = useState({});
  // Модалка
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Данные с сервера
  const response = useHandbookData({ handbookName, pagination });

  // Получение данных из выделенной строки
  // id выделенной строки, null если ничего не выделено
  const selectedRowId = Object.keys(rowSelection).find((key) => rowSelection[key]) ?? null;

  const idFieldName = getIdFieldName(handbookName);

  // Полная запись из данных, которые рисует таблица
  const selectedRow = useMemo(
    () => response.data?.find((row) => String(row[idFieldName]) === selectedRowId) ?? null,
    [response.data, selectedRowId, idFieldName],
  );

  // Управление данными
  const create = () => {
    console.log("Запись создана");
  };

  // Управление пагинацией
  const handlePreviousPage = () => {
    setPagination((prev) => ({ ...prev, pageIndex: Math.max(1, prev.pageIndex - 1) }));
  };

  const handleNextPage = () => {
    setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }));
  };

  return (
    <div className="handbook-manager">
      <div className="handbook-manager__toolbar">
        <Button
          btnRefName="exceptedButton"
          onClick={() => {
            (setIsModalOpen(true), console.log(selectedRow));
          }}
        >
          Создать
        </Button>
        <Button btnRefName="exceptedButton" disabled={!selectedRow}>
          Изменить
        </Button>
        <Button btnRefName="exceptedButton" variant="danger" disabled={!selectedRow}>
          Удалить
        </Button>
        <Input placeholder="Поиск..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
      </div>

      <HandbookTable
        handbookName={handbookName}
        response={response}
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
      />

      <div className="handbook-manager__pagination">
        <Button onClick={handlePreviousPage}>{previousPageStr}</Button>
        <Button disabled={true}>{pagination.pageIndex}</Button>
        <Button onClick={handleNextPage}>{nextPageStr}</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Данные модалки</p>
      </Modal>
    </div>
  );
}
