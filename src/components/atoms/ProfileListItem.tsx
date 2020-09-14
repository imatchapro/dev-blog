import React from 'react';
import { IconType } from 'react-icons/lib';

type Props = {
  icon: IconType;
  href?: string;
  text: string;
};

const ProfileListItem: React.FC<Props> = ({ icon, href, text }) => {
  const Icon = icon;

  return (
    <li className="mt-1 first:mt-0">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-sm sm:text-base hover:text-gray-900 transition-navigation"
        >
          <Icon />
          <span className="ml-2">{text}</span>
        </a>
      ) : (
        <div className="flex items-start text-sm sm:text-base">
          <Icon className="mt-1 flex-shrink-0" />
          <span className="ml-2">{text}</span>
        </div>
      )}
    </li>
  );
};

export default ProfileListItem;
