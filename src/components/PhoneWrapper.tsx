export const PhoneWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full items-center justify-center lg:w-1/2">
        <div className="relative flex h-[820px] w-[430px] justify-center overflow-hidden rounded-2xl border-8 border-slate-600 drop-shadow-2xl">
          <span className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-slate-600 bg-slate-600"></span>
          <span className="absolute -right-3 top-20 h-10 rounded-md border-4 border-slate-600"></span>
          <span className="absolute -right-3 top-44 h-24 rounded-md border-4 border-slate-600"></span>
          <div className="h-full w-full bg-amber-200">{children}</div>
        </div>
      </div>
    </div>
  );
};
