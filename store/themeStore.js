// store/themeStore.js
import { create } from "zustand";
import { Appearance } from "react-native";

export const useThemeStore = create((set) => {
  // Initial state
  const initialDarkMode = Appearance.getColorScheme() === "dark";

  // Subscribe to system theme changes
  const listener = Appearance.addChangeListener(({ colorScheme }) => {
    set({ darkMode: colorScheme === "dark" });
  });

  return {
    darkMode: initialDarkMode,
    toggleDarkMode: () =>
      set((state) => ({ darkMode: !state.darkMode })),
    setDarkMode: (value) => set({ darkMode: value }),
  };
});
