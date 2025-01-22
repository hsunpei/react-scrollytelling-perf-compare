import { StickyContainerTailwind } from '@react-scrollytelling/layout';
import { SimpleSection } from '../components/single-section/SimpleSection';
import { BackgroundInfo } from '../components/shared/BackgroundInfo';
import { useRef, useEffect, useState } from 'react';

export const SingleSectionWithState = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrolledRatio, setScrolledRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionRect = sectionRef.current?.getBoundingClientRect();
      if (!sectionRect) {
        return;
      }

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollBottom = scrollTop + windowHeight;
      const sectionTop = sectionRect.top + scrollTop;

      const distance = scrollBottom - sectionTop;
      const ratio = Math.min(1, Math.max(0, distance / sectionRect.height));

      setScrolledRatio(ratio);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <BackgroundInfo trackingId="GREEN" progress={`${Math.round(scrolledRatio * 10000) / 100}%`} />
    </StickyContainerTailwind>
  );
};
