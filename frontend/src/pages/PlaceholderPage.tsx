import { useLocation } from "react-router-dom";

function toTitle(pathname: string): string {
  const segment = pathname.split("/").filter(Boolean)[0] ?? "Page";
  return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
}

export function PlaceholderPage() {
  const { pathname } = useLocation();
  const title = toTitle(pathname);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-1">This section is coming soon.</p>
      </div>
      <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed bg-muted/30">
        <span className="text-sm text-muted-foreground">Placeholder content</span>
      </div>
    </div>
  );
}
