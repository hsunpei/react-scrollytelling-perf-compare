import { StickyContainerTailwind } from '@react-scrollytelling/layout';
import { SimpleSection } from '../components/single-section-scrollytelling/SimpleSection';
import { BackgroundInfo } from '../components/shared/BackgroundInfo';
import { useRef } from 'react';

import { useSectionScrollSpring } from '@react-scrollytelling/react-spring';

export const SingleSectionScrollytelling = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrolledRatioSpring } = useSectionScrollSpring(sectionRef);

  return (
    <StickyContainerTailwind
      overlay={
        <>
          <div className="h-[90vh]"></div>
          <SimpleSection
            ref={sectionRef}
            className="-mt-[3px] h-screen border-green-400 bg-green-200 dark:border-green-700 dark:bg-green-800"
          />
        </>
      }
    >
      {/* Background */}
      <BackgroundInfo
        trackingId={'GREEN'}
        progress={scrolledRatioSpring.to((val) => {
          return `${Math.round(val * 10000) / 100}%`;
        })}
      />
    </StickyContainerTailwind>
  );
};
