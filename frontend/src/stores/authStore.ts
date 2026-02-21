import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types/user";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      isAuthenticated: false,

      login: (user, token) =>
        set({ user, token, isAuthenticated: true, isLoading: false }),

      logout: () =>
        set({ user: null, token: null, isAuthenticated: false, isLoading: false }),

      setUser: (user) =>
        set((state) => ({
          user,
          isAuthenticated: user !== null && !!state.token,
        })),

      setLoading: (isLoading) =>
        set({ isLoading }),
    }),
    {
      name: "bookworm-auth",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);