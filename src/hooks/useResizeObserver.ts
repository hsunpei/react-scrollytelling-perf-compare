import { useState, useEffect, useRef } from 'react';

export const useResizeObserver = () => {
  const [dimensions, setDimensions] = useState<DOMRectReadOnly>(new DOMRectReadOnly(0, 0, 0, 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const domRect = entries[0].contentRect;
        setDimensions(domRect);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, dimensions };
};
