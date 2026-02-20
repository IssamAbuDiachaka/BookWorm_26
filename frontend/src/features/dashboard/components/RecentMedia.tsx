import { MoreVertical, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const MEDIA_PLACEHOLDERS = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop",
    duration: "45:12",
    title: "Linear Algebra: Advanced Eigenvalues",
    lecturer: "Dr. Sarah Jenkins",
    course: "Calculus II",
    progress: 65,
    updatedAt: "2h ago",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=225&fit=crop",
    duration: "28:40",
    title: "Security Protocols & Cryptography",
    lecturer: "Prof. Marcus Thorne",
    course: "CS501",
    progress: 0,
    updatedAt: "5h ago",
  },
];

export function RecentMedia({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Media Uploads</h3>
        <Link
          to="/media"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MEDIA_PLACEHOLDERS.map((item) => (
          <Link key={item.id} to={`/media/${item.id}`}>
            <Card
              className={cn(
                "group overflow-hidden transition-shadow hover:shadow-md",
                "cursor-pointer"
              )}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <Badge
                  variant="secondary"
                  className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/70 text-white hover:bg-black/80"
                >
                  <Clock className="size-3" aria-hidden />
                  {item.duration}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 size-8 rounded-full bg-black/40 text-white hover:bg-black/60"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  aria-label="More options"
                >
                  <MoreVertical className="size-4" aria-hidden />
                </Button>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-2 text-base">
                  {item.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {item.lecturer} · {item.course}
                </p>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                {item.progress > 0 ? (
                  <>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{item.progress}% Watched</span>
                    </div>
                    <Progress value={item.progress} className="h-1.5" />
                  </>
                ) : (
                  <p className="text-xs text-muted-foreground">Not started</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Updated {item.updatedAt}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
