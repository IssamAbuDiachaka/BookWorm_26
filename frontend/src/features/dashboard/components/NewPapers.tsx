import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FileType = "PDF" | "DOCX";

const PAPER_PLACEHOLDERS = [
  {
    id: "1",
    fileType: "PDF" as FileType,
    title: "Quantum Computing: Algorithmic Efficiency in 2024",
    authors: "Li, W., Chen, X.",
    detail: "Published in Journal of Modern Computing",
    stats: "99 124",
  },
  {
    id: "2",
    fileType: "DOCX" as FileType,
    title: "Neural Network Architectures for Medical Imaging",
    authors: "Dr. Emily Watson",
    detail: "Internal Review",
    stats: "99 42",
  },
];

function FileIcon({ type }: { type: FileType }) {
  return (
    <div
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded text-xs font-medium text-white",
        type === "PDF" && "bg-red-600",
        type === "DOCX" && "bg-blue-600"
      )}
    >
      {type}
    </div>
  );
}

export function NewPapers({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">New Research Papers</h3>
        <Link
          to="/research"
          className="text-sm font-medium text-primary hover:underline"
        >
          Browse Repository
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {PAPER_PLACEHOLDERS.map((paper) => (
          <Link key={paper.id} to={`/research/${paper.id}`}>
            <Card
              className={cn(
                "transition-shadow hover:shadow-md",
                "cursor-pointer"
              )}
            >
              <CardContent className="flex items-start gap-4 p-4">
                <FileIcon type={paper.fileType} />
                <div className="min-w-0 flex-1">
                  <CardTitle className="line-clamp-1 text-base">
                    {paper.title}
                  </CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {paper.authors}
                  </p>
                  <p className="text-xs text-muted-foreground">{paper.detail}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-muted-foreground">
                  <span className="text-xs">{paper.stats}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    aria-label="Bookmark"
                  >
                    <Bookmark className="size-4" aria-hidden />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
