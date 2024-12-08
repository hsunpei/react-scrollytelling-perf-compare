import { useResizeObserver } from '../hooks/useResizeObserver';

export const PhoneWrapper = ({ children }: { children: React.ReactNode }) => {
  const {
    ref,
    dimensions: { height },
  } = useResizeObserver();

  return (
    <div className="h-full w-full py-20 lg:w-1/2">
      <div className="flex h-full w-full items-center justify-center" ref={ref}>
        <div
          className="relative flex max-w-xl justify-center overflow-hidden rounded-2xl border-8 border-slate-600 drop-shadow-2xl"
          style={{ height: `${height}px`, width: `${height * 0.49}px` }}
        >
          <span className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-slate-600 bg-slate-600"></span>
          <span className="absolute -right-3 top-20 h-10 rounded-md border-4 border-slate-600"></span>
          <span className="absolute -right-3 top-44 h-24 rounded-md border-4 border-slate-600"></span>
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};
