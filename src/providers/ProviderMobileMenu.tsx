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
  const [mobileMenu, setMobileMenu] = useState<StateMobileMenu>('close-mobile-menu');

  const openMobileMenu = () => {
    setMobileMenu('open-mobile-menu');
  };

  const closeMobileMenu = () => {
    setMobileMenu('close-mobile-menu');
  };

  return (
    <MobileMenu.Provider value={{ stateMobileMenu: mobileMenu, openMobileMenu, closeMobileMenu }}>
      {children}
      <ScrollLock isActive={mobileMenu === 'open-mobile-menu'} />
    </MobileMenu.Provider>
  );
};

export default ProviderMobileMenu;
