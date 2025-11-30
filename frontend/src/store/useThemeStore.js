import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
    document.documentElement.setAttribute("data-theme", theme); // apply theme to DOM
  },
}));

// Apply the stored theme on initial load
const savedTheme = localStorage.getItem("chat-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}
