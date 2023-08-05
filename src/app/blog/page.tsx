import Image from 'next/image';

export default function Blog() {
  return (
    <main className="flex flex-col gap-8 min-h-screen justify-center items-center">
      <Image
        src={'/images/beach.jpg'}
        width={390}
        height={800}
        alt="bicycle"
        className="rounded-lg"
      />
      <h1 className=" text-white text-2xl text-center">
        I like traveling, I will arrive soon.
      </h1>
    </main>
  );
}
