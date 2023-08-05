'use client';

import { navs, socials } from '@/contants';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { useClosure, useScroll } from '@/hooks';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TbMenu2 } from 'react-icons/tb';

export const Header = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { onToggleVisible, visible } = useClosure();

  const renderNavMobile = () => {
    return (
      <div
        className={`overflow-y-auto md:hidden fixed top-0 z-[100] flex flex-col h-full bg-black ${
          visible ? 'w-full left-0' : 'translate-x-[-200%]'
        } duration-300 overflow-x-hidden px-5`}
      >
        <div className="flex justify-end items-center !h-[72px]">
          <AiOutlineCloseCircle
            className="text-white cursor-pointer hover:text-yellow-500"
            onClick={onToggleVisible}
            size={24}
          />
        </div>
        <nav>
          <ul className="flex flex-col  gap-8 justify-start items-start w-full">
            {navs?.map((nav, index) => (
              <li key={nav.name + index}>
                <Link
                  href={nav.href}
                  className={twMerge(
                    'hover:text-white duration-200 font-medium border-b-[3px] pb-1',
                    nav.href === pathname
                      ? 'text-white border-b-yellow-500'
                      : 'text-gray-500 border-b-transparent'
                  )}
                  onClick={onToggleVisible}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  };

  const renderNavDesktop = () => (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        {navs?.map((nav, index) => (
          <li key={nav.name + index}>
            <Link
              href={nav.href}
              className={twMerge(
                'hover:text-white duration-200 font-medium border-b-[3px] pb-1',
                nav.href === pathname
                  ? 'text-white border-b-yellow-500'
                  : 'text-gray-500 border-b-transparent',
                scrollY >= 80 ? 'text-white opacity-80' : ''
              )}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header
      className={twMerge(
        'flex justify-center items-center fixed top-0 w-full h-[72px] z-50',
        scrollY >= 80 ? 'bg-backdrop-modal' : ''
      )}
    >
      <div className="flex flex-row justify-between items-center container p-5">
        <Link
          href={'/'}
          className="text-white text-2xl hover:text-yellow-500 duration-200 cursor-pointer"
        >
          hminDev()
        </Link>
        {renderNavDesktop()}
        {renderNavMobile()}
        <ul className="flex flex-row gap-4 items-center">
          <a
            href="/LeTanHai_cv.pdf"
            target="_blank"
            download
            className="text-white bg-yellow-500 rounded-lg  h-10 w-24 font-medium flex justify-center items-center hover:bg-gray-900 duration-200"
          >
            My CV
          </a>
          {socials?.map((social, index) => (
            <li key={social.name + index}>
              <Link
                href={social.href}
                target="_blank"
                className="text-white hover:text-yellow-500 duration-200"
              >
                {social.icon}
              </Link>
            </li>
          ))}
          <TbMenu2
            onClick={onToggleVisible}
            className="md:hidden text-white hover:text-yellow-500 duration-200 cursor-pointer"
            size={24}
          />
        </ul>
      </div>
    </header>
  );
};
