export const readFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  };
  
  export const writeToLocalStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };