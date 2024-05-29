import { BenefitType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { Link as LinkScroll } from 'react-scroll/modules';
type Props = {
  benefit: BenefitType;
  setSelectedPage: (value: string) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const BenefitsSection = ({ benefit, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="bg-primary m-3 h-[18rem] w-[15rem] flex-shrink-0 flex-grow-0 rounded-lg border-2 border-gray-100 px-5 py-5 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="bg-secondary rounded-full border-2 border-gray-100 p-4">
          {benefit.icon}
        </div>
      </div>
      <h4 className="text-secondary-text font-bold">{benefit.title}</h4>
      <p className="text-secondary-text my-3 text-wrap">
        {benefit.description}
      </p>
      <LinkScroll
        smooth
        duration={1000}
        to={SelectedPage.ContactUs}
        className="text-primary-text hover:text-accent cursor-pointer text-sm font-bold underline"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <p>עוד פרטים</p>
      </LinkScroll>
    </motion.div>
  );
};

export default BenefitsSection;
