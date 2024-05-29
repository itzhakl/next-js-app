import { HebrewDisplayName, SelectedPage } from '@/shared/types';
import { motion, useScroll } from 'framer-motion';
import HText from '@/shared/HText';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/images/ContactUsPageGraphic.png';
import { Element } from 'react-scroll';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useRef } from 'react';
import { useParallax } from '@/hooks/hooks';

type Props = {
  setSelectedPage: (value: string) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const inputStyle = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const handleOnSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contactus"
      className="relative flex h-svh snap-center items-center justify-center"
    >
      <div ref={ref} className="mx-auto w-5/6 pb-32 pt-24">
        {/* <motion.h2 className='absolute' style={{ y }}>{`#${HebrewDisplayName.contactus}`}</motion.h2> */}
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          {/* Header */}
          <motion.div
            className="pt-10 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              <span className="text-secondary-text">הצטרף עכשיו</span> כדי
              להיכנס לכושר
            </HText>
            {isAboveMediumScreens && (
              <p className="text-secondary-text my-5">
                אתה בטוח רוצה להתחיל את המסע לכושר הטוב ביותר! כדי להתחיל, פשוט
                השאר את הפרטים שלך כאן. אנו ניצור איתך קשר בהקדם על מנת לספק לך
                את המידע והתמיכה שאתה צריך כדי להתחיל להרגיש טוב ולהתקדם בדרך
                שלך לכושר מיטבי. נשמח לסייע לך להגשים את היעדים שלך!
              </p>
            )}
          </motion.div>

          {/* Form and Image */}
          <div className="mt-10 justify-between gap-16 rounded-3xl pb-4 md:flex">
            <motion.div
              className="bg-dark-blue mt-10 basis-3/5 rounded-3xl p-4 drop-shadow-2xl md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                className="flex flex-col gap-2"
                // target="_blank"
                onSubmit={handleOnSubmit}
                method="POST"
                action="https://formsubmit.co/ae263998254e908b749115bf2f84b5aa"
              >
                <input
                  type="text"
                  className={inputStyle}
                  placeholder="שם"
                  {...register('name', { required: true, maxLength: 100 })}
                />{' '}
                {errors.name && (
                  <p className="mt-1">
                    {errors.name.type === 'required' &&
                      'This field is required.'}
                    {errors.name.type === 'maxLength' &&
                      'Character limit is 100'}
                  </p>
                )}
                <input
                  dir="rtl"
                  type="tel"
                  className={inputStyle}
                  placeholder="מספר טלפון"
                  {...register('phone', {
                    required: true,
                    pattern: /^0(?:[57]\d|2\d)-?\d{7}$/i,
                  })}
                />{' '}
                {errors.phone && (
                  <p className="mt-1">
                    {errors.phone.type === 'required' &&
                      'This field is required.'}
                    {errors.phone.type === 'pattern' && 'Invalid Phone number'}
                  </p>
                )}
                <input
                  type="email"
                  className={inputStyle}
                  placeholder="מייל"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />{' '}
                {errors.email && (
                  <p className="mt-1">
                    {errors.email.type === 'required' &&
                      'This field is required.'}
                    {errors.email.type === 'validate' &&
                      'Invalid Email address'}
                  </p>
                )}
                <textarea
                  rows={4}
                  cols={50}
                  className={inputStyle}
                  placeholder="הודעה"
                  {...register('message', { required: true, maxLength: 1000 })}
                />{' '}
                {errors.message && (
                  <p className="mt-1">
                    {errors.message.type === 'required' &&
                      'This field is required.'}
                    {errors.message.type === 'maxLength' &&
                      'Character limit is 1000'}
                  </p>
                )}
                <button
                  type="submit"
                  className="bg-accent text-secondary-text transi mt-5 rounded-lg px-20 py-3 hover:text-white"
                >
                  שלח
                </button>
              </form>
            </motion.div>
            {isAboveMediumScreens && (
              <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                  {/* <img src={ContactUsPageGraphic} alt="contactus-graphics" /> */}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
