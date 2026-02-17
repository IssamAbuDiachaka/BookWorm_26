import { LayoutDashboard } from "lucide-react";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back. Here’s an overview of your activity.
        </p>
      </div>
      <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed bg-muted/30">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <LayoutDashboard className="size-10" aria-hidden />
          <span className="text-sm">Dashboard content will go here.</span>
        </div>
      </div>
    </div>
  );
}
