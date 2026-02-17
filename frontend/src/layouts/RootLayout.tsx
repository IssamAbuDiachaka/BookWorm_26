import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";
import { useAppStore } from "@/stores/useAppStore";
import { cn } from "@/lib/utils";

const THEME_KEY = "bookworm-theme";

export function RootLayout() {
  const setTheme = useAppStore((s) => s.setTheme);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, [setTheme]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppSidebar />
      <AppHeader />
      <RightSidebar />
      <main
        className={cn(
          "min-h-screen pt-14",
          "md:pl-[260px]",
          "lg:pr-[300px]"
        )}
      >
        <div className="mx-auto max-w-5xl px-4 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
