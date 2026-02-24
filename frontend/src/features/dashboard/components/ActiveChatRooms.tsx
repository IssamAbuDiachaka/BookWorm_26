import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const ROOMS = [
  {
    id: "1",
    name: "Quantum Physics Seminar",
    members: 12,
    description: "Discussion on entanglement and superposition",
    isLive: true,
  },
  {
    id: "2",
    name: "Linear Algebra Q&A",
    members: 8,
    description: "Eigenvalues and diagonalization",
    isLive: true,
  },
  {
    id: "3",
    name: "CS501 Office Hours",
    members: 5,
    description: "Last active 2h ago",
    isLive: false,
  },
];

export function ActiveChatRooms({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold">
          Active Chat Rooms
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col p-0 pt-0">
        {ROOMS.map((room, index) => (
          <div key={room.id}>
            {index > 0 && <Separator />}
            <button
              type="button"
              onClick={() => {
                // Placeholder: navigate to room
              }}
              className={cn(
                "flex w-full flex-col gap-1.5 p-4 text-left transition-colors",
                "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-medium">{room.name}</span>
                {room.isLive && (
                  <Badge
                    className="shrink-0 border-0 bg-green-600 text-white hover:bg-green-600"
                    variant="secondary"
                  >
                    LIVE NOW
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {room.members} member{room.members !== 1 ? "s" : ""}
              </p>
              <p className="text-xs text-muted-foreground/80">
                {room.description}
              </p>
            </button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
