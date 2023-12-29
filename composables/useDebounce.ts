export const useDebounce = (callback: any, delay: number) => {
  const timer = ref();

  const debouncedCallback = (...args: any) => {
    if (timer.value) {
      clearTimeout(timer.value);
    }
    timer.value = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};
