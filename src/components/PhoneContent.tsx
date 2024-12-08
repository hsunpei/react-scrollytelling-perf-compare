import { EmmaChat } from './EmmaChat';
import { LucasChat } from './LucasChat';

export const PhoneContent = () => {
  return (
    <div className="h-full w-full bg-gray-200 px-4 py-10">
      <EmmaChat time="9:30" message="You were the Chosen One!" />
      <LucasChat time="9:32" message="From Daisy UI!" />
    </div>
  );
};
