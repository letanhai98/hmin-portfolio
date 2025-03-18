import { projects } from '@/contants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const MyProject = () => {
  return (
    <section className="flex flex-col relative">
      <div className="flex flex-col sticky top-[72px] gap-1 items-center text-center bg-gray-950 z-10 py-6">
        <h1 className="text-white text-2xl font-medium">
          Past Project Experience
        </h1>
        <p className="text-base text-gray-500">
          Explore the projects({projects?.length}) I've worked on so far
        </p>
      </div>
      <ul
        data-aos="zoom-out-up"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
        {projects?.map((item, index) => (
          <li key={index}>
            <Link
              href={item?.link}
              target="_blank"
              className="flex flex-col h-full p-4 rounded-lg bg-gray-900 cursor-pointer group overflow-hidden gap-2 md:gap-4">
              {item?.banner && (
                <div
                  className={twMerge(
                    'h-[200px] md:h-[260px] relative',
                    item?.isApp
                      ? 'rounded-full flex justify-center items-center'
                      : ''
                  )}>
                  {item?.isApp ? (
                    <Image
                      src={item?.banner}
                      alt="banner"
                      width={200}
                      height={200}
                      className={twMerge(
                        'group-hover:scale-[1.08] duration-200',
                        item?.isApp
                          ? 'object-contain md:object-none rounded-full scale-[1.1] group-hover:scale-[1.18] md:scale-[1.5] md:group-hover:scale-[1.6]'
                          : ''
                      )}
                    />
                  ) : (
                    <Image
                      src={item?.banner}
                      fill
                      alt="banner"
                      className={twMerge(
                        'group-hover:scale-[1.08] duration-200',
                        item?.isApp
                          ? 'object-contain md:object-none rounded-full'
                          : ''
                      )}
                    />
                  )}
                </div>
              )}
              <h2 className="text-white text-xl md:text-2xl font-medium text-center">
                {item?.name}
              </h2>
              <p className="text-sm text-white opacity-60 group-hover:opacity-100 duration-200">
                {item?.description}
              </p>
              <div className="flex flex-row justify-between items-center">
                <span className="text-sm text-blue-700 opacity-50 font-medium group-hover:text-yellow-500">
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
