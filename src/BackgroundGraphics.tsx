import { useActiveSectionSpring } from '@react-scrollytelling/react-spring';
import { animated } from '@react-spring/web';

import { PhoneContent } from './components/PhoneContent';
import { PhoneWrapper } from './components/PhoneWrapper';
import { easeInOutQuad } from './utils/easing';
import { useMemo } from 'react';

const previewSectionID = 'pre-opening';
const backgroundSectionID = 'opening-0';

export const BackgroundGraphics = () => {
  const { trackingId, scrolledRatioSpring } = useActiveSectionSpring();

  const avatarTransform = useMemo(() => {
    const initialScale = 1;
    const initialY = 0.5;

    switch (trackingId) {
      case backgroundSectionID:
        return scrolledRatioSpring.to((r: number) => {
          const scale = easeInOutQuad(Math.max(initialScale - r / 2, 0));
          const y = Math.round(Math.max(initialY + r / 2, 0) * 10000) / 100;
          return `translate3d(0, ${y}%, 0) scale(${scale})`;
        });
      case previewSectionID:
        return `translate3d(0, ${initialY * 100}%, 0) scale(${initialScale})`;
      default:
        return 'scale(0.5) translate3d(0, 100%, 0)';
    }
  }, [trackingId]);

  const avatarVerticalPadding = useMemo(() => {
    const initialValue = 0.4;

    switch (trackingId) {
      case backgroundSectionID:
        return scrolledRatioSpring.to((r: number) => {
          const mt = Math.round(easeInOutQuad(Math.max(initialValue - r / 2, 0)) * 100);
          return `${mt}%`;
        });
      case previewSectionID:
        return `${initialValue * 100}%`;
      default:
        return '0';
    }
  }, [trackingId]);

  const phoneTransform = useMemo(() => {
    const initialScale = 0.8;
    const initialY = 0.8;

    switch (trackingId) {
      case backgroundSectionID:
        return scrolledRatioSpring.to((r: number) => {
          const scale = easeInOutQuad(Math.min(r + initialScale, 1));
          const y = Math.round(Math.max(initialY - r, 0) * 10000) / 100;
          return `translate3d(0, ${y}%, 0) scale(${scale})`;
        });
      case previewSectionID:
        return `translate3d(0, ${initialY * 100}%, 0) scale(${initialScale})`;
      default:
        return 'none';
    }
  }, [trackingId]);

  return (
    <div className="relative h-full w-full lg:w-1/2">
      <div className="mb-4 flex justify-center space-x-4">
        <animated.div
          className="mr-[10%] mt-[10%] aspect-square w-[32%] rounded-full bg-blue-600 bg-cover bg-right shadow-xl shadow-blue-500/40"
          style={{
            backgroundImage: 'url(/images/avatar_51.png)',
            transform: avatarTransform,
            paddingTop: avatarVerticalPadding,
            paddingBottom: avatarVerticalPadding,
          }}
        ></animated.div>
        <animated.div
          className="mt-[10%] aspect-square w-[32%] rounded-full bg-emerald-300 bg-cover bg-left shadow-xl shadow-emerald-500/40"
          style={{
            backgroundImage: 'url(/images/avatar_54.png)',
            transform: avatarTransform,
            paddingTop: avatarVerticalPadding,
            paddingBottom: avatarVerticalPadding,
          }}
        ></animated.div>
      </div>
      <animated.div
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center py-20"
        style={{
          transform: phoneTransform,
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
