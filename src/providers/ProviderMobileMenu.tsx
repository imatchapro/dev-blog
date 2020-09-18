import React, { createContext, useReducer } from 'react';
import ScrollLock from 'react-scrolllock';

type Props = {
  children: React.ReactNode;
};

type StateMobileMenu = 'open-mobile-menu' | 'close-mobile-menu';

type ActionMobileMenu = 'OPEN_MOBILE_MENU' | 'CLOSE_MOBILE_MENU';

type ContextMobileMenu = {
  stateMobileMenu: StateMobileMenu;
  handleChangeStateMobileMenu: (state: ActionMobileMenu) => void;
};

const reducerMobileMenu: React.Reducer<StateMobileMenu, ActionMobileMenu> = (state, action) => {
  switch (action) {
    case 'OPEN_MOBILE_MENU':
      return 'open-mobile-menu';
    case 'CLOSE_MOBILE_MENU':
      return 'close-mobile-menu';
    default:
      throw new Error();
  }
};

const initState: StateMobileMenu = 'close-mobile-menu';

const defaultContext: ContextMobileMenu = {
  stateMobileMenu: 'close-mobile-menu',
  handleChangeStateMobileMenu: () => null,
};

export const MobileMenu = createContext<ContextMobileMenu>(defaultContext);

const ProviderMobileMenu: React.FC<Props> = ({ children }) => {
  const [stateMobileMenu, dispatchMobileMenu] = useReducer(reducerMobileMenu, initState);

  const handleChangeStateMobileMenu = (state: ActionMobileMenu) => {
    dispatchMobileMenu(state);
  };

  return (
    <MobileMenu.Provider value={{ stateMobileMenu, handleChangeStateMobileMenu }}>
      {children}
      <ScrollLock isActive={stateMobileMenu === 'open-mobile-menu'} />
    </MobileMenu.Provider>
  );
};

export default ProviderMobileMenu;
