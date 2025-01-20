import React from 'react';

interface SectionBoxProps {
  ref: React.RefObject<HTMLDivElement>;
  className: string;
  sectionID: string;
}

export const SectionBox = React.forwardRef<HTMLDivElement, SectionBoxProps>(
  ({ className, sectionID }, ref) => (
    <section
      ref={ref}
      className={`border-2 bg-opacity-10 p-10 pb-[50vh] drop-shadow-2xl dark:bg-opacity-10 ${className}`}
    >
      <div className="absolute left-2 top-3.5">
        <span className="rounded-lg bg-white bg-opacity-60 p-2 text-slate-500 dark:bg-gray-950">
          {sectionID}
        </span>
      </div>
    </section>
  )
);

SectionBox.displayName = 'SectionBox';
