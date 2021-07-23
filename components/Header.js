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
    <header className="sticky top-0 z-50">
      <div className="max-h-10 h-10 shadow-lg md:rounded bg-white transition duration-300">
        <div className="flex justify-between items-center h-full px-4">
          <div className="font-bold w-1/5">JL</div>
          <div className="hidden md:block">
            <LocalLink
              className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold"
              routeName="About Me"
              pathName={'/'}
            />
            <LocalLink
              className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold"
              routeName="Work"
              pathName={'/'}
            />
            <LocalLink
              className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold"
              routeName="Contact Me"
              pathName={'/'}
            />
          </div>
          <div className="w-1/5 hidden md:flex justify-end">
            <IconLink className="mx-3 text-gray-400" iconSrc="/icons/twitter.svg" />
            <IconLink className="mx-3 text-gray-400" iconSrc="/icons/github.svg" />
            <IconLink className="mx-3 text-gray-400" iconSrc="/icons/linkedin.svg" />
            <IconLink className="mx-3 text-gray-400" iconSrc="/icons/instagram.svg" />
          </div>
          <div className="md:hidden">
            <button onClick={handleToggleMenu}>
              <MenuSvg height={25} width={25} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute right-0 z-50 w-4/5 h-screen md:hidden bg-gray-800 ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-5/6">
          <LocalLink
            className="w-full flex items-center justify-center h-12 bg-gray-700 rounded font-semibold text-white"
            routeName="About Me"
            pathName={'/'}
          />
          <LocalLink
            className="w-full flex items-center justify-center h-12 hover:bg-gray-100 font-semibold text-white"
            routeName="Work"
            pathName={'/'}
          />
          <LocalLink
            className="w-full flex items-center justify-center h-12 hover:bg-gray-100 font-semibold text-white"
            routeName="Contact Me"
            pathName={'/'}
          />
        </div>
        <div className="mt-6 text-center">
          <IconLink className="mx-3 filter invert" iconSrc="/icons/twitter.svg" />
          <IconLink className="mx-3 filter invert" iconSrc="/icons/github.svg" />
          <IconLink className="mx-3 filter invert" iconSrc="/icons/linkedin.svg" />
          <IconLink className="mx-3 filter invert" iconSrc="/icons/instagram.svg" />
        </div>
      </div>
    </header>
  );
}
