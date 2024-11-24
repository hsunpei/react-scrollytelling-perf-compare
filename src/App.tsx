import './styles.css';

import { useRef } from 'react';

import { StickyContainerTailwind } from '@react-scrollytelling/layout';
import { useSectionScrollSpring } from '@react-scrollytelling/react-spring';

import { BackgroundGraphics } from './BackgroundGraphics';

export default function App() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrolledRatioSpring } = useSectionScrollSpring(sectionRef);

  return (
    <div className="App" ref={sectionRef}>
      <StickyContainerTailwind
        overlay={
          <>
            <div className="relative h-screen">
              <div className="absolute bottom-16 right-5 max-w-xl p-3 text-left">
                <h1 className="red-hat-display-black text-6xl text-blue-700 md:text-9xl">
                  Join the Pride
                </h1>
                <p className="mt-6 font-sans text-xl font-medium text-slate-500 md:text-2xl">
                  Join us in celebrating love, diversity, and equality at this year&#39;s Pride
                  event
                </p>
              </div>
            </div>
            <div className="relative h-screen">2nd section</div>
          </>
        }
      >
        {/* Put sticky background here */}
        <BackgroundGraphics scrolledRatioSpring={scrolledRatioSpring} />
      </StickyContainerTailwind>
      <div className="h-screen">
        <h1>React + TypeScript + TailwindCSS</h1>
      </div>
    </div>
  );
}
