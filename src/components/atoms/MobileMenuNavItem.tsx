import React, { useContext } from 'react';
import { MobileMenu } from '../../providers/ProviderMobileMenu';

const MobileMenuNavItem: React.FC = ({ children }) => {
  const { handleChangeStateMobileMenu } = useContext(MobileMenu);

  return (
    <li
      onClick={() => handleChangeStateMobileMenu('CLOSE_MOBILE_MENU')}
      className="mb-8 first:mt-0"
    >
      {children}
    </li>
  );
};

export default MobileMenuNavItem;
