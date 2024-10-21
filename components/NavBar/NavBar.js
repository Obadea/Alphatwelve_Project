'use client';

import { Avatar, Button, User } from '@nextui-org/react';
import { navMenu, navMenuCollapse } from '../utils/constants';
import './NavBar.css';
import { useState } from 'react';
import ThemeChanger from '../ThemeChanger/ThemeChanger';

const NavBar = () => {
  const [linkActive, setLinkActive] = useState(0);
  const [navCollapse, setNavCollapse] = useState(false);

  return (
    <>
      <nav
        className={`transition-all duration-300  ${
          navCollapse ? 'sidebar-collapse' : 'sidebar-open'
        } border-r-1 border-primary-nav/10  dark:bg-primary-nav`}
      >
        {navCollapse ? (
          <div className="collapse-sidenav-container">
            <div className="h-[32px] w-[32px] nav-logo " />
            {navMenuCollapse.map((collapseEle, idx) => (
              <Button
                key={idx}
                isIconOnly
                radius="full"
                size="sm"
                className={` ${
                  linkActive === idx
                    ? 'bg-[#F1F5F9] dark:bg-primary-dark'
                    : 'bg-transparent hover:bg-[#f9f2fd] dark:hover:bg-[#f9f2fd]/10 '
                }`}
                onPress={() => {
                  setLinkActive(idx);
                  if (collapseEle.text === 'Collapse') {
                    setNavCollapse(!navCollapse);
                  }
                }}
                endContent={
                  collapseEle.message ? (
                    <div className="collapse-nav-message-dot" />
                  ) : (
                    ''
                  )
                }
              >
                {
                  <collapseEle.icon
                    className={`${
                      linkActive === idx
                        ? 'stroke-primary-dark dark:stroke-white'
                        : 'stroke-icon-collapse dark:stroke-primary-unselect'
                    }`}
                  />
                }
              </Button>
            ))}
            <Avatar
              src="../Profile_Icon.png"
              size="sm"
              className="bg-[#F3F4F6] dark:bg-primary-nav border-1 pt-1.5"
            />
          </div>
        ) : (
          <div className="sidebar-container">
            <div className="w-fit p-[3px] ml-[10px] nav-logo">Full Logo</div>
            <div className=" nav-link">
              {navMenu.map((ele, idx) => (
                <Button
                  key={idx}
                  onPress={() => {
                    setLinkActive(idx);
                    if (ele.text === 'Collapse') {
                      setNavCollapse(!navCollapse);
                    }
                  }}
                  startContent={
                    <ele.icon
                      className={`${
                        linkActive === idx
                          ? 'stroke-primary-dark dark:stroke-white'
                          : 'stroke-primary-unselect'
                      }`}
                    />
                  }
                  endContent={
                    ele.message ? (
                      <div className="nav-message-dot">{ele.message}</div>
                    ) : (
                      ''
                    )
                  }
                  radius="none"
                  className={`rounded-sm justify-start pr-0  h-[38px] pl-[13px] ${
                    linkActive === idx
                      ? 'text-primary-light bg-[#F1F5F9] dark:bg-primary-dark dark:text-white'
                      : 'bg-transparent hover:bg-[#f9f2fd] dark:hover:bg-[#f9f2fd]/10'
                  }`}
                >
                  {ele.text}
                </Button>
              ))}
              <div className="nav-item-container">
                <ThemeChanger />
              </div>
              <div>
                <User
                  name="Rudra Devi"
                  className="nav-item-container"
                  description="rudra.devi@gmail.com"
                  avatarProps={{
                    src: '../Profile_Icon.png',
                    className:
                      'bg-[#F3F4F6] border-1 pt-1.5 dark:bg-primary-nav',
                  }}
                  classNames={{ description: 'dark:text-white' }}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
