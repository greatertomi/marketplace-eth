import { CourseCard, CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";
import { useWalletInfo } from "@components/hooks/web3";
import { Button } from "@components/ui/common";
import { OrderModal } from "@components/ui/order";
import { useState } from "react";
import { MarketHeader } from "@components/ui/marketplace";

export default function Marketplace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { canPurchaseCourse } = useWalletInfo();

  return (
    <>
      <div className="pt-4">
        <MarketHeader />
      </div>

      <CourseList courses={courses}>
        {(course) => (
          <CourseCard
            course={course}
            key={course.id}
            disabled={!canPurchaseCourse}
            Footer={() => (
              <div className="mt-4">
                <Button
                  disabled={!canPurchaseCourse}
                  variant="lightPurple"
                  onClick={() => setSelectedCourse(course)}
                >
                  Purchase
                </Button>
              </div>
            )}
          />
        )}
      </CourseList>
      {selectedCourse && (
        <OrderModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Marketplace.Layout = BaseLayout;
