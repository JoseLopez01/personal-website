const { createContext, useState, useContext } = require('react');

const asideBarContext = createContext({});

export default function AsideBarContext({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeAsideBar() {
    setIsOpen(false);
  }

  function openAsideBar() {
    setIsOpen(true);
  }

  const context = {
    isOpen,
    closeAsideBar,
    openAsideBar,
  };

  return (
    <asideBarContext.Provider value={context}>
      {children}
    </asideBarContext.Provider>
  );
}

export const useAsideBarContext = () => useContext(asideBarContext);
