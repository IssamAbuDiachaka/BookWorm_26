import { WelcomeSection } from "../components/WelcomeSection";
import { RecentMedia } from "../components/RecentMedia";
import { NewPapers } from "../components/NewPapers";

export function Dashboard() {
  return (
    <div className="space-y-8">
      <WelcomeSection />
      <RecentMedia />
      <NewPapers />
    </div>
  );
}
