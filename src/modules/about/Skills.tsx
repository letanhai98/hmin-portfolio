'use client';

import { techs } from '@/contants';
import Image from 'next/image';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const Skills = () => {
  const [tabKey, setTabkey] = useState<string>('tech');

  const tabs = [
    {
      key: 'tech',
      name: 'Tech Stack',
    },
    {
      key: 'tools',
      name: 'Tools',
    },
  ];

  const renderTabs = () => (
    <ul className="flex flex-row gap-4 items-center">
      {tabs?.map((tab, index) => (
        <li
          onClick={() => setTabkey(tab?.key)}
          className={twMerge(
            'px-4 py-2 text-white rounded-lg cursor-pointer duration-200 ease-out',
            tab.key === tabKey ? 'bg-gray-800' : ''
          )}
          key={index}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );

  const renderItems = () => (
    <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 duration-200">
      {[...techs[tabKey]].map((item) => (
        <li
          key={item?.name}
          className={twMerge(
            'w-full p-3 flex items-center group gap-4 border-yellow-500 border-opacity-60 border-2 cursor-pointer duration-300 hover:bg-gray-900 ease-out'
          )}
        >
          <Image
            src={item?.image}
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="h-12 flex flex-col justify-center items-start duration-300 ease-out">
            <span className="text-white text-xl font-medium">{item?.name}</span>
            <span className="text-gray-500 text-base font-medium hidden group-hover:block">
              {item?.description}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-row gap-2 items-center">
        <div className="w-[100px] h-[1px] bg-white opacity-60" />
        <h2 className="text-2xl text-white font-medium">Skills</h2>
      </div>
      {renderTabs()}
      {renderItems()}
    </section>
  );
};
