import { Bell, Moon, Search, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AppSidebarTrigger } from "./AppSidebar";
import { useAppStore } from "@/stores/useAppStore";
import { cn } from "@/lib/utils";

const placeholder = "Search for papers, lecturers, or courses (Cmd+K)";

export function AppHeader() {
  const theme = useAppStore((s) => s.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:left-[260px] lg:right-[320px]">
      <div className="flex flex-1 items-center gap-3">
        <AppSidebarTrigger />
        <div className="hidden items-center gap-2 md:flex">
          <span className="text-lg font-semibold text-primary md:text-base">
            Bookworm
          </span>
        </div>
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input
            type="search"
            placeholder={placeholder}
            className="h-9 w-full pl-9 pr-4"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun className="size-5" aria-hidden />
          ) : (
            <Moon className="size-5" aria-hidden />
          )}
        </Button>
        <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
          <Bell className="size-5" aria-hidden />
          <Badge
            variant="destructive"
            className="absolute -right-1 -top-1 size-4 rounded-full p-0 text-[10px]"
          >
            3
          </Badge>
        </Button>
        <div className="flex items-center gap-2 pl-2">
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Computer Science</span>
          </div>
        </div>
      </div>
    </header>
  );
}
