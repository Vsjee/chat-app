export const addLocalStorage = <T>(userKey: string, value: T) => {
  localStorage.setItem(userKey, JSON.stringify({ ...value }));
};

export const removeLocalStorage = (userKey: string) => {
  localStorage.removeItem(userKey);
};
