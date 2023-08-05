import { projects } from '@/contants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const MyProject = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center text-center">
        <h1 className="text-white text-2xl font-medium">
          Past Project Experience
        </h1>
        <p className="text-base text-gray-500">
          Explore the projects I've worked on so far
        </p>
      </div>
      <ul
        data-aos="zoom-out-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {projects?.map((item, index) => (
          <li key={index}>
            <Link
              href={item?.link}
              target="_blank"
              className="flex flex-col h-full p-4 rounded-lg bg-gray-900 cursor-pointer group overflow-hidden gap-4"
            >
              {item?.banner && (
                <div className="h-[260px] relative">
                  <Image
                    src={item?.banner}
                    fill
                    alt="banner"
                    className="group-hover:scale-[1.08] duration-200 bg-cover md:object-none"
                  />
                </div>
              )}
              <h2 className="text-white text-2xl font-medium text-center">
                {item?.name}
              </h2>
              <p className="text-base text-white opacity-60 group-hover:opacity-100 duration-200">
                {item?.description}
              </p>
              <div className="flex flex-row justify-between items-center">
                <span className="text-base text-blue-700 opacity-50 font-medium group-hover:text-yellow-500">
                  {item?.buildBy}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
