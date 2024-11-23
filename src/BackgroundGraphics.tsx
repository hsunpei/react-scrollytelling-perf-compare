import { BgOrange } from './illustrations/BgOrange';
import { BgPurple } from './illustrations/BgPurple';
import { BgTopRight } from './illustrations/BgTopRight';
import { BgTopYellow } from './illustrations/BgTopYellow';
import { LeftMan } from './illustrations/LeftMan';
import { LeftWoman } from './illustrations/LeftWoman';
import { RightMan } from './illustrations/RightMan';
import { RightWoman } from './illustrations/RightWoman';

export const BackgroundGraphics = () => {
  return (
    <svg
      width="1234"
      height="832"
      className="fill-box h-full w-full object-cover"
      viewBox="0 0 1234 832"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <BgTopRight />
      <BgTopYellow />
      <BgOrange />
      <BgPurple />
      <LeftMan />
      <RightMan />
      <LeftWoman />
      <RightWoman />
    </svg>
  );
};
