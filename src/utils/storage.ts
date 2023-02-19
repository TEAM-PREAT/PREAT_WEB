export const setStorage = (key: string, item: Record<string, unknown>) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};
