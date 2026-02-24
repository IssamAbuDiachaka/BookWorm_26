import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ActiveChatRooms } from "@/features/dashboard/components/ActiveChatRooms";
import SuggestedLecturers from "@/features/dashboard/components/SuggestedLecturers";
import { cn } from "@/lib/utils";

export function RightSidebar() {
  return (
    <aside
      className={cn(
        "fixed right-0 top-0 z-20 hidden h-screen w-[300px] flex-col gap-6 overflow-y-auto overscroll-y-contain border-l bg-card p-4 lg:flex",
        "pt-14"
      )}
    >
      <section>
        <SuggestedLecturers />
      </section>
      <section>
        <ActiveChatRooms />
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
