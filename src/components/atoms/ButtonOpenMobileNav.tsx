import React, { useContext } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MenuTrigger } from '../../providers/ProviderMenuTrigger';

const ButtonOpenMobileNav: React.FC = () => {
  const { openMobileMenu } = useContext(MenuTrigger);

  return (
    <button onClick={openMobileMenu} className="flex items-center justify-center w-8 h-8 sm:hidden">
      <FiMenu className="w-6 h-6 text-gray-900" />
    </button>
  );
};

export default ButtonOpenMobileNav;
