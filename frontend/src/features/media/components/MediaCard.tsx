import { Clock, Heart, MessageCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface MediaCardAuthor {
  name: string;
  avatar?: string | null;
}

export interface MediaCardProps {
  title: string;
  thumbnailUrl?: string | null;
  duration?: string | null;
  isLive?: boolean;
  author: MediaCardAuthor;
  likes: number;
  comments: number;
  className?: string;
  onClick?: () => void;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function MediaCard({
  title,
  thumbnailUrl,
  duration,
  isLive = false,
  author,
  likes,
  comments,
  className,
  onClick,
}: MediaCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary hover:shadow-md",
        "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="relative h-[160px] w-full overflow-hidden bg-muted sm:h-[180px]">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            <span className="text-sm">No thumbnail</span>
          </div>
        )}
        {(duration != null || isLive) && (
          <Badge
            className={cn(
              "absolute right-2 top-2 border-0 font-mono text-xs",
              isLive
                ? "bg-green-600 text-white hover:bg-green-600"
                : "bg-black/70 text-white hover:bg-black/80"
            )}
            variant="secondary"
          >
            {isLive ? (
              "LIVE"
            ) : (
              <>
                <Clock className="mr-1 size-3" aria-hidden />
                {duration}
              </>
            )}
          </Badge>
        )}
      </div>
      <CardHeader className="space-y-2 p-4 pb-2">
        <CardTitle className="line-clamp-2 text-base leading-tight">
          {title}
        </CardTitle>
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <Avatar className="size-6 shrink-0">
              <AvatarImage src={author.avatar ?? undefined} alt="" />
              <AvatarFallback className="text-[10px]">
                {getInitials(author.name)}
              </AvatarFallback>
            </Avatar>
            <span className="truncate text-xs text-muted-foreground">
              {author.name}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Heart className="size-3.5" aria-hidden />
              {likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="size-3.5" aria-hidden />
              {comments}
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export const MEDIA_CARD_DUMMY_DATA: Omit<MediaCardProps, "className" | "onClick">[] = [
  {
    title: "Linear Algebra: Advanced Eigenvalues",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop",
    duration: "45:12",
    isLive: false,
    author: { name: "Dr. Sarah Jenkins" },
    likes: 24,
    comments: 8,
  },
  {
    title: "Security Protocols & Cryptography",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=225&fit=crop",
    duration: "28:40",
    isLive: false,
    author: { name: "Prof. Marcus Thorne" },
    likes: 12,
    comments: 3,
  },
  {
    title: "Introduction to Machine Learning",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop",
    duration: null,
    isLive: true,
    author: { name: "Dr. Emily Watson" },
    likes: 56,
    comments: 14,
  },
];
