import './styles.css';

import { ScrollytellingProvider } from '@react-scrollytelling/grouped';
import { StickyContainerTailwind } from '@react-scrollytelling/layout';

import { BackgroundGraphics } from './BackgroundGraphics';
import { Section, SectionWithDescription } from './components/Section';

const SECTION_IDS = {
  PRE_OPENING: 'pre-opening',
  OPENING: 'opening-0',
  SEC_1: 'sec-1',
  SEC_2: 'sec-2',
  SEC_3: 'sec-3',
  SEC_4: 'sec-4',
  SEC_5: 'sec-5',
};

export default function App() {
  return (
    <div className="App">
      <ScrollytellingProvider>
        <StickyContainerTailwind
          overlay={
            <div className="ml-auto mr-auto max-w-screen-2xl">
              <div className="flex px-3">
                <div className="lg:w-1/2">{/*  Leave the left empty */}</div>
                <div className="w-full lg:w-1/2">
                  <Section sectionID={SECTION_IDS.PRE_OPENING}>
                    <div className="relative h-screen w-full">
                      <div className="absolute bottom-10 w-full">
                        <h1 className="red-hat-display-black text-5xl text-blue-500 md:text-7xl">
                          Exposed: The Secret Chats
                        </h1>
                        <p className="mt-6 font-sans text-lg font-medium text-slate-500 md:text-xl">
                          A gripping look at the encrypted conversations that unraveled one of the
                          most shocking financial scandals in modern history
                        </p>
                      </div>
                    </div>
                  </Section>
                  <Section sectionID={SECTION_IDS.OPENING} className="pb-[100vh]">
                    {/* Blank section to run with the opening background effect */}
                  </Section>
                  <SectionWithDescription sectionID={SECTION_IDS.SEC_1}>
                    <p className="mt-6 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                      augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                      fermentum gravida.
                    </p>
                  </SectionWithDescription>
                  <SectionWithDescription sectionID={SECTION_IDS.SEC_2}>
                    <p className="mt-6 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                      augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                      fermentum gravida.
                    </p>
                  </SectionWithDescription>
                  <SectionWithDescription sectionID={SECTION_IDS.SEC_3}>
                    <p className="mt-6 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                      augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                      fermentum gravida.
                    </p>
                  </SectionWithDescription>
                  <SectionWithDescription sectionID={SECTION_IDS.SEC_4}>
                    <p className="mt-6 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                      augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                      fermentum gravida.
                    </p>
                  </SectionWithDescription>
                  <SectionWithDescription sectionID={SECTION_IDS.SEC_5}>
                    <p className="mt-6 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                      augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                      fermentum gravida.
                    </p>
                  </SectionWithDescription>
                </div>
              </div>
            </div>
          }
        >
          {/* Put sticky background here */}
          <BackgroundGraphics />
        </StickyContainerTailwind>
      </ScrollytellingProvider>

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
