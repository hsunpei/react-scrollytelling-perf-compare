import { animated, Interpolation } from '@react-spring/web';
import { TEXT_COLOR } from '../constants';

interface BackgroundInfoProps {
  trackingId: string | null;
  progress: string | Interpolation<number, string>;
}

export const BackgroundInfo = ({ trackingId, progress }: BackgroundInfoProps) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="min-w-96 list-disc text-xl leading-9 marker:text-slate-400">
        <div>
          You are viewing{' '}
          <span className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800">
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
                width: progress,
              }}
            >
              <animated.b>{progress}</animated.b>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};
