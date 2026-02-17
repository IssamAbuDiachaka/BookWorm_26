import { create } from "zustand";

export type Theme = "light" | "dark";

interface AppState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("bookworm-theme", theme);
  } catch {
    // ignore
  }
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  theme: "light",
  setTheme: (theme) => {
    set({ theme });
    applyTheme(theme);
  },
  toggleTheme: () => {
    set((s) => {
      const next = s.theme === "light" ? "dark" : "light";
      applyTheme(next);
      return { theme: next };
    });
  },
}));
