import React, { useContext } from 'react';
import { MobileMenu } from '../../providers/ProviderMobileMenu';

const MobileMenuNavItem: React.FC = ({ children }) => {
  const { closeMobileMenu } = useContext(MobileMenu);

  return (
    <li onClick={closeMobileMenu} className="mt-8 first:mt-0">
      {children}
    </li>
  );
};

export default MobileMenuNavItem;
