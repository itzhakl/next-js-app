export enum SelectedPage {
  Home = 'home',
  AboutUs = 'aboutus',
  OurClasses = 'ourclasses',
  Benefits = 'benefits',
  ContactUs = 'contactus',
  Footer = 'footer',
}

export enum HebrewDisplayName {
  home = 'ראשי',
  aboutus = 'אודותינו',
  benefits = 'יתרונות',
  ourclasses = 'המסלולים שלנו',
  contactus = 'צור קשר',
  footer = 'בלוג',
  SignIn = 'הכנס',
  BecomeAMember = 'הירשם',
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface DatasType {
  name: string;
  description?: string;
  image: string;
}
