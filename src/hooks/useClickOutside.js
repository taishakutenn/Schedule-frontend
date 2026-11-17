import { useEffect, useRef } from "react";

// Вызывает callback при клике вне элемента ref
// exceptSelector не считается кликом снаружи (передаём css-селекторы)
export function useClickOutside(ref, callback, exceptSelector = null) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (event) => {
      // Клик внутри отслеживаемого элемента - игнорируем
      if (!ref.current || ref.current.contains(event.target)) return;

      // Клик по исключённому элементу (кнопке и т.п.) - игнорируем
      if (exceptSelector && event.target.closest(exceptSelector)) return;

      callbackRef.current();
    };

    document.addEventListener("mousedown", handler);

    // Снимаем слушатель при перезапуске эффекта и размонтировании
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, exceptSelector]);
}
