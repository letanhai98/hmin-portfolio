'use client';

import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  TbMailFilled,
  TbMailHeart,
  TbPhone,
  TbPhoneFilled,
} from 'react-icons/tb';
import { BsTelegram } from 'react-icons/bs';

export const AboutMe = () => {
  const renderViewLeft = () => (
    <div className="flex flex-col gap-4 w-full lg:w-[60%]">
      <div className="flex flex-row justify-between items-center gap-4 opacity-60">
        <h1 className="text-white text-2xl w-[200px]">About Me</h1>
        <div className="h-[1px] w-full bg-white" />
      </div>
      <div
        data-aos="fade-up-right"
        className="flex justify-center items-center w-full"
      >
        <Image
          src="/hmin.png"
          alt="hmin"
          width={300}
          height={300}
          className="rounded-full border-2 border-yellow-500"
        />
      </div>
    </div>
  );

  const renderViewRight = () => (
    <div className="flex flex-col gap-8 w-full justify-center items-start">
      <p
        data-aos="fade-left"
        className="text-white text-base font-medium indent-8"
      >
        My name is Le Tan Hai, and I am {new Date().getFullYear() - 1998} years
        old, born in 1998. I have{' '}
        <span className="text-yellow-500 font-bold text-xl">
          nearly 4 years
        </span>{' '}
        of experience working as a front-end developer from{' '}
        <span className="text-yellow-500 font-bold">Vietnam</span>. I am
        dedicated to my work and strive for excellence. I dislike delays and
        always aim to deliver projects on time. In my free time, I enjoy
        traveling and exploring new places. I am an introverted person who
        appreciates solitude and introspection. Additionally, I have a fondness
        for the fairer sex.
      </p>

      <TypeAnimation
        sequence={[
          1000,
          'If given the opportunity, I believe I can do anything.',
          1000,
          ' If given the opportunity, I believe I can do anything.',
          1000,
        ]}
        className="font-bold text-2xl text-yellow-500 opacity-80 text-center"
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />

      <div
        data-aos="fade-left"
        data-aos-duration="600"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-row text-white text-base font-medium gap-2">
          <TbMailFilled size={24} />
          <span>letanhai29011998@gmail.com</span>
        </div>
        <div className="flex flex-row text-white text-base font-medium gap-2">
          <TbPhoneFilled size={24} />
          <span>+84981517107</span>
        </div>
        <div className="flex flex-row text-white text-base font-medium gap-2">
          <BsTelegram size={24} />
          <span>@hminusd</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="rounded-lg bg-gray-900 w-full p-8 flex flex-col md:flex-row gap-8 duration-200">
      {renderViewLeft()}
      {renderViewRight()}
    </section>
  );
};
