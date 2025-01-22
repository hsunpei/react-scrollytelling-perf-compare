import { forwardRef } from 'react';
import { SectionBox } from '../shared/SectionBox';

interface SimpleSectionProps {
  className: string;
}

export const SimpleSection = forwardRef<HTMLDivElement, SimpleSectionProps>(
  ({ className }, ref) => {
    return <SectionBox ref={ref} className={className} />;
  }
);

SimpleSection.displayName = 'SimpleSection';
