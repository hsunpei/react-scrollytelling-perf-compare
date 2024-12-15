import { useRef } from 'react';

import { EmmaChat } from './EmmaChat';
import { LucasChat } from './LucasChat';
import { SvgMask } from './SvgMask';
import { useResizeObserver } from '../hooks/useResizeObserver';

export const PhoneContent = () => {
  const {
    ref: contentRef,
    dimensions: { width, height },
  } = useResizeObserver();
  const {
    ref: chatBoxRef,
    dimensions: { height: chatBoxHeight },
  } = useResizeObserver();
  const scene2Ref = useRef<HTMLDivElement>(null);

  // TODO: y = (height of the container - height of the container of scene2Ref)

  console.log({
    scene2Ref: scene2Ref.current?.getBoundingClientRect(),
    chatBoxRef: chatBoxRef.current?.getBoundingClientRect(),
    v1: chatBoxRef.current?.getBoundingClientRect().height,
    v2:
      scene2Ref.current?.getBoundingClientRect().bottom -
      chatBoxRef.current?.getBoundingClientRect().y,
  });

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
          <div ref={contentRef} className="relative w-full px-4 py-10">
            <div style={{ height: chatBoxHeight }}></div>
            <EmmaChat time="9:30" message="Lorem ipsum dolor sit amet" />
            <LucasChat time="9:32" message="consectetur adipiscing elit" />
            <EmmaChat ref={scene2Ref} time="9:30" message="sed do eiusmod tempor" />
            <LucasChat time="9:32" message="labore et dolore magna aliqua" />
            <LucasChat time="9:32" message="Ut enim ad minim veniam" />
            <EmmaChat time="9:30" message="quis nostrud exercitation" />
            <LucasChat time="9:32" message="ullamco laboris nisi " />
            <div style={{ height: chatBoxHeight }}></div>
            <SvgMask width={width} height={height} />
          </div>
        </div>
      </div>
    </div>
  );
};
