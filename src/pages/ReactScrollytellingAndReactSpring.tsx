import { ScrollytellingProvider } from '@react-scrollytelling/grouped';
import { StickyContainerTailwind } from '@react-scrollytelling/layout';
import { TrackedSection } from '../components/with-react-scrollytelling/TrackedSection';
import { ActiveSectionInfoSpring } from '../components/with-react-scrollytelling/ActiveSectionInfoSpring';

export const ReactScrollytellingAndReactSpring = () => {
  return (
    <ScrollytellingProvider>
      <StickyContainerTailwind
        overlay={
          <>
            <TrackedSection
              sectionID="RED"
              className="rounded-t-lg border-rose-400 bg-rose-200 pt-[50vh] dark:border-rose-700 dark:bg-rose-800"
            />
            <TrackedSection
              sectionID="ORANGE"
              className="-mt-[3px] border-orange-400 bg-orange-200 dark:border-orange-700 dark:bg-orange-800"
            />
            <TrackedSection
              sectionID="YELLOW"
              className="-mt-[3px] border-yellow-400 bg-yellow-200 dark:border-yellow-700 dark:bg-yellow-800"
            />
            <TrackedSection
              sectionID="GREEN"
              className="-mt-[3px] border-green-400 bg-green-200 dark:border-green-700 dark:bg-green-800"
            />
            <TrackedSection
              sectionID="BLUE"
              className="-mt-[3px] border-blue-400 bg-blue-200 dark:border-blue-700 dark:bg-blue-800"
            />
            <TrackedSection
              sectionID="PURPLE"
              className="-mt-[3px] rounded-b-lg border-purple-400 bg-purple-200 pt-[10vh] dark:border-purple-700 dark:bg-purple-800"
            />
          </>
        }
      >
        {/* Background */}
        <ActiveSectionInfoSpring />
      </StickyContainerTailwind>
    </ScrollytellingProvider>
  );
};
