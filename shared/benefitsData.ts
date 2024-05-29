import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  FireIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid';
import { BenefitType } from '@/shared/types';

export const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'מתקנים מהשורה הראשונה',
    description:
      'אנו מציעים מתקני כושר מתקדמים ומודרניים, הכוללים את הציוד העדכני ביותר והמתקדם ביותר בשוק.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: 'מאות שיעורים מגוונים',
    description:
      'מאות שיעורים מותאמים אישית לכל הרמות והגילאים, הכוללים יוגה, פילאטיס, אימוני כוח ועוד.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'מאמנים מומחים ומקצועיים',
    description:
      'המאמנים שלנו הם מהטובים ביותר בתחום, בעלי ניסיון רב והכשרה מקצועית נרחבת.',
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: 'בריאות ולב טובים יותר',
    description:
      'באמצעות אימונים קבועים ומותאמים אישית, אנו מסייעים בשיפור בריאות הלב וכלי הדם.',
  },
  {
    icon: <FireIcon className="h-6 w-6" />,
    title: 'שריפת שומנים יעילה',
    description:
      'אימונים מיוחדים לשריפת שומנים וירידה במשקל, המיועדים לשיפור המטבוליזם והגעה לתוצאות מהירות.',
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: 'ביטחון והגנה אישית',
    description:
      'שיעורים לשיפור הביטחון העצמי והכושר הפיזי, הכוללים טכניקות להגנה עצמית במצבי חירום.',
  },
];
