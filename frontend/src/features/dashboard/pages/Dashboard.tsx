import { WelcomeSection } from "../components/WelcomeSection";
import { RecentMedia } from "../components/RecentMedia";
import { NewPapers } from "../components/NewPapers";
import { UpcomingEvent } from "../components/UpcomingEvent";

export function Dashboard() {
  return (
    <div className="space-y-8">
      <WelcomeSection />
      <RecentMedia />
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <NewPapers />
        <div className="lg:pt-0">
          <UpcomingEvent className="lg:sticky lg:top-24" />
        </div>
      </div>
    </div>
  );
}
