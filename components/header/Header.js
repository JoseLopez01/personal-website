import { useEffect, useState } from 'react';

import Links from './Links';
import ContactButton from './ContactButton';
import MenuIcon from './MenuIcon';
import MyIcon from './MyIcon';

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
        <MenuIcon />
      </div>
    </header>
  );
}
