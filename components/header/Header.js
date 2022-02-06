
import Links from './Links';
import ContactButton from './ContactButton';
import MenuIcon from './MenuIcon';
import MyIcon from './MyIcon';
import Menu from '../menu/Menu';
import { useAsideBarContext } from '../../context/AsideBarContext';

export default function Header() {
  const { openAsideBar  } = useAsideBarContext();

  return (
    <header className="sticky top-0 z-50 px-4 bg-white">
      <div className="max-w-screen-lg mx-auto py-4 flex items-center justify-between">
        <MyIcon />
        <Links />
        <ContactButton />
        <MenuIcon handleOnOpen={openAsideBar} />
      </div>
      <Menu />
    </header>
  );
}
