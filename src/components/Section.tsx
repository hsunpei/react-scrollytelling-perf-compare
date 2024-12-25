import { useRef } from 'react';

import { useTrackedSectionScroll } from '@react-scrollytelling/grouped';

interface SectionProps {
  sectionID: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ sectionID, className, children }: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useTrackedSectionScroll(sectionRef, sectionID);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export const SectionWithDescription = ({ sectionID, children }: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useTrackedSectionScroll(sectionRef, sectionID);

  return (
    <div ref={sectionRef} className="pb-[100vh]">
      <div className="z-10 mx-auto max-w-md space-y-2 overflow-hidden rounded-xl bg-white bg-opacity-80 px-8 py-6 shadow-md backdrop-blur-sm md:max-w-2xl">
        {children}
      </div>
    </div>
  );
};
