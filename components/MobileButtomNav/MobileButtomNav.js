'use client';
import { useState } from 'react';
import './MobileButtomNav.css';
import { mobileBottomNavItems } from '../utils/constants';
import { Button } from '@nextui-org/react';

const MobileButtomNav = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="border-t-1 border-white/50 w-full">
      <div className="flex items-center justify-between w-full backdrop-blur-sm z-[9999]">
        {mobileBottomNavItems.map((item, idx) => (
          <Button
            key={idx}
            radius="none"
            onPress={() => setActiveMenu(idx)}
            size="sm"
            className={`flex-col border-t-4 min-h-20  ${
              activeMenu === idx ? 'border-primary-dark' : 'border-transparent '
            }`}
          >
            <item.icon
              className={`size-5 ${
                activeMenu === idx
                  ? 'stroke-primary-dark'
                  : 'dark:stroke-white stroke-black '
              } `}
            />
            <p
              className={`${
                activeMenu === idx
                  ? 'text-primary-dark'
                  : 'dark:text-white text-black '
              } `}
            >
              {item.text}
            </p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MobileButtomNav;
