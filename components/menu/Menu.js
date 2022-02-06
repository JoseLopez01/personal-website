import React from 'react';

import LocalLink from '../header/LocalLink';

const LINKS = [
  {
    name: 'About me',
    route: '#about-me',
  },
  {
    name: 'Work',
    route: '#work',
  },
  {
    name: 'My blog',
    route: '#blog',
  },
  {
    name: 'Contact me',
    route: '#contact',
  },
];

function Menu({ isOpen, handleOnClose }) {
  return isOpen ? (
    <div
      className="w-full absolute h-screen bg-black top-0 left-0 bg-opacity-5"
      onClick={handleOnClose}
    >
      <aside className="w-4/5 h-full ml-auto bg-gray-800 p-4 flex justify-between flex-col">
        <div className="w-full flex">
          <button className="text-white ml-auto text-5xl">
            <i className="uil uil-multiply"></i>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          {LINKS.map(({ name, route }) => (
            <LocalLink
              routeName={name}
              pathName={route}
              className="w-full flex items-center justify-center h-12 font-semibold text-white"
              onClick={handleOnClose}
              key={route}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <a>
            <button className="text-white text-3xl">
              <i className="uil uil-twitter"></i>
            </button>
          </a>
          <a>
            <button className="text-white text-3xl">
              <i className="uil uil-medium-m"></i>
            </button>
          </a>
          <a>
            <button className="text-white text-3xl">
              <i className="uil uil-linkedin"></i>
            </button>
          </a>
          <a>
            <button className="text-white text-3xl">
              <i className="uil uil-github"></i>
            </button>
          </a>
        </div>
      </aside>
    </div>
  ) : null;
}

export default Menu;
