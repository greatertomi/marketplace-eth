import { MarketHeader } from "@components/ui/marketplace";
import { BaseLayout } from "@components/ui/layout";
import { OwnedCourseCard } from "@components/ui/course";
import { Button, Message } from "@components/ui/common";
import { useOwnedCourses } from "@components/hooks/web3";

export default function OwnedCourses() {
  const { ownedCourses } = useOwnedCourses();
  return (
    <div>
      {ownedCourses.data}
      <div className="py-4">
        <MarketHeader />
      </div>
      <section className="grid grid-cols-1">
        <OwnedCourseCard>
          <Message>My custom message!</Message>
          <Button>Watch the course</Button>
        </OwnedCourseCard>
      </section>
    </div>
  );
}

OwnedCourses.Layout = BaseLayout;
