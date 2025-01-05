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
                        <h1 className="red-hat-display-black mb-4 text-left text-5xl font-extrabold text-blue-800 md:text-7xl">
                          <mark className="rounded bg-white px-2 leading-tight text-blue-800">
                            Exposed:
                            <br /> The Secret Chats
                          </mark>
                        </h1>
                        <p className="my-6 font-sans text-lg font-medium text-slate-200 md:text-xl">
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
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                      augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                      fermentum gravida.
                    </p>
                  </SectionWithDescription>
                  <SectionWithDescription sectionID={SECTION_IDS.SEC_2}>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                      augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                      fermentum gravida.
                    </p>
                  </SectionWithDescription>
                  <SectionWithDescription sectionID={SECTION_IDS.SEC_3}>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                      augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                      fermentum gravida.
                    </p>
                  </SectionWithDescription>
                  <SectionWithDescription sectionID={SECTION_IDS.SEC_4}>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                      augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                      fermentum gravida.
                    </p>
                  </SectionWithDescription>
                  <SectionWithDescription sectionID={SECTION_IDS.SEC_5}>
                    <p className="text-lg">
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
          <div className="h-screen w-full bg-gradient-to-b from-slate-800 to-indigo-700">
            <BackgroundGraphics />
          </div>
        </StickyContainerTailwind>
      </ScrollytellingProvider>

      <div className="h-28 w-full bg-gradient-to-b from-indigo-700 to-slate-900"></div>
      <div className="w-full bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-xl space-y-5 px-6 py-36">
          <p className="text-left">
            In iaculis porttitor justo, vitae dapibus magna vulputate fringilla. Etiam vel metus
            eget libero ullamcorper semper nec vitae erat. Vestibulum consequat neque libero, sit
            amet maximus elit auctor a. Proin a quam tellus. Morbi venenatis mauris tincidunt varius
            iaculis. Phasellus vitae consectetur lectus, sed consectetur lectus. Sed lacinia ante et
            pellentesque mollis. Quisque sit amet luctus nulla. Donec ac posuere est, id placerat
            libero. Donec laoreet blandit justo, in dignissim nunc pretium id. Vivamus lacinia vel
            velit ut rhoncus. Phasellus tempor lorem ut urna malesuada, sit amet ultricies tellus
            mattis. Aliquam ultrices, nisl ut iaculis accumsan, leo justo molestie metus, sed
            maximus dolor mi sit amet tortor. Nulla massa ligula, dictum a ante non, fringilla
            cursus quam.
          </p>
          <p className="text-left">
            Sed magna urna, sollicitudin id lacus eget, dapibus feugiat massa. Maecenas dapibus
            imperdiet leo, sed placerat dolor iaculis sit amet. Suspendisse potenti. Duis elementum,
            elit sit amet imperdiet porttitor, leo nunc rutrum libero, ut viverra mauris nisi eget
            orci. Aenean id dui aliquam, varius arcu eget, venenatis ligula. Ut a tortor vulputate
            velit rhoncus varius. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Proin eu dui nunc. Nunc dignissim nunc at nisi sagittis dapibus.
            Nulla sem diam, cursus vitae sollicitudin ut, volutpat a orci. Pellentesque quis
            suscipit massa, vel vehicula velit. Suspendisse finibus ut ante interdum pulvinar. Duis
            quis bibendum purus, sed tempor lorem. Quisque sit amet purus auctor, cursus risus eget,
            condimentum nisl.
          </p>
        </div>
      </div>

      <div className="flex h-48 items-center justify-center bg-slate-200 text-slate-700">
        Illustrations - &nbsp;
        <a
          href="https://wannathis.one/products/online-3d-avatar-constructor#online-constructor"
          target="_blank"
          className="text-blue-600"
          rel="noreferrer"
        >
          Wannathis 3D Avatar Constructor
        </a>
      </div>
    </div>
  );
}
