import {
  BookOpen,
  Calendar,
  Folder,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  Menu,
  Play,
  Upload,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAppStore } from "@/stores/useAppStore";
import { cn } from "@/lib/utils";

const MAIN_MENU = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/media", label: "Media", icon: Play },
  { to: "/research", label: "Research", icon: BookOpen },
  { to: "/quizzes", label: "Quizzes", icon: HelpCircle },
  { to: "/chat", label: "Chat", icon: MessageSquare, badge: 4 },
  { to: "/tuition", label: "Tuition", icon: GraduationCap },
] as const;

const ACADEMIC_TOOLS = [
  { to: "/schedule", label: "Schedule", icon: Calendar },
  { to: "/resources", label: "Resources", icon: Folder },
] as const;

function SidebarContent() {
  return (
    <>
      <div className="flex h-14 items-center gap-2 border-b px-4 md:px-3">
        <BookOpen className="size-8 shrink-0 text-primary" aria-hidden />
        <span className="font-semibold text-primary">Bookworm</span>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        <p className="mb-2 px-3 text-xs font-medium text-muted-foreground">
          Main Menu
        </p>
        {MAIN_MENU.map(({ to, label, icon: Icon, badge }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <Icon className="size-5 shrink-0" aria-hidden />
            <span className="flex-1">{label}</span>
            {badge != null && (
              <Badge variant="secondary" className="ml-auto">
                {badge}
              </Badge>
            )}
          </NavLink>
        ))}
        <p className="mb-2 mt-6 px-3 text-xs font-medium text-muted-foreground">
          Academic Tools
        </p>
        {ACADEMIC_TOOLS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <Icon className="size-5 shrink-0" aria-hidden />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t p-3">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="flex flex-col gap-3 p-4">
            <div className="flex items-center gap-2">
              <Upload className="size-5 text-primary" aria-hidden />
              <span className="text-sm font-medium">Upgrade Storage</span>
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export function AppSidebar() {
  const { sidebarOpen, setSidebarOpen } = useAppStore();

  return (
    <>
      {/* Mobile: Sheet (trigger is in header) */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent
          side="left"
          className="flex w-[280px] flex-col p-0 md:hidden"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>
      {/* Desktop: Fixed sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[260px] flex-col border-r bg-card md:flex">
        <SidebarContent />
      </aside>
    </>
  );
}

export function AppSidebarTrigger() {
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Open menu"
      className="md:hidden"
      onClick={() => setSidebarOpen(true)}
    >
      <Menu className="size-5" aria-hidden />
    </Button>
  );
}
