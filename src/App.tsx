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
            <div className="relative h-[250vh]">
              <div className="absolute right-5 top-[50vh] max-w-xl p-4 text-left">
                <h1 className="red-hat-display-black text-6xl text-blue-500 md:text-9xl">
                  Join the Pride
                </h1>
                <p className="mt-6 font-sans text-xl font-medium text-slate-500 md:text-2xl">
                  Join us in celebrating love, diversity, and equality at this year&#39;s Pride
                  event
                </p>
                <div className="mt-64">
                  <h2 className="red-hat-display-black pt-96 text-5xl text-slate-500 md:text-8xl">
                    Oct. 24
                  </h2>
                  <p className="red-hat-display-black mt-6 font-sans text-3xl text-blue-500 md:text-5xl">
                    Taipei
                  </p>
                </div>
              </div>
            </div>
          </>
        }
      >
        {/* Put sticky background here */}
        <BackgroundGraphics scrolledRatioSpring={scrolledRatioSpring} />
      </StickyContainerTailwind>

      <div className="flex h-48 items-center justify-center bg-slate-200 text-slate-700">
        Illustrations - &nbsp;
        <a
          href="https://www.humaaans.com/"
          target="_blank"
          className="text-blue-600"
          rel="noreferrer"
        >
          humaaans
        </a>
      </div>
    </div>
  );
}
