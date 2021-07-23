import MenuSvg from '../icons/MenuSvg';
import LocalLink from './LocalLink';
import IconLink from './IconLink';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }
  /**
   * TODO:
   *
   * - [] Create a new component for Links
   * - [] Create a nwe component for Image Icons
   * - [] Add responsive new navBar
   */
  return (
    <>
      <div className="max-h-10 h-10 shadow-lg md:rounded sticky top-0 z-50 bg-white transition duration-300">
        <div className="flex justify-between items-center h-full px-4">
          <div className="font-bold w-1/5">JL</div>
          <div className="hidden md:block">
            <LocalLink routeName="About Me" pathName={'/'} />
            <LocalLink routeName="Work" pathName={'/'} />
            <LocalLink routeName="Contact Me" pathName={'/'} />
          </div>
          <div className="w-1/5 hidden md:flex justify-end">
            <IconLink iconSrc="/icons/twitter.svg" />
            <IconLink iconSrc="/icons/github.svg" />
            <IconLink iconSrc="/icons/linkedin.svg" />
            <IconLink iconSrc="/icons/instagram.svg" />
          </div>
          <div className="md:hidden">
            <button onClick={handleToggleMenu}>
              <MenuSvg height={25} width={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
