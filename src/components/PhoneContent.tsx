import { useRef, useCallback, useLayoutEffect, useState } from 'react';

import { useActiveSectionSpring } from '@react-scrollytelling/react-spring';
import { animated, useSpring } from '@react-spring/web';

import { EmmaChat } from './EmmaChat';
import { LucasChat } from './LucasChat';
import { SvgSpotlight } from './SvgSpotlight';
import { useResizeObserver } from '../hooks/useResizeObserver';
import { easeInOutQuad } from '../utils/easing';

export const PhoneContent = () => {
  const { trackingId, scrolledRatioSpring } = useActiveSectionSpring();
  const curSection = parseInt((trackingId || '-0')?.split('-')[1], 10) || 0;

  const {
    ref: contentRef,
    dimensions: { width: contentWidth, height: contentHeight },
  } = useResizeObserver();
  const {
    ref: chatBoxRef,
    dimensions: { height: chatBoxHeight },
  } = useResizeObserver();
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const scene4Ref = useRef<HTMLDivElement>(null);
  const scene5Ref = useRef<HTMLDivElement>(null);

  const [focusArea, setFocusArea] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>({ x: 0, y: 0, width: 0, height: 0 });

  const [scrollYSpring, setScrollYSpring] = useSpring(() => ({ scrollY: 0 }));

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

  const updateScrollY = useCallback(
    (highlightedElement: React.RefObject<HTMLDivElement>) => {
      if (!contentRef.current || !highlightedElement.current || !chatBoxRef.current) {
        return;
      }
      const sy =
        chatBoxRef.current.getBoundingClientRect().height +
        contentRef.current.getBoundingClientRect().top -
        highlightedElement.current.getBoundingClientRect().bottom;
      void setScrollYSpring({ scrollY: sy });
    },
    [chatBoxRef, contentRef, setScrollYSpring]
  );

  useLayoutEffect(() => {
    if (contentWidth && contentHeight && curSection > 0) {
      const refsBySection = [scene1Ref, scene2Ref, scene3Ref, scene4Ref, scene5Ref];

      const highlightedRef = refsBySection[curSection - 1];

      console.log('curSection', curSection, highlightedRef);

      updateScrollY(highlightedRef);
      updateSpotlightArea(highlightedRef);
    }
  }, [scene2Ref, updateSpotlightArea, contentWidth, contentHeight, updateScrollY, curSection]);

  return (
    <div className="relative h-full w-full bg-gray-200">
      <div ref={chatBoxRef} className="relative h-full w-full overflow-hidden">
        <animated.div
          className="w-full"
          style={{
            transform: scrollYSpring.scrollY.to((y) => `translate(0, ${y}px)`),
          }}
        >
          <div ref={contentRef} className="relative w-full px-2 py-10">
            <div style={{ height: chatBoxHeight }}></div>
            <EmmaChat
              ref={scene1Ref}
              time="9:30"
              message="Lorem ipsum dolor sit amet"
              show={curSection >= 1}
            />
            <LucasChat time="9:32" message="consectetur adipiscing elit" show={curSection >= 1} />
            <EmmaChat
              ref={scene2Ref}
              time="9:30"
              message="sed do eiusmod tempor"
              show={curSection >= 2}
            />
            <LucasChat
              ref={scene3Ref}
              time="9:33"
              message="labore et dolore magna aliqua"
              show={curSection >= 3}
            />
            <LucasChat time="9:35" message="Ut enim ad minim veniam" show={curSection >= 3} />
            <EmmaChat
              ref={scene4Ref}
              time="9:38"
              message="quis nostrud exercitation"
              show={curSection >= 4}
            />
            <LucasChat
              ref={scene5Ref}
              time="9:40"
              message="ullamco laboris nisi"
              show={curSection >= 5}
            />
            <div style={{ height: chatBoxHeight }}></div>
            <animated.div
              style={{
                opacity:
                  curSection === 2
                    ? scrolledRatioSpring.to((r) => {
                        return easeInOutQuad(Math.min(r * 3, 1));
                      })
                    : curSection < 2
                      ? 0
                      : 1,
                width: '100%',
                height: '100%',
              }}
            >
              <SvgSpotlight
                outerWidth={contentWidth}
                outerHeight={contentHeight}
                focusArea={focusArea}
                bgColor="#092eff"
              />
            </animated.div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};
