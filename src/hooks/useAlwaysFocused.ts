import { useLayoutEffect, useRef, type RefObject } from "react"

const useAlwaysFocused = (shouldFocus: boolean): RefObject<HTMLInputElement | null> => {
  const input = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (!shouldFocus) return;

    const focus = () => input.current?.focus();
    const handleBlur = () => setTimeout(focus, 0);

    focus();
    document.addEventListener("click", focus);
    input.current?.addEventListener("blur", handleBlur)

    return () => {
      document.removeEventListener("click", focus);
      input.current?.removeEventListener("blur", handleBlur)
    }
  }, [shouldFocus])

  return input;
}

export default useAlwaysFocused;
