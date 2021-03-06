import React, { useContext } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MobileMenu } from '../../providers/ProviderMobileMenu';

const ButtonOpenMobileNav: React.FC = () => {
  const { handleChangeStateMobileMenu } = useContext(MobileMenu);

  return (
    <button
      onClick={() => handleChangeStateMobileMenu('OPEN_MOBILE_MENU')}
      className="flex items-center justify-center w-8 h-8 sm:hidden"
    >
      <FiMenu className="w-6 h-6 text-gray-900" />
    </button>
  );
};

export default ButtonOpenMobileNav;
