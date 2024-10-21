'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  User,
} from '@nextui-org/react';
import { useState } from 'react';
import { navMenu } from '../utils/constants';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import './MobileNav.css';
import {
  SvgMenuCloseIcon,
  SvgMenuIcon,
  SvgSettingsTwoIcon,
} from '../utils/SvgIcons';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linkActive, setLinkActive] = useState(0);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="dark:bg-primary-nav bg-white"
    >
      <NavbarContent>
        <NavbarBrand>
          <div className="w-fit p-[3px] nav-logo">Full Logo</div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
          icon={
            isMenuOpen ? (
              <SvgMenuCloseIcon />
            ) : (
              <SvgMenuIcon className="stroke-icon-collapse dark:stroke-white" />
            )
          }
        />
      </NavbarContent>
      <NavbarMenu className="dark:bg-primary-nav/75">
        {navMenu.map((item, idx) => (
          <NavbarMenuItem
            key={`${item.text}-${idx}`}
            className={item.text === 'Collapse' ? 'hidden' : 'block '}
          >
            <Link className="w-full" href={item.href} size="lg">
              <div className="mobile-nav-link">
                <Button
                  onPress={() => {
                    setLinkActive(idx);
                  }}
                  endContent={
                    item.message ? (
                      <div className="mobile-nav-message-dot">
                        {item.message}
                      </div>
                    ) : (
                      ''
                    )
                  }
                  radius="none"
                  className={` w-full rounded-sm justify-between  h-[38px] px-[13px] ${
                    linkActive === idx
                      ? 'text-primary-light bg-[#F1F5F9] dark:bg-primary-dark dark:text-white'
                      : 'bg-transparent hover:bg-[#f9f2fd] dark:hover:bg-[#f9f2fd]/10'
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <item.icon
                      className={`${
                        linkActive === idx
                          ? 'stroke-primary-dark dark:stroke-white'
                          : 'stroke-primary-unselect'
                      }`}
                    />

                    <p>{item.text}</p>
                  </div>
                </Button>
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="mobile-nav-item-container">
          <ThemeChanger />
        </div>
        <div>
          <User
            name="Rudra Devi"
            className="mobile-nav-item-container"
            description="rudra.devi@gmail.com"
            avatarProps={{
              src: '../Profile_Icon.png',
              className: 'bg-[#F3F4F6] border-1 pt-1.5 dark:bg-primary-nav',
            }}
            classNames={{ description: 'dark:text-white' }}
          />
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default MobileNav;
