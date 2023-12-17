declare global {
  interface Window {
    electron: {
      throwError: () => void;
      crash: () => void;
    }
  }
}

export {};