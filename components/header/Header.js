import { useEffect, useState } from 'react';

import Links from './Links';
import ContactButton from './ContactButton';
import MenuIcon from './MenuIcon';
import MyIcon from './MyIcon';
import Menu from '../menu/Menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sticky top-0 z-50 px-4 bg-gray-100">
      <div className="max-w-screen-lg mx-auto py-4 flex items-center justify-between">
        <MyIcon />
        <Links />
        <ContactButton />
        <MenuIcon handleOnOpen={handleToggleMenu} />
      </div>
      <Menu isOpen={isOpen} handleOnClose={handleToggleMenu} />
    </header>
  );
}
