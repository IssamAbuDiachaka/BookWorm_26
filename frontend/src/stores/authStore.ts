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

// Derived isAuthenticated: select with useAuthStore(s => !!s.user && !!s.token)
// or we add a getter in the store. Zustand doesn't support getters in the state object.
// So we add isAuthenticated as a computed in the set() - but that would require
// storing it. Easiest: compute in the partialize we don't persist it; we derive on read.
// So in the store we don't store isAuthenticated; we use a selector.
// User requirement: "isAuthenticated: boolean" - so they want to read it. We can add
// a selector function or we compute isAuthenticated in the store by making it
// a property that's always derived. In Zustand, we can do:
// useAuthStore.getState() returns { user, token, ... } and isAuthenticated could be
// a function. So we add: isAuthenticated: () => !!get().user && !!get().token
// But that's not a boolean, it's a function. So we use a selector in components:
// const isAuthenticated = useAuthStore(s => !!s.user && !!s.token);
// Or we add isAuthenticated to the state and update it whenever user/token change.
// That way it's always in sync. So: login sets isAuthenticated true, logout sets false,
// and we don't persist isAuthenticated (it's derived from user/token on rehydrate).
// Actually the simplest is: when we persist and rehydrate, we have user and token.
// So isAuthenticated = !!user && !!token. We can add it as a stored field that we
// set in login/logout and in setUser (if we set user to null, isAuthenticated false).
// Or we don't store it and document that consumers should use: useAuthStore(s => !!s.user && !!s.token).
// The requirement says "isAuthenticated: boolean" - I'll add it to the state and keep it in sync
// in login/logout/setUser so it's a normal boolean. We don't persist it (it's redundant with user/token).
</think>
Adding `isAuthenticated` to the store and keeping it in sync with `user` and `token`.
<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
StrReplace