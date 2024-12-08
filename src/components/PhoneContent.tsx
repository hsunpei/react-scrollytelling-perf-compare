import { EmmaChat } from './EmmaChat';
import { LucasChat } from './LucasChat';

export const PhoneContent = () => {
  return (
    <div className="h-full w-full bg-gray-200 px-4 py-10">
      <div className="h-full w-full overflow-hidden">
        <div className="h-1/2"></div>
        <EmmaChat time="9:30" message="Lorem ipsum dolor sit amet" />
        <LucasChat time="9:32" message="consectetur adipiscing elit" />
        <EmmaChat time="9:30" message="sed do eiusmod tempor incididunt" />
        <LucasChat time="9:32" message="labore et dolore magna aliqua" />
        <LucasChat time="9:32" message="Ut enim ad minim veniam" />
        <EmmaChat time="9:30" message="quis nostrud exercitation" />
        <LucasChat time="9:32" message="ullamco laboris nisi " />
      </div>
    </div>
  );
};
