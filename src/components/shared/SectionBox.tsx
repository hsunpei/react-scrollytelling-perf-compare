import React from 'react';

interface SectionBoxProps {
  ref: React.RefObject<HTMLDivElement>;
  className: string;
}

export const SectionBox = React.forwardRef<HTMLDivElement, SectionBoxProps>(
  ({ className }, ref) => (
    <section
      ref={ref}
      className={`border-2 bg-opacity-10 p-10 pb-[50vh] drop-shadow-2xl dark:bg-opacity-10 ${className}`}
    ></section>
  )
);

SectionBox.displayName = 'SectionBox';
