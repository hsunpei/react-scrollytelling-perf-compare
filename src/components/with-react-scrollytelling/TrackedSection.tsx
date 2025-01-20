import { useRef } from 'react';

import { useTrackedSectionScroll } from '@react-scrollytelling/grouped';
import { SectionBox } from '../shared/SectionBox';

interface TrackedSectionProps {
  className: string;
  sectionID: string;
}

export const TrackedSection = ({ className, sectionID }: TrackedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useTrackedSectionScroll(sectionRef, sectionID);

  return <SectionBox ref={sectionRef} className={className} sectionID={sectionID} />;
};
