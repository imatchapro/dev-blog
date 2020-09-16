import React, { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type StateMobileMenu = 'open-mobile-menu' | 'close-mobile-menu';

type ContextMenuTrigger = {
  stateMobileMenu: StateMobileMenu;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
};

const defaultMenuTriggerContext: ContextMenuTrigger = {
  stateMobileMenu: 'close-mobile-menu',
  openMobileMenu: () => null,
  closeMobileMenu: () => null,
};

export const MenuTrigger = createContext<ContextMenuTrigger>(defaultMenuTriggerContext);

const ProviderMenuTrigger: React.FC<Props> = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState<StateMobileMenu>('close-mobile-menu');

  const openMobileMenu = () => {
    setMobileMenu('open-mobile-menu');
  };

  const closeMobileMenu = () => {
    setMobileMenu('close-mobile-menu');
  };

  return (
    <MenuTrigger.Provider value={{ stateMobileMenu: mobileMenu, openMobileMenu, closeMobileMenu }}>
      {children}
    </MenuTrigger.Provider>
  );
};

export default ProviderMenuTrigger;
