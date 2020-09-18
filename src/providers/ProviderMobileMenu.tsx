import React, { createContext, useState } from 'react';
import ScrollLock from 'react-scrolllock';

type Props = {
  children: React.ReactNode;
};

type StateMobileMenu = 'open-mobile-menu' | 'close-mobile-menu';

type ContextMobileMenu = {
  stateMobileMenu: StateMobileMenu;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
};

const defaultContext: ContextMobileMenu = {
  stateMobileMenu: 'close-mobile-menu',
  openMobileMenu: () => null,
  closeMobileMenu: () => null,
};

export const MobileMenu = createContext<ContextMobileMenu>(defaultContext);

const ProviderMobileMenu: React.FC<Props> = ({ children }) => {
  const [stateMobileMenu, setStateMobileMenu] = useState<StateMobileMenu>('close-mobile-menu');

  const openMobileMenu = () => {
    setStateMobileMenu('open-mobile-menu');
  };

  const closeMobileMenu = () => {
    setStateMobileMenu('close-mobile-menu');
  };

  return (
    <MobileMenu.Provider value={{ stateMobileMenu, openMobileMenu, closeMobileMenu }}>
      {children}
      <ScrollLock isActive={stateMobileMenu === 'open-mobile-menu'} />
    </MobileMenu.Provider>
  );
};

export default ProviderMobileMenu;
