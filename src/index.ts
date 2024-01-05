import { CacheMethods } from "./index.interface";

/**
 * description: sessionCache
 * 
 * description: set
 * @param {string} key
 * @param {any} value
 * description: get
 * @param {string} key
 * description: get
 * @param {string} key
 * description: setJSON
 * @param {string} key
 * @param {any} value
 * description: getJSON
 * @param {string} key
 * description: remove
 * @param {string} key
 * 
 *
 */
export const sessionCache: CacheMethods = {
  set(key, value) {
    if (!sessionStorage) {
      return;
    }
    if (key !== null && value !== null) {
      sessionStorage.setItem(key, value);
    }
  },
  get(key) {
    if (!sessionStorage) {
      return null;
    }
    if (key === null) {
      return null;
    }
    return sessionStorage.getItem(key);
  },
  setJSON(key, jsonValue) {
    if (jsonValue !== null && this.set) {
      this.set(key, JSON.stringify(jsonValue));
    }
  },
  getJSON(key) {
    if (!this.get) return null;
    const value = this.get(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  },
  remove(key) {
    sessionStorage.removeItem(key);
  },
};

/**
 * description: localCache
 * 
 * description: set
 * @param {string} key
 * @param {any} value
 * description: get
 * @param {string} key
 * description: get
 * @param {string} key
 * description: setJSON
 * @param {string} key
 * @param {any} value
 * description: getJSON
 * @param {string} key
 * description: remove
 * @param {string} key
 * 
 *
 */
export const localCache: CacheMethods = {
  set(key, value) {
    if (!localStorage) {
      return;
    }
    if (key !== null && value !== null) {
      localStorage.setItem(key, value);
    }
  },
  get(key) {
    if (!localStorage) {
      return null;
    }
    if (key === null) {
      return null;
    }
    return localStorage.getItem(key);
  },
  setJSON(key, jsonValue) {
    if (jsonValue !== null && this.set) {
      this.set(key, JSON.stringify(jsonValue));
    }
  },
  getJSON(key) {
    if (!this.get) return null;
    const value = this.get(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
