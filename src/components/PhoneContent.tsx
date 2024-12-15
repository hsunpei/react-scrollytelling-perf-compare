import { useRef } from 'react';

import { EmmaChat } from './EmmaChat';
import { LucasChat } from './LucasChat';
import { SvgMask } from './SvgMask';
import { useResizeObserver } from '../hooks/useResizeObserver';

export const PhoneContent = () => {
  const {
    ref: outerRef,
    dimensions: { width, height },
  } = useResizeObserver();
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);

  // TODO: y = (height of the container - height of the container of scene2Ref)

  return (
    <div ref={outerRef} className="relative h-full w-full bg-gray-200 px-4 py-10">
      <div ref={chatBoxRef} className="relative h-full w-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            top: `${chatBoxRef.current?.offsetHeight - (scene2Ref.current?.getBoundingClientRect().y - chatBoxRef.current?.getBoundingClientRect().y) - scene2Ref.current?.getBoundingClientRect().height}px`,
          }}
        >
          <div ref={contentRef}>
            <EmmaChat time="9:30" message="Lorem ipsum dolor sit amet" />
            <LucasChat time="9:32" message="consectetur adipiscing elit" />
            <EmmaChat ref={scene2Ref} time="9:30" message="sed do eiusmod tempor incididunt" />
            <LucasChat time="9:32" message="labore et dolore magna aliqua" />
            <LucasChat time="9:32" message="Ut enim ad minim veniam" />
            <EmmaChat time="9:30" message="quis nostrud exercitation" />
            <LucasChat time="9:32" message="ullamco laboris nisi " />
            <div className="h-full"></div>
          </div>
        </div>
      </div>
      <SvgMask width={width} height={height} />
    </div>
  );
};
