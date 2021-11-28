import { useState } from 'react';

import Image from 'next/image';

import MenuSvg from '../icons/MenuSvg';
import LocalLink from './LocalLink';
import IconLink from './IconLink';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="max-h-10 h-10 shadow-lg md:rounded bg-white transition duration-300">
        <div className="flex justify-between items-center h-full px-4">
          <div className="w-1/5 flex items-center">
            <Image src="/icons/icon.svg" height="20" width="20" />
          </div>
          <div className="hidden md:block">
            <LocalLink
              className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold"
              routeName="About Me"
              pathName={'#about-me'}
            />
            <LocalLink
              className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold"
              routeName="Work"
              pathName={'#work'}
            />
            <LocalLink
              className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold"
              routeName="Contact Me"
              pathName={'#contact'}
            />
          </div>
          <div className="w-1/5 hidden md:flex justify-end h-full items-center">
            <IconLink
              className="mx-3 text-gray-400"
              iconSrc="/icons/twitter.svg"
              href="https://twitter.com/im_el_joe"
            />
            <IconLink
              className="mx-3 text-gray-400"
              iconSrc="/icons/github.svg"
              href="https://github.com/JoseLopez01"
            />
            <IconLink
              className="mx-3 text-gray-400"
              iconSrc="/icons/linkedin.svg"
              href="https://www.linkedin.com/in/jos%C3%A9-alejandro-b1836b1a9/"
            />
            <IconLink
              className="mx-3 text-gray-400"
              iconSrc="/icons/instagram.svg"
              href="https://www.instagram.com/im_el_joe/"
            />
          </div>
          <div className="md:hidden">
            <button onClick={handleToggleMenu}>
              <MenuSvg height={25} width={25} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={isOpen ? 'w-full absolute h-screen' : ''}
        onClick={handleToggleMenu}
      >
        <div
          className={`fixed top-10 right-0 z-50 w-4/5 h-screen md:hidden bg-gray-800 animate__animated animate__faster ${
            isOpen ? 'animate__fadeInRight' : 'animate__fadeOutRight'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-5/6">
            <LocalLink
              className="w-full flex items-center justify-center h-12 rounded font-semibold text-white"
              routeName="About Me"
              pathName={'#about-me'}
              onClick={handleToggleMenu}
            />
            <LocalLink
              className="w-full flex items-center justify-center h-12 font-semibold text-white"
              routeName="Work"
              pathName={'#work'}
              onClick={handleToggleMenu}
            />
            <LocalLink
              className="w-full flex items-center justify-center h-12 font-semibold text-white"
              routeName="Contact Me"
              pathName={'#contact'}
              onClick={handleToggleMenu}
            />
          </div>
          <div className="mt-6 text-center">
            <IconLink
              className="mx-3 filter invert"
              iconSrc="/icons/twitter.svg"
              href="https://twitter.com/im_el_joe"
            />
            <IconLink
              className="mx-3 filter invert"
              iconSrc="/icons/github.svg"
              href="https://github.com/JoseLopez01"
            />
            <IconLink
              className="mx-3 filter invert"
              iconSrc="/icons/linkedin.svg"
              href="https://www.linkedin.com/in/jos%C3%A9-alejandro-b1836b1a9/"
            />
            <IconLink
              className="mx-3 filter invert"
              iconSrc="/icons/instagram.svg"
              href="https://www.instagram.com/im_el_joe/"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
