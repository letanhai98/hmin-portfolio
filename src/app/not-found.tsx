'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ReactCountdown from 'react-countdown';

export default function NotFound() {
  const router = useRouter();

  const renderer = ({ seconds }: any) => (
    <span className="text-2xl lg:text-4xl text-custom-cyan-special font-bold mx-2">
      {Number(seconds) < 10 ? `0${seconds}` : seconds}
    </span>
  );

  return (
    <main className="flex flex-col w-full justify-center items-center gap-8 min-h-screen">
      <h1 className="text-white text-2xl font-medium">hminDev()</h1>
      <p className="text-white text-base font-medium text-center">
        Could not find requested resource. Back to home after
        <ReactCountdown
          date={new Date(new Date().getTime() + 2000)}
          renderer={renderer}
          onComplete={() => router.push('/')}
        />
        seconds.
      </p>
      <Link
        href="/"
        className="bg-gray-900 w-fit py-2 px-4 flex justify-center items-center font-medium text-2xl rounded-lg text-white"
      >
        Back to Home
      </Link>
    </main>
  );
}
