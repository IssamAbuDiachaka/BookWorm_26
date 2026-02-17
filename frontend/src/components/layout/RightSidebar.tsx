import { BookOpen, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RightSidebar() {
  return (
    <aside
      className={cn(
        "fixed right-0 top-0 z-20 hidden h-screen w-[300px] flex-col gap-6 border-l bg-card p-4 lg:flex",
        "pt-14"
      )}
    >
      <section>
        <h2 className="mb-3 text-sm font-semibold text-foreground">
          Suggested Lecturers
        </h2>
        <Card>
          <CardContent className="flex flex-col gap-2 pt-4">
            <p className="text-sm text-muted-foreground">
              Placeholder: lecturer cards will appear here.
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <MessageSquare className="size-4" aria-hidden />
          Active Chat Rooms
        </h2>
        <Card>
          <CardContent className="flex flex-col gap-2 pt-4">
            <p className="text-sm text-muted-foreground">
              Placeholder: active rooms will appear here.
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <BookOpen className="size-4" aria-hidden />
              Upcoming Exam
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Placeholder: next exam date and subject.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View schedule
            </Button>
          </CardContent>
        </Card>
      </section>
    </aside>
  );
}
