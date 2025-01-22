import { StickyContainerTailwind } from '@react-scrollytelling/layout';
import { SimpleSection } from '../components/single-section-scrollytelling/SimpleSection';
import { BackgroundInfo } from '../components/shared/BackgroundInfo';

export const SingleSectionScrollytelling = () => {
  return (
    <StickyContainerTailwind
      overlay={
        <>
          <div className="h-[90vh]"></div>
          <SimpleSection className="-mt-[3px] h-screen border-green-400 bg-green-200 dark:border-green-700 dark:bg-green-800" />
        </>
      }
    >
      {/* Background */}

      <BackgroundInfo trackingId={'GREEN'} progress="50%" />
    </StickyContainerTailwind>
  );
};
