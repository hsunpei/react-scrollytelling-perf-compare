import { animated, SpringValue } from '@react-spring/web';
import { interpolateTransformSvg } from 'd3-interpolate';

const INTERPOLATOR = interpolateTransformSvg('translate(0, 0)', 'translate(-20, -10) scale(0.9)');

export const BgOrange = ({ scrolledRatioSpring }: { scrolledRatioSpring: SpringValue<number> }) => {
  return (
    <animated.g
      transform={scrolledRatioSpring.to((val) => {
        return INTERPOLATOR(val);
      })}
    >
      <circle cx="324" cy="50" r="24" fill="#FFDC8F" />
    </animated.g>
  );
};
