export const SectionDescription = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="pb-[100vh]">
      <div className="z-10 mx-auto max-w-md space-y-2 overflow-hidden rounded-xl bg-white bg-opacity-80 px-8 py-6 shadow-md backdrop-blur-sm md:max-w-2xl">
        {children}
      </div>
    </div>
  );
};
