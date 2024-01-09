// save keys to local storage
// export const saveToLS = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

export const saveToLS = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return false;
  }
};

// get keys from local storage
export const getFromLS = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return false;
  }
};

export const removeFromLS = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing item from local storage:", error);
  }
};