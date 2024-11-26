import { SpringValue } from '@react-spring/web';

import { BgOrange } from './illustrations/BgOrange';
import { BgPurple } from './illustrations/BgPurple';
import { BgTopRight } from './illustrations/BgTopRight';
import { BgTopYellow } from './illustrations/BgTopYellow';
import { LeftMan } from './illustrations/LeftMan';
import { LeftWoman } from './illustrations/LeftWoman';
import { RightMan } from './illustrations/RightMan';
import { RightWoman } from './illustrations/RightWoman';

interface BackgroundGraphicsProps {
  scrolledRatioSpring: SpringValue<number>;
}

export const BackgroundGraphics = ({ scrolledRatioSpring }: BackgroundGraphicsProps) => {
  return (
    <div className="h-full w-full drop-shadow-2xl">
      <svg
        width="1234"
        height="832"
        className="fill-box w-full object-cover md:h-full"
        viewBox="0 0 1234 832"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <BgTopRight scrolledRatioSpring={scrolledRatioSpring} />
        <BgTopYellow scrolledRatioSpring={scrolledRatioSpring} />
        <BgOrange scrolledRatioSpring={scrolledRatioSpring} />
        <BgPurple scrolledRatioSpring={scrolledRatioSpring} />
        <LeftMan scrolledRatioSpring={scrolledRatioSpring} />
        <RightMan scrolledRatioSpring={scrolledRatioSpring} />
        <LeftWoman scrolledRatioSpring={scrolledRatioSpring} />
        <RightWoman scrolledRatioSpring={scrolledRatioSpring} />
      </svg>
    </div>
  );
};
