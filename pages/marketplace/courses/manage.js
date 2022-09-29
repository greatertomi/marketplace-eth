import { MarketHeader } from "@components/ui/marketplace";
import { BaseLayout } from "@components/ui/layout";
import { OwnedCourseCard } from "@components/ui/course";

export default function ManageCourses() {
  return (
    <div>
      <div className="py-4">
        <MarketHeader />
      </div>
      <section className="grid grid-cols-1">
        <OwnedCourseCard />
      </section>
    </div>
  );
}

ManageCourses.Layout = BaseLayout;