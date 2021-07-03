const debounce = (callback) => {
  let timerId = null;

  return () => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, 150);
  };
};

export default debounce;
