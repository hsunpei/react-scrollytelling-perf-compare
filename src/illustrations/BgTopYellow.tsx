import { animated, SpringValue } from '@react-spring/web';
import { interpolateTransformSvg } from 'd3-interpolate';

const INTERPOLATOR = interpolateTransformSvg('translate(0, 0)', 'translate(-30, -20) scale(0.9)');

export const BgTopYellow = ({
  scrolledRatioSpring,
}: {
  scrolledRatioSpring: SpringValue<number>;
}) => {
  return (
    <animated.g
      transform={scrolledRatioSpring.to((val) => {
        return INTERPOLATOR(val);
      })}
    >
      <circle id="circle_yellow" cx="110.5" cy="20.5" r="110.5" fill="#F4EE75" />
    </animated.g>
  );
};
