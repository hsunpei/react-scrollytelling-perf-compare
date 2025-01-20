import { useActiveSectionSpring } from '@react-scrollytelling/react-spring';

import { BackgroundInfo } from '../shared/BackgroundInfo';

export const ActiveSectionInfoSpring = () => {
  const { trackingId, scrolledRatioSpring } = useActiveSectionSpring();
  const progress = scrolledRatioSpring.to((val) => {
    return `${Math.round(val * 10000) / 100}%`;
  });

  return <BackgroundInfo trackingId={trackingId} progress={progress} />;
};
