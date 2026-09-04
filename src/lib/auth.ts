import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  grantAccess: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,

      login: async (email: string) => {
        set({ isLoading: true });
        // Mock auth — replace with real API
        await new Promise((r) => setTimeout(r, 800));
        const user: User = {
          id: crypto.randomUUID(),
          email,
          name: email.split("@")[0],
          hasAccess: false,
        };
        set({ user, isLoading: false });
        return true;
      },

      signup: async (name: string, email: string) => {
        set({ isLoading: true });
        await new Promise((r) => setTimeout(r, 800));
        const user: User = {
          id: crypto.randomUUID(),
          email,
          name,
          hasAccess: false,
        };
        set({ user, isLoading: false });
        return true;
      },

      logout: () => set({ user: null }),

      grantAccess: () => {
        const { user } = get();
        if (user) {
          set({
            user: {
              ...user,
              hasAccess: true,
              purchasedAt: new Date().toISOString(),
            },
          });
        }
      },
    }),
    { name: "motionforge-auth" }
  )
);
