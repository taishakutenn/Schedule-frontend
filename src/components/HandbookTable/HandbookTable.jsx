import { useMemo, useCallback, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { getColumnDefs, getIdFieldName } from "./tableConfig";
import { columnVisibilityFeature, rowSelectionFeature, tableFeatures, useTable } from "@tanstack/react-table";

import "./handbookTable.css";

/**
 * Универсальная таблица хендбуков
 *
 * @param {Object} props
 * @param {string} props.handbookName - Название текущего выбранного хендбука
 * @param {Object} props.response - Данные с сервера для текущего хендбука
 * @param {Object[]} [props.response.data] - Массив записей для отображения в таблице
 * @param {boolean} props.response.isLoading - Флаг состояния загрузки данных
 * @param {Record<string, boolean>} props.rowSelection - Объект состояния выделенных строк (например, `{ "1": true }`)
 * @param {(updater: any) => void} props.onRowSelectionChange - Колбек изменения выделения строк (передаётся в TanStack Table)
 */
export function HandbookTable({ handbookName, response: { data, isLoading }, rowSelection, onRowSelectionChange }) {
  const idFieldName = useMemo(() => getIdFieldName(handbookName), [handbookName]);

  // getRowId берёт ID из поля, помеченного isId в конфиге
  const getRowId = useCallback((row) => String(row[idFieldName]), [idFieldName]);

  const columns = useMemo(() => getColumnDefs(handbookName), [handbookName]);
  const features = useMemo(() => tableFeatures({ columnVisibilityFeature, rowSelectionFeature }), []);

  const table = useTable({
    features,
    data: data ?? [],
    columns,
    getRowId,
    state: { rowSelection }, // выделение контролируется из менеджера
    onRowSelectionChange, // TanStack сообщает сюда о ЛЮБОМ изменении выделения
    enableRowSelection: true, // позволяет выделять строки таблицы
    enableMultiRowSelection: false, // одновременно выделена только одна строка
  });

  const clickOutsideRef = useRef(null); // Храним ссылку на объект dom, клик вне которого должен снять выделение
  useClickOutside(
    clickOutsideRef,
    () => {
      table.resetRowSelection();
    },
    ".exceptedButton",
  );

  const isWideTable = columns.length > 3;

  return (
    <div className="handbook-table-wrapper" ref={clickOutsideRef}>
      <table className={isWideTable ? "handbook-table handbook-table--wide" : "handbook-table"}>
        <thead className="handbook-table__head">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.column.columnDef.header}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length}>Загрузка таблицы</td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={row.getIsSelected() ? "handbook-table__row--selected" : ""}
                onClick={row.getToggleSelectedHandler()}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{cell.getValue()}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
