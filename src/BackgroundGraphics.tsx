import { SpringValue } from '@react-spring/web';

import { PhoneContent } from './components/PhoneContent';
import { PhoneWrapper } from './components/PhoneWrapper';

interface BackgroundGraphicsProps {
  scrolledRatioSpring: SpringValue<number>;
}

export const BackgroundGraphics = ({ scrolledRatioSpring }: BackgroundGraphicsProps) => {
  return (
    <PhoneWrapper>
      {/*  Mobile phone content   */}
      <PhoneContent />
    </PhoneWrapper>
  );
};
