export function debounce(func: () => void, timeout = 1000) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func();
    }, timeout);
  };
}
