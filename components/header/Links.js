import LocalLink from './LocalLink';

import React from 'react';

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
];

function Links() {
  return (
    <div className="hidden lg:block">
      {LINKS.map(({ name, route }) => (
        <LocalLink
          className="transition duration-500 mx-3 px-3 py-2 rounded hover:bg-gray-200"
          routeName={name}
          pathName={route}
          key={name}
        />
      ))}
    </div>
  );
}

export default Links;
