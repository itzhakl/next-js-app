import image1 from '@/assets/images/image1.jpeg';
import image2 from '@/assets/images/image2.jpeg';
import image3 from '@/assets/images/image3.jpeg';
import image4 from '@/assets/images/image4.jpeg';
import video from '@/assets/images/video1.mp4';
import { DatasType } from '@/shared/types';

export const datas: Array<DatasType> = [
  {
    name: 'שיעורי אימון משקולות',
    description:
      'שיעורי אימון משקולות שמתאימים למי שרוצה להתחזק ולהגביר את המסה השרירית.',
    image: image1,
  },
  {
    name: 'שיעורי יוגה',
    description: 'שיעורי יוגה להרגעת הגוף והנפש, לשיפור הגמישות והאיזון.',
    image: image2,
  },
  {
    name: 'שיעורי חיזוק ליבת הבטן',
    description: 'שיעורי חיזוק ליבת הבטן לשיפור הכוח והיציבה של שרירי הבטן.',
    image: image3,
  },
  {
    name: 'שיעורי הרפתקאות',
    description:
      'שיעורי הרפתקאות לשיפור הכושר הגופני דרך פעילויות מאתגרות ומהנות.',
    image: image4,
  },
  {
    name: 'שיעורי כושר',
    description: 'שיעורי כושר כלליים לשיפור הכושר הגופני והבריאות הכללית.',
    image: video,
  },
];

export const trainingPlansTitle = 'מסלולי האימונים שלנו';

export const trainingPlans = [
  {
    title: 'אימונים אישיים 1 על 1',
    description: 'אימון מותאם אישית למטרות ולצרכים שלכם.',
    features: ['ליווי צמוד', 'תוכנית מותאמת אישית', 'גמישות בזמנים'],
  },
  {
    title: 'אימונים זוגיים',
    description: 'אימון יחד עם בן/בת הזוג או חבר/ה.',
    features: ['תמיכה הדדית', 'חווית אימון משותפת', 'מחיר מוזל'],
  },
  {
    title: 'אימוני קבוצות בוטיק (לנשים בלבד)',
    description: 'אימונים בקבוצות קטנות ואיכותיות.',
    features: ['תמיכה קבוצתית', 'יחס אישי', 'אווירה אינטימית'],
  },
  {
    title: 'ליווי אונליין מרחוק',
    description: 'אימון והכוונה אישית מרחוק.',
    features: ['נוחות וגמישות', 'מתאימים לכל מקום', 'תמיכה מקצועית'],
  },
];
