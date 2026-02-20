import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";
import { cn } from "@/lib/utils";

export function WelcomeSection({ className }: { className?: string }) {
  const user = useAuthStore((s) => s.user);
  const displayName = user?.username ?? user?.email?.split("@")[0] ?? "Alex";
  const program = user?.program ?? "Computer Science";

  return (
    <section
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome back, {displayName}!
        </h2>
        <p className="mt-1 text-muted-foreground">
          Check out what&apos;s happening in your {program} courses today.
        </p>
      </div>
      <Button size="lg" className="shrink-0 gap-2 bg-primary hover:bg-primary/90">
        <Upload className="size-5" aria-hidden />
        Upload Media
      </Button>
    </section>
  );
}
