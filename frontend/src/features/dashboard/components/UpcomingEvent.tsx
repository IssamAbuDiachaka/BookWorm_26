import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const UPCOMING_EXAM = {
  label: "Upcoming Exam",
  title: "Fundamentals of AI",
  date: "Next Friday",
  cta: "Study Guide",
  href: "/schedule",
};

export function UpcomingEvent({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        "border-0 bg-primary text-primary-foreground shadow-none",
        className
      )}
    >
      <CardContent className="flex flex-col gap-3 p-5">
        <p className="text-sm opacity-90">{UPCOMING_EXAM.label}</p>
        <p className="font-medium">{UPCOMING_EXAM.title}</p>
        <p className="text-2xl font-bold">{UPCOMING_EXAM.date}</p>
        <Button
          asChild
          variant="secondary"
          size="sm"
          className="mt-1 w-fit bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
        >
          <Link to={UPCOMING_EXAM.href}>{UPCOMING_EXAM.cta}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
