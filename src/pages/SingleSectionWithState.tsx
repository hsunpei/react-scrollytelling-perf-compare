import { StickyContainerTailwind } from '@react-scrollytelling/layout';
import { SimpleSection } from '../components/single-section/SimpleSection';
import { BackgroundInfo } from '../components/shared/BackgroundInfo';
import { useRef } from 'react';

import { useSectionScrollState } from '@react-scrollytelling/core';

export const SingleSectionWithState = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrolledRatio } = useSectionScrollState(sectionRef);

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
        progress={`${Math.round(scrolledRatio * 10000) / 100}%`}
      />
    </StickyContainerTailwind>
  );
};
