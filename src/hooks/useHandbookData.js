import { useEffect, useMemo, useState } from "react";
import { getTableConfig, API_URI } from "../components/HandbookTable/tableConfig.js";

const DEFAULT_PAGE_INDEX = 1; // Начальная страница для каждого хендбука
const DEFAULT_PAGE_SIZE = 20; // Размер записей на одной странице хенбуков
const DEFAULT_PAGINATION = { pageIndex: DEFAULT_PAGE_INDEX, pageSize: DEFAULT_PAGE_SIZE };

/**
 * Формирует URL с query-параметрами пагинации для GET-запроса
 *
 * @param {string} endpoint - Эндпоинт, на который должен идти запрос
 * @param {string} API_URI - Базовый URI API, повторяющаяся часть URL
 * @param {Object} pagination - Настройки пагинации
 * @param {number} [pagination.pageIndex] - Номер текущей страницы
 * @param {number} [pagination.pageSize] - Количество записей на странице
 * @returns {string} Сформированный URL-адрес с параметрами пагинации
 */
const buildUrl = (endpoint, API_URI, pagination) => {
  const resolvedEndpoint = API_URI + endpoint;
  const url = new URL(resolvedEndpoint);

  url.searchParams.set("page", String(pagination.pageIndex ?? DEFAULT_PAGE_INDEX));
  url.searchParams.set("limit", String(pagination.pageSize ?? DEFAULT_PAGE_SIZE));

  return url.toString();
};

/**
 * Хук для получения записей хендбука с сервера
 *
 * @param {Object} props
 * @param {string} props.handbookName - Название хендбука
 * @param {Object} [props.pagination=DEFAULT_PAGINATION] - Настройки пагинации
 * @param {number} [props.pagination.pageIndex] - Номер текущей страницы
 * @param {number} [props.pagination.pageSize] - Количество записей на странице
 * @returns {{ data: any[] | null, isLoading: boolean }} Данные с сервера и флаг состояния загрузки
 */
export function useHandbookData({ handbookName, pagination = DEFAULT_PAGINATION }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Запрос только к текущему выбранному хендбуку
  const config = useMemo(() => {
    if (!handbookName) {
      return;
    }

    return getTableConfig(handbookName);
  }, [handbookName]);

  useEffect(() => {
    if (!config) {
      return;
    }

    const controller = new AbortController();

    const url = buildUrl(config.endpoint, API_URI, pagination);
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        }
      });

    return () => controller.abort();
  }, [config, handbookName, pagination]);

  return { data, isLoading };
}
