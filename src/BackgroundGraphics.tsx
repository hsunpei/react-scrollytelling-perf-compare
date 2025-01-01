import { useActiveSectionSpring } from '@react-scrollytelling/react-spring';
import { animated } from '@react-spring/web';

import { PhoneContent } from './components/PhoneContent';
import { PhoneWrapper } from './components/PhoneWrapper';
import { easeInOutQuad } from './utils/easing';

const backgroundSectionID = 'opening-0';

export const BackgroundGraphics = () => {
  const { trackingId, scrolledRatioSpring } = useActiveSectionSpring();

  return (
    <div className="h-full w-full py-20 lg:w-1/2">
      <animated.div
        className="flex h-full w-full items-center justify-center"
        style={{
          transform:
            trackingId === backgroundSectionID
              ? scrolledRatioSpring.to((r) => {
                  const scale = easeInOutQuad(Math.min(r + 0.8, 1));
                  const y = Math.round(Math.max(0.8 - r, 0) * 10000) / 100;
                  return `translate3d(0, ${y}%, 0) scale(${scale})`;
                })
              : undefined,
          opacity:
            trackingId === backgroundSectionID
              ? scrolledRatioSpring.to((r) => easeInOutQuad(Math.min(r + 0.5, 1)))
              : 1,
        }}
      >
        <PhoneWrapper>
          {/*  Mobile phone content   */}
          <PhoneContent />
        </PhoneWrapper>
      </animated.div>
    </div>
  );
};
