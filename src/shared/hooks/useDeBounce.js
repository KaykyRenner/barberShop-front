import { useCallback, useRef } from "react";

const useDebounce = (delay = 1000, valorInicial = true) => {
  const isFirstTime = useRef(valorInicial);
  const debouncing = useRef();

  const debounce = useCallback(
    (func) => {
      if (isFirstTime.current) {
        isFirstTime.current = false;   
        return func()
      } else {
        if (debouncing.current) clearTimeout(debouncing.current);
        debouncing.current = setTimeout(() => {
          func();
        }, delay);
      }
    },
    [delay]
  );

  return { debounce };
};

export default useDebounce;
