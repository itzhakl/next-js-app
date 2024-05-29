import { Link as LinkScroll } from 'react-scroll/modules';
import { HebrewDisplayName, SelectedPage } from '@/shared/types';

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  setIsMenuToggled?: (value: boolean) => void;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
  const selectedPagesArray = Object.values(SelectedPage);
  return (
    <LinkScroll
      smooth
      duration={1000}
      to={lowerCasePage}
      className={`${
        selectedPage === lowerCasePage ? 'text-accent' : 'text-secondary-text'
      } hover:text-primary-text cursor-pointer transition duration-500`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled && setIsMenuToggled(false);
      }}
    >
      {HebrewDisplayName[lowerCasePage]}
    </LinkScroll>
  );
};

export default Link;
