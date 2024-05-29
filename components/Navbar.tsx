import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/images/Logo.png';
import Link from './Link';
import { HebrewDisplayName, SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import Image from "next/image";

type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? '' : 'bg-primary drop-shadow';
  const Links = Object.values(SelectedPage);

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full bg-opacity-95 py-3`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* Links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {Links.map((page) => (
                    <Link
                      key={page}
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                {/*Left Side  */}
                {/* Sign In + Button */}
                <div className={`${flexBetween} gap-8`}>
                  {/* <p>{HebrewDisplayName['SignIn']}</p> */}
                  <ActionButton
                    className="text-accent cursor-pointer"
                    selectedPage={SelectedPage.ContactUs}
                  >
                    הירשם עכשיו
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                title="MenuToggle"
                className="bg- rounded-full p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="text-secondary-text h-6 w-6" />
              </button>
            )}
            <ActionButton
              className="cursor-pointer"
              selectedPage={SelectedPage.Home}
            >
              <Image
                className="h-[3.125rem] w-[3.125rem]"
                src={Logo}
                alt="logo"
              />
            </ActionButton>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed inset-0 z-40 bg-opacity-70 backdrop-blur-lg">
          {/* Close Button */}
          <div className="flex justify-start p-10">
            <button
              title="close"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="text-secondary-text h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-12 text-center text-3xl">
            {Links.map((page) => (
              <Link
                setIsMenuToggled={setIsMenuToggled}
                key={page}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
