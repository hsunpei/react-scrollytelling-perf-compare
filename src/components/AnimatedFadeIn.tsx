import { useRef } from 'react';

import { animated, useSpring } from '@react-spring/web';

export interface AnimatedFadeInProps {
  children: React.ReactNode;
  className?: string;

  /** For slide in effect */
  initialXPosition?: number;
  initialYPosition?: number;

  endingXPosition?: number;
  endingYPosition?: number;

  start: boolean;
  delay?: number;
}

export const AnimatedFadeIn = ({
  children,
  delay = 0,
  initialXPosition = 0,
  initialYPosition = 0,
  endingXPosition = 0,
  endingYPosition = 0,
  start = false,
  className,
}: AnimatedFadeInProps) => {
  const containerRef = useRef(null);

  const fromConfig = { opacity: 0, x: initialXPosition, y: initialYPosition };
  const toConfig = { opacity: 1, x: endingXPosition, y: endingYPosition };

  const fadeIn = useSpring({
    from: fromConfig,
    to: start ? toConfig : fromConfig,
    delay,
  });

  return (
    // Wrap the animated div with this div to have accurate scroll detection (with initialYPosition)
    <div ref={containerRef} className={className}>
      <animated.div style={{ ...fadeIn, width: '100%', height: '100%' }}>{children}</animated.div>
    </div>
  );
};
