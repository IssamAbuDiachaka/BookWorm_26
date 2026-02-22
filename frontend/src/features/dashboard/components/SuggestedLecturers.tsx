import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LECTURERS = [
  { id: "1", name: "Dr. Sarah Jenkins", department: "Mathematics Dept" },
  { id: "2", name: "Prof. Marcus Thorne", department: "Computer Science" },
  { id: "3", name: "Dr. Emily Watson", department: "Medical Imaging" },
  { id: "4", name: "Dr. James Chen", department: "Physics Dept" },
] as const;

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function SuggestedLecturers({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold">
          Suggested Lecturers
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 pt-0">
        {LECTURERS.map((lecturer) => (
          <div
            key={lecturer.id}
            className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
          >
            <Avatar className="size-10 shrink-0">
              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                {getInitials(lecturer.name)}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{lecturer.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {lecturer.department}
              </p>
            </div>
            <Button size="sm" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
              Connect
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
