import { animated, SpringValue } from '@react-spring/web';
import { interpolateTransformSvg } from 'd3-interpolate';

const INTERPOLATOR = interpolateTransformSvg('translate(0, 0)', 'translate(-60, -20) scale(1.6)');

export const BgPurple = ({ scrolledRatioSpring }: { scrolledRatioSpring: SpringValue<number> }) => {
  return (
    <animated.g
      transform={scrolledRatioSpring.to((val) => {
        return INTERPOLATOR(val);
      })}
    >
      <circle cx="-8.5" cy="633.5" r="133.5" fill="#5A477A" />
    </animated.g>
  );
};
