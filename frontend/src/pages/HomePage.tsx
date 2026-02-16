import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8">
      <BookOpen className="size-16 text-primary mb-4" aria-hidden />
      <h1 className="text-3xl font-bold tracking-tight">Bookworm</h1>
      <p className="text-muted-foreground mt-2 text-center max-w-md">
        Educational collaboration platform for students and lecturers.
      </p>
      <div className="mt-8 flex gap-4">
        <Button>Get started</Button>
        <Button variant="outline">Learn more</Button>
      </div>
    </div>
  );
}
