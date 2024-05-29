import { DatasType, HebrewDisplayName, SelectedPage } from '@/shared/types';
import { motion, useScroll } from 'framer-motion';
import HText from '@/shared/HText';
import { datas, trainingPlans, trainingPlansTitle } from '@/shared/ourClasses/data';
import Class from '@/components/Class';
import { Element } from 'react-scroll';
import { useRef, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll/modules';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  setSelectedPage: (value: string) => void;
};

// const Ourclasses = ({ setSelectedPage }: Props) => {
//   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
//   const [expandedPlan, setExpandedPlan] = useState<string | null>();

//   const handleExpand = (title: string) => {
//     setExpandedPlan(title);
//   };

//   return (
//     <Element name="ourclasses">
//       <section id='' className="snap-start h-auto py-40">
//         <motion.div
//           onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
//         >
//           {/* <h2 className="mx-8 text-3xl font-bold mb-6">הסטודיו שלנו</h2>
//           <div className="mt-10 px-4 overflow-x-auto overflow-y-hidden">
//             <ul className="whitespace-nowrap">
//               {
//                 datas.map((item: DatasType, index: number) => (
//                   <Class key={`${item.name}-${index}`} item={item} />
//                 ))
//               }
//             </ul>
//           </div> */}
//           <motion.div className="mx-auto w-5/6" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>

//             <h1 className="text-3xl text-center font-bold mb-6">{trainingPlansTitle}</h1>
//             <div className="md:flex justify-between">
//               {trainingPlans.map(({ title, text }) =>
//                 <div onClick={() => handleExpand(title)} key={title} className="m-3 text-center rounded-3xl p-5 bg-primary">
//                   <h2 className="text-2xl font-semibold mb-2">{title}</h2>
//                   {(isAboveMediumScreens || expandedPlan === title) && (
//                     <>
//                       <p className="text-base text-secondary-text mb-4">{text}</p>
//                       <LinkScroll
//                         smooth duration={1000} to={SelectedPage.ContactUs}
//                         className='text-sm font-bold text-primary-text underline hover:text-accent cursor-pointer'
//                         onClick={() => setSelectedPage(SelectedPage.ContactUs)}
//                       >
//                         <p>הצטרפו עכשיו</p>
//                       </LinkScroll>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>
//     </Element>
//   );
// }

// export default Ourclasses;
import React from 'react';
import { useParallax } from '@/hooks/hooks';

const TrainingPrograms: React.FC<Props> = ({ setSelectedPage }) => {
  const [expandedPlan, setExpandedPlan] = useState<number>(0);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      id="ourclasses"
      className="bg-primary relative flex h-svh snap-center items-center justify-center"
    >
      <div ref={ref} className=" mx-auto w-5/6 py-24">
        {/* <motion.h2 className='absolute' style={{ y }}>{`#${HebrewDisplayName.ourclasses}`}</motion.h2> */}
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          <div className="mb-10 text-center">
            <h1 className="text-highlight text-[1.5rem] font-bold">
              מסלולי אימונים מותאמים אישית
            </h1>
            <p className="text-secondary-text mt-5 text-[1rem]">
              מצאו את מסלול האימון המתאים ביותר למטרות שלכם ולוח הזמנים שלכם.
            </p>
          </div>

          <div
            className={` ${
              isAboveMediumScreens
                ? 'flex flex-row justify-center'
                : 'grid grid-cols-1'
            } max-w-full gap-4`}
          >
            {trainingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-secondary rounded-lg p-3 ${
                  isAboveMediumScreens ? 'w-1/4 flex-shrink-0' : 'w-full'
                }`}
                initial={false}
                animate={{ height: 'auto', opacity: 1 }}
                // animate={{ height: expandedPlan === index ? 'auto' : 'fit-content' }}
                transition={{
                  height: {
                    duration: 0.5,
                    ease: 'easeInOut',
                  },
                }}
                exit={{ height: 0 }}
              >
                <h2
                  className="text-highlight cursor-pointer text-xl font-bold"
                  onClick={() => setExpandedPlan(index)}
                >
                  {plan.title}
                </h2>
                {(expandedPlan === index || isAboveMediumScreens) && (
                  <motion.div
                    className="text-secondary-text"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mt-3">{plan.description}</p>
                    <ul className="mt-3 list-inside list-disc ease-in-out">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <LinkScroll
                      smooth
                      duration={1000}
                      to={SelectedPage.ContactUs}
                      className="bg-accent mt-5 inline-block cursor-pointer rounded-lg px-6 py-3 text-white"
                      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    >
                      <p>הצטרפו עכשיו</p>
                    </LinkScroll>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <LinkScroll
              smooth
              duration={1000}
              to={SelectedPage.ContactUs}
              className="bg-accent inline-block cursor-pointer rounded-lg px-6 py-3 text-white"
              // className='text-sm font-bold text-primary-text underline hover:text-accent cursor-pointer'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            >
              <p>מצאו את המסלול המתאים לכם והתחילו כבר היום!</p>
            </LinkScroll>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
