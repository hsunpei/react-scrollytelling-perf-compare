import { useActiveSectionSpring } from '@react-scrollytelling/react-spring';
import { animated } from '@react-spring/web';

const TEXT_COLOR = {
  RED: 'text-rose-500',
  ORANGE: 'text-orange-500',
  YELLOW: 'text-yellow-500',
  GREEN: 'text-green-500',
  BLUE: 'text-blue-500',
  PURPLE: 'text-purple-500',
};

export const ActiveSectionInfoSpring = () => {
  const { trackingId, scrolledRatioSpring } = useActiveSectionSpring();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="min-w-96 list-disc text-xl leading-9 marker:text-slate-400">
        <div>
          You are viewing{' '}
          <span className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800">
            {/* TODO: allow typing trackingId */}
            <b className={TEXT_COLOR[(trackingId as keyof typeof TEXT_COLOR) || 'YELLOW']}>
              {trackingId}
            </b>
          </span>{' '}
          section
          <br />
        </div>
        <div>
          <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <animated.div
              className="mt-2 min-w-20 rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
              style={{
                width: scrolledRatioSpring.to((val) => {
                  return `${Math.round(val * 10000) / 100}%`;
                }),
              }}
            >
              <animated.b>
                {scrolledRatioSpring.to((val) => {
                  return `${Math.round(val * 10000) / 10000}`;
                })}
              </animated.b>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};
