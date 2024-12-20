import { useRef, useCallback, useLayoutEffect, useState } from 'react';

import { EmmaChat } from './EmmaChat';
import { LucasChat } from './LucasChat';
import { SvgSpotlight } from './SvgSpotlight';
import { useResizeObserver } from '../hooks/useResizeObserver';

export const PhoneContent = () => {
  const {
    ref: contentRef,
    dimensions: { width: contentWidth, height: contentHeight },
  } = useResizeObserver();
  const {
    ref: chatBoxRef,
    dimensions: { height: chatBoxHeight },
  } = useResizeObserver();
  const scene2Ref = useRef<HTMLDivElement>(null);

  const [focusArea, setFocusArea] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>({ x: 0, y: 0, width: 0, height: 0 });

  const updateSpotlightArea = useCallback(
    (highlightedElement: React.RefObject<HTMLDivElement>) => {
      if (!contentRef.current || !highlightedElement.current) {
        return;
      }

      const highlightedRect = highlightedElement.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();

      const focus = {
        x: highlightedRect.left - contentRect.left || 0,
        y: highlightedRect.top - contentRect.top || 0,
        width: highlightedRect.width || 0,
        height: highlightedRect.height || 0,
      };
      setFocusArea(focus);
    },
    [contentRef]
  );

  useLayoutEffect(() => {
    if (contentWidth && contentHeight) {
      updateSpotlightArea(scene2Ref);
    }
  }, [scene2Ref, updateSpotlightArea, contentWidth, contentHeight]);

  return (
    <div className="relative h-full w-full bg-gray-200">
      <div ref={chatBoxRef} className="relative h-full w-full overflow-hidden">
        <div
          className="w-full"
          style={{
            transform: `translate(0, ${
              chatBoxRef.current?.getBoundingClientRect().height +
              contentRef.current?.getBoundingClientRect().top -
              scene2Ref.current?.getBoundingClientRect().bottom
            }px)`,
          }}
        >
          <div ref={contentRef} className="relative w-full px-2 py-10">
            <div style={{ height: chatBoxHeight }}></div>
            <EmmaChat time="9:30" message="Lorem ipsum dolor sit amet" />
            <LucasChat time="9:32" message="consectetur adipiscing elit" />
            <EmmaChat ref={scene2Ref} time="9:30" message="sed do eiusmod tempor" />
            <LucasChat time="9:32" message="labore et dolore magna aliqua" />
            <LucasChat time="9:32" message="Ut enim ad minim veniam" />
            <EmmaChat time="9:30" message="quis nostrud exercitation" />
            <LucasChat time="9:32" message="ullamco laboris nisi " />
            <div style={{ height: chatBoxHeight }}></div>
            <SvgSpotlight
              outerWidth={contentWidth}
              outerHeight={contentHeight}
              focusArea={focusArea}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
