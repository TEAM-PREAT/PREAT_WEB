export const JOIN_SETTING_VALUE_KEY = 'setting-value';

export const setStorage = (key: string, item: Record<string, unknown>) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getStorage = (key: string) => {
  const item = localStorage.getItem(key) ?? '';
  if (item) {
    return JSON.parse(item);
  } else {
    return null;
  }
};
