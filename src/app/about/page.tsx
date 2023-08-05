import { AboutMe, Skills } from '@/modules/about';

export default function About() {
  return (
    <main className="flex flex-col items-center w-full pt-header">
      <div className="container min-h-[110vh] flex flex-col p-5 w-full gap-8">
        <AboutMe />
        <Skills />
      </div>
    </main>
  );
}
