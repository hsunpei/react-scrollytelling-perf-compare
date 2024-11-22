import { BgTopRight } from './illustrations/BgTopRight';
import { LeftMan } from './illustrations/LeftMan';
import { RightMan } from './illustrations/RightMan';

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
      <LeftMan />
      <RightMan />
    </svg>
  );
};
