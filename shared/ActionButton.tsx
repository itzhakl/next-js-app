import { ReactNode } from 'react';
import { SelectedPage } from '@/shared/types';
import { Link as LinkScroll } from 'react-scroll/modules';

type Props = {
  children: ReactNode;
  selectedPage: string;
  className?: string;
};

const ActionButton = ({ children, selectedPage, className }: Props) => {
  return (
    <LinkScroll smooth duration={1000} to={selectedPage} className={className}>
      {children}
    </LinkScroll>
  );
};

export default ActionButton;
