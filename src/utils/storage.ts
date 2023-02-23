export const JOIN_SETTING_VALUE_KEY = 'setting-value';
export const JOIN_STEP_KEY = 'join-step';

export const setStorage = (
  key: string,
  item: Record<string, unknown> | string | number,
) => {
  if (typeof item === 'object') {
    localStorage.setItem(key, JSON.stringify(item));
  }
  if (typeof item === 'number') {
    localStorage.setItem(key, item + '');
  }
  if (typeof item === 'string') {
    localStorage.setItem(key, item);
  }
};

export const getStorage = (key: string) => {
  const item = localStorage.getItem(key) ?? '';
  if (item) {
    return JSON.parse(item);
  } else {
    return null;
  }
};

export const removeStorage = (key: string) => {
  const item = localStorage.removeItem(key);
  return item;
};
