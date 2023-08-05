'use client';

import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const Welcome = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-center items-center gap-8">
      <div
        data-aos="zoom-in-right"
        className="flex flex-col gap-3 duration-200"
      >
        <p className="text-base text-yellow-500 opacity-60 font-medium">
          Hello world, I'm
        </p>
        <h1 className="text-white text-2x md:text-6xl font-bold">Lê Tấn Hải</h1>
        <div className="min-w-[300px]">
          <TypeAnimation
            sequence={[
              1000,
              'Front-end Developer.',
              1000,
              'I strongly dislike being late in work.',
              1000,
              'hminDev()',
              1000,
            ]}
            className="text-white font-medium"
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-base text-white font-medium">
          Welcome to My personal website. 👏
        </p>
      </div>
      <div
        data-aos="zoom-in-left"
        className="rounded-full bg-gray-800 p-4 group opacity-80 hover:opacity-100 duration-200 group"
      >
        <div className="rounded-full bg-gray-700 p-4">
          <Image
            src={'/hmin.png'}
            width={300}
            height={300}
            alt="hmin"
            className="rounded-full group-hover:scale-110 border-2 border-yellow-500 duration-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};