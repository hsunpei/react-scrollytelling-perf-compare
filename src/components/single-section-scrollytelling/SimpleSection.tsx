import { useRef } from 'react';

import { SectionBox } from '../shared/SectionBox';

interface SimpleSectionProps {
  className: string;
}

export const SimpleSection = ({ className }: SimpleSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <SectionBox ref={sectionRef} className={className} />;
};
