import React from 'react';

import Hero from './hero/Hero';
import Header from './header/Header';
import Work from './work/Work';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import AsideBarContext, {
  useAsideBarContext,
} from '../context/AsideBarContext';

function Layout() {
  const { isOpen } = useAsideBarContext();

  return (
    <AsideBarContext>
      <Header />
      <main
        role="main"
        className="max-w-screen-lg mx-auto font-sans md:py-2 overflow-x-hidden pt-20"
      >
        <Hero />
        <Work />
        <Blog />
        <Contact />
      </main>
    </AsideBarContext>
  );
}

export default Layout;
